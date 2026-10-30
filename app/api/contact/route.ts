import { NextRequest, NextResponse } from 'next/server';
import { checkContactRateLimit } from '@/lib/ratelimit';

const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // 1. Identify client IP (Vercel provides x-forwarded-for reliably)
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor
      ? forwardedFor.split(',')[0].trim()
      : req.headers.get('x-real-ip') || '127.0.0.1';

    // 2. Query Valkey / Redis distributed rate limiter
    const rateLimit = await checkContactRateLimit(ip);

    const rateLimitHeaders: Record<string, string> = {
      'X-RateLimit-Limit': rateLimit.limit.toString(),
      'X-RateLimit-Remaining': rateLimit.remaining.toString(),
      'X-RateLimit-Reset': rateLimit.reset.toString(),
      'X-RateLimit-Source': rateLimit.source,
    };

    if (!rateLimit.success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((rateLimit.reset - Date.now()) / 1000)
      );
      rateLimitHeaders['Retry-After'] = retryAfterSeconds.toString();

      return NextResponse.json(
        {
          error:
            'Too many requests. You have reached the message limit. Please try again later.',
          errorPT:
            'Limite de mensagens atingido. Aguarde alguns minutos antes de tentar novamente.',
          retryAfter: retryAfterSeconds,
          source: rateLimit.source,
        },
        {
          status: 429,
          headers: rateLimitHeaders,
        }
      );
    }

    // 3. Parse and validate request body
    const body = await req.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          error: 'Please provide a valid email address.',
          errorPT: 'Por favor, forneça um e-mail válido.',
        },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          error: 'Message must be at least 10 characters.',
          errorPT: 'Por favor, escreva uma mensagem com no mínimo 10 caracteres.',
        },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          error: `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`,
          errorPT: `Mensagem muito longa (máximo ${MAX_MESSAGE_LENGTH} caracteres).`,
        },
        { status: 400, headers: rateLimitHeaders }
      );
    }

    // 4. Check EmailJS configuration
    const serviceId =
      process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback signal for frontend to open mailto if EmailJS is not configured
      return NextResponse.json(
        {
          fallbackToMailto: true,
          email,
          message,
        },
        { status: 200, headers: rateLimitHeaders }
      );
    }

    // 5. Send email securely via EmailJS REST API from server
    const emailPayload: {
      service_id: string;
      template_id: string;
      user_id: string;
      accessToken?: string;
      template_params: Record<string, string>;
    } = {
      service_id: serviceId.trim(),
      template_id: templateId.trim(),
      user_id: publicKey.trim(),
      template_params: {
        from_name: email,
        from_email: email,
        user_email: email,
        email,
        reply_to: email,
        message,
        to_email: 'antoniobneto11@gmail.com',
      },
    };

    if (privateKey) {
      emailPayload.accessToken = privateKey.trim();
    }

    const emailResponse = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      }
    );

    if (!emailResponse.ok) {
      const responseText = await emailResponse.text();
      console.error('EmailJS REST API error:', responseText);
      return NextResponse.json(
        {
          error: 'Failed to send email. Please try again later.',
          errorPT: 'Erro ao enviar e-mail. Tente novamente mais tarde.',
          details: responseText,
        },
        { status: 502, headers: rateLimitHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
        messagePT: 'Mensagem enviada com sucesso!',
      },
      { status: 200, headers: rateLimitHeaders }
    );
  } catch (error) {
    console.error('API Contact route error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred.',
        errorPT: 'Ocorreu um erro inesperado.',
      },
      { status: 500 }
    );
  }
}

