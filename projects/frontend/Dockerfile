FROM node:22-alpine

# Устанавливаем необходимые системные зависимости (если есть)
RUN apk add --no-cache bash openssh

WORKDIR /app

# Копируем package.json, pnpm-workspace.yaml и .npmrc (если есть)
COPY package.json ./

# Устанавливаем pnpm глобально
RUN npm install -g pnpm \
    && pnpm install


COPY . .

# Открываем порт для приложения
EXPOSE 3000

RUN pnpm build

CMD ["pnpm","vike", "preview"]
