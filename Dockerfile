# ---------- 1) deps: ставим зависимости ----------
    FROM node:20-alpine AS deps
    WORKDIR /app
    # для некоторых нативных биндингов Next (sharp и пр.)
    RUN apk add --no-cache libc6-compat
    # копируем манифесты, чтобы кешироваться по lock-файлу
    COPY package*.json ./
    # если есть package-lock.json — лучше npm ci
    RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
    
    # ---------- 2) build: сборка Next в standalone ----------
    FROM node:20-alpine AS builder
    WORKDIR /app
    RUN apk add --no-cache libc6-compat
    ENV NODE_ENV=production
    # (опционально) отключим телеметрию Next
    ENV NEXT_TELEMETRY_DISABLED=1
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    # если пробрасываешь публичные билдо-переменные — делай через ARG/ENV
    # ARG NEXT_PUBLIC_COMMIT_SHA=dev
    # ENV NEXT_PUBLIC_COMMIT_SHA=$NEXT_PUBLIC_COMMIT_SHA
    RUN npm run build
    
    # ---------- 3) runner: минимальный рантайм ----------
    FROM node:20-alpine AS runner
    WORKDIR /app
    RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
    ENV NODE_ENV=production
    ENV PORT=3000
    ENV NEXT_TELEMETRY_DISABLED=1
    # public, standalone-сервер и статик ассеты
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    # если используешь Tailwind v4 — ничего доп. не нужно; ассеты уже в .next/static
    USER nextjs
    EXPOSE 3000
    CMD ["node", "server.js"]
    