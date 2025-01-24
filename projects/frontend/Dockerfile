FROM node:22-alpine as base

# Устанавливаем необходимые системные зависимости (если есть)
RUN apk add --no-cache bash openssh

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . .

# Устанавливаем pnpm глобально
RUN npm install -g pnpm

# Открываем порт для приложения
EXPOSE 3000

FROM base as dev
RUN pnpm install --force
CMD ["pnpm", "dev"]

FROM base as prod
RUN pnpm install --prod --frozen-lockfile
CMD ["pnpm", "vike", "preview"]
