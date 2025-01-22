# Stage: Base
FROM php:8.4-fpm-alpine

# Install necessary packages
RUN apk add --no-cache \
    build-base freetype-dev \
    zlib-dev libzip-dev oniguruma-dev zip unzip curl \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql mysqli

# Install Composer
COPY --from=composer:2.7.6 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Additional setup script for migrations and indexing
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

# Create www user
RUN addgroup -g 1000 www && adduser -D -u 1000 -G www www \
    && chown -R www:www /var/www/html

COPY . .

# Set environment variables (default to production)
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}

RUN mkdir -p /var/www/html/storage/logs \
    && chown -R www:www /var/www/html/storage \
    && chmod -R 775 /var/www/html/storage \
    && mkdir -p /var/www/html/vendor \
    && chown -R www:www /var/www/html/vendor \
    && chmod -R 775 /var/www/html/vendor

RUN sudo chown -R www-data:www-data /var/www/html \
    && sudo chmod 775 -R /var/www/html

composer install --no-dev --optimize-autoloader; \


USER www

# Expose port for communication
EXPOSE 9000

# Default command
CMD ["php-fpm"]

ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]
