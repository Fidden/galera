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
    && sudo chmod 775 -R /var/www/html \

# Run application setup steps for dev and prod
RUN if [ "$APP_ENV" = "local" ]; then \
        composer install; \
    else \
      composer install --no-dev --optimize-autoloader; \
    fi

# Expose port for communication
EXPOSE 9000

# Default command
CMD ["php-fpm"]

ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]
