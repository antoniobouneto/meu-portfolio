import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Support both UPSTASH_* and VALKEY_* environment variable names
const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL || process.env.VALKEY_REST_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.VALKEY_REST_TOKEN;

const isValkeyConfigured = Boolean(redisUrl && redisToken);

// Upstash / Valkey distributed rate limiter instance
let valkeyRateLimiter: Ratelimit | null = null;

if (isValkeyConfigured) {
  const redis = new Redis({
    url: redisUrl!,
    token: redisToken!,
  });

  // Limit: max 3 contact submissions per 10 minutes per IP
  valkeyRateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '10 m'),
    analytics: true,
    prefix: 'portfolio:ratelimit:contact',
  });
}

// In-memory fallback sliding window limiter for local development
// or when Valkey/Upstash credentials are not yet configured in environment variables.
const memoryRateLimitMap = new Map<string, number[]>();
const MEMORY_LIMIT = 3;
const MEMORY_WINDOW_MS = 10 * 60 * 100; // 10 minutes

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  source: 'valkey' | 'memory-fallback';
}

/**
 * Checks and increments rate limit for a given IP address.
 * Uses Valkey/Redis if configured, with a graceful fallback to in-memory sliding window.
 */
export async function checkContactRateLimit(ip: string): Promise<RateLimitResult> {
  if (valkeyRateLimiter) {
    const result = await valkeyRateLimiter.limit(ip);
    return {
      success: result.success,
      limit: result.limit,
      remaining: result.remaining,
      reset: result.reset,
      source: 'valkey',
    };
  }

  // Fallback to in-memory cache
  const now = Date.now();
  const timestamps = (memoryRateLimitMap.get(ip) || []).filter(
    (timestamp) => now - timestamp < MEMORY_WINDOW_MS
  );

  if (timestamps.length >= MEMORY_LIMIT) {
    const oldest = timestamps[0];
    const reset = oldest + MEMORY_WINDOW_MS;
    return {
      success: false,
      limit: MEMORY_LIMIT,
      remaining: 0,
      reset,
      source: 'memory-fallback',
    };
  }

  timestamps.push(now);
  memoryRateLimitMap.set(ip, timestamps);

  return {
    success: true,
    limit: MEMORY_LIMIT,
    remaining: MEMORY_LIMIT - timestamps.length,
    reset: now + MEMORY_WINDOW_MS,
    source: 'memory-fallback',
  };
}
