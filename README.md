# Meu Portfólio Pessoal

Portfólio pessoal moderno, responsivo e bilíngue (PT/EN) para apresentar meus projetos, habilidades e experiência profissional. Construído com Next.js 16 e React 19, com um formulário de contato protegido por **rate limiting distribuído em Redis (Upstash)**.

## ✨ Destaques

- Interface responsiva com animações suaves (Framer Motion) e estilização com Tailwind CSS v4
- Conteúdo em **português e inglês**, com alternância de idioma
- Seções: Hero, Sobre, Habilidades, Experiência, Projetos, Formação e Contato
- Formulário de contato com API própria, validação no servidor e envio via EmailJS
- **Rate limiting com Redis** para proteger o envio de mensagens contra spam e abuso
- Cabeçalhos de segurança HTTP configurados no `next.config.ts`

## 🔴 Uso de Redis: rate limiting no formulário de contato

O ponto técnico central do projeto é a proteção da rota `POST /api/contact` com um **rate limiter distribuído baseado em Redis**, usando [Upstash Redis](https://upstash.com) (serverless, acessado via REST) e a biblioteca `@upstash/ratelimit`.

### Por que Redis?

Em um deploy serverless (como a Vercel), cada requisição pode cair em uma instância diferente, então um contador guardado em memória não é confiável. O Redis funciona como um **estado compartilhado e persistente** entre todas as instâncias, garantindo que o limite por IP seja respeitado de forma consistente.

### Como funciona

| Item | Detalhe |
| --- | --- |
| Algoritmo | Janela deslizante (`Ratelimit.slidingWindow`) |
| Limite | **3 mensagens a cada 10 minutos por IP** |
| Identificação do cliente | Primeiro IP de `x-forwarded-for` (ou `x-real-ip`) |
| Chaves no Redis | Prefixo `portfolio:ratelimit:contact` |
| Analytics | Habilitado (`analytics: true`) |
| Cliente | `@upstash/redis` (REST, sem conexão TCP persistente) |

### Fluxo da requisição

1. O formulário (`ContactSection`) envia `email` e `message` para `/api/contact`.
2. A rota identifica o IP do cliente e consulta o limiter em `lib/ratelimit.ts`, que usa o Redis.
3. Se o limite foi excedido, responde **`429 Too Many Requests`** com `Retry-After` e mensagem em PT/EN, sem processar o corpo da requisição.
4. Se está dentro do limite, valida os dados (e-mail válido, mensagem entre 10 e 2000 caracteres) e envia o e-mail via API REST do EmailJS.
5. Todas as respostas incluem cabeçalhos informativos:
   - `X-RateLimit-Limit`
   - `X-RateLimit-Remaining`
   - `X-RateLimit-Reset`
   - `X-RateLimit-Source` (`valkey` ou `memory-fallback`)

### Fallback gracioso

Se as credenciais do Redis não estiverem configuradas (por exemplo, em desenvolvimento local), o projeto **não quebra**: `lib/ratelimit.ts` usa automaticamente um limitador de janela deslizante **em memória**, e o cabeçalho `X-RateLimit-Source` passa a indicar `memory-fallback`. Assim é possível rodar o projeto sem criar um banco.

### Compatível com Valkey

As variáveis de ambiente aceitam tanto os nomes `UPSTASH_REDIS_REST_*` quanto os aliases `VALKEY_REST_*`, permitindo usar um banco Redis ou Valkey compatível com a API REST da Upstash.

## 🚀 Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** (App Router) & **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** para estilização
- **[Framer Motion](https://www.framer.com/motion/)** para animações e transições
- **[Lucide React](https://lucide.dev/)** para os ícones
- **[Upstash Redis](https://upstash.com/)** + **[@upstash/ratelimit](https://github.com/upstash/ratelimit-js)** para rate limiting distribuído
- **[EmailJS](https://www.emailjs.com/)** para o envio dos e-mails do formulário de contato
- **[canvas-confetti](https://github.com/catdad/canvas-confetti)** para o feedback visual de envio
- **ESLint** para qualidade de código

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── api/contact/route.ts   # API do formulário (rate limit + validação + EmailJS)
│   ├── layout.tsx
│   ├── page.tsx               # Composição das seções
│   └── globals.css
├── components/                # Seções e componentes de UI
├── context/AppContext.tsx     # Estado global (idioma, etc.)
├── lib/
│   ├── ratelimit.ts           # Rate limiter com Redis + fallback em memória
│   ├── data.ts                # Conteúdo do portfólio (PT/EN)
│   └── types.ts
├── public/
├── next.config.ts             # Cabeçalhos de segurança
└── .env.example               # Modelo das variáveis de ambiente
```

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- Node.js 20 ou superior
- npm

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/antoniobouneto/meu-portfolio.git
cd meu-portfolio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Verifica o código com ESLint |

## 🔐 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

### Redis / Upstash (rate limiting)

Crie um banco Redis gratuito em [upstash.com](https://upstash.com) e copie a **REST URL** e o **REST TOKEN** do dashboard.

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Alternativa (aliases Valkey):
# VALKEY_REST_URL=
# VALKEY_REST_TOKEN=
```

> Sem essas variáveis, o rate limiting roda em memória (apenas para desenvolvimento).

### EmailJS (envio de e-mails)

```env
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
EMAILJS_PRIVATE_KEY=   # opcional, para envio seguro pelo backend

# Compatibilidade com o front-end:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Os valores são obtidos em [emailjs.com](https://www.emailjs.com). Se o EmailJS não estiver configurado, a API sinaliza `fallbackToMailto` e o front-end abre o cliente de e-mail do usuário.

## ☁️ Deploy

O projeto é pensado para deploy na **Vercel**. Basta importar o repositório e cadastrar as mesmas variáveis de ambiente (Upstash e EmailJS) nas configurações do projeto.

## 🔒 Segurança

- Rate limiting por IP com Redis na rota de contato
- Validação de e-mail e tamanho da mensagem no servidor
- Cabeçalhos HTTP: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy` e `Permissions-Policy`
- Chaves privadas mantidas no servidor e arquivos `.env*` ignorados pelo Git

## 👤 Autor

**Antonio Boucinhas Neto** — Desenvolvedor Full Stack

- GitHub: [@antoniobouneto](https://github.com/antoniobouneto)
- LinkedIn: [antonio-boucinhas-neto](https://www.linkedin.com/in/antonio-boucinhas-neto/)
