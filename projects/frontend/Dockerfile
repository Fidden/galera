FROM node:22-alpine as base

# Устанавливаем необходимые системные зависимости (если есть)
RUN apk add --no-cache bash openssh

WORKDIR /app

COPY . .

# Устанавливаем pnpm глобально
RUN npm install -g pnpm --force

# Открываем порт для приложения
EXPOSE 3000

FROM base as dev
RUN pnpm install --force
CMD ["pnpm", "dev"]

FROM base as prod
RUN pnpm install --force && pnpm build
CMD ["pnpm", "vike", "preview"]
