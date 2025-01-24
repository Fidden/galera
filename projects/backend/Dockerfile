# Stage: Base
FROM php:8.4-fpm-alpine as base

# Install necessary packages
RUN apk add --no-cache \
    build-base freetype-dev \
    zlib-dev libzip-dev oniguruma-dev zip unzip curl \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql mysqli

RUN addgroup -g 1000 www && \
    adduser -u 1000 -G www -D -s /bin/bash www

RUN chown -R www:www /var/www/html

USER www

# Install Composer
COPY --from=composer:2.7.6 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

COPY --chown=www:www . .

FROM base as prod
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}
RUN composer install --optimize-autoloader

FROM base as dev
RUN composer install

FROM base
EXPOSE 9000
ENTRYPOINT ["sh", "./docker-entrypoint.sh"]
CMD ["php-fpm"]


