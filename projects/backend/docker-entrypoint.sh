#!/bin/sh
set -e

# Check environment
if [ "$APP_ENV" = "local" ]; then
    echo "Running in development mode..."
    composer install
    php artisan migrate:fresh
else
    echo "Running in production mode..."
    php artisan migrate --force
fi

php artisan app:products

# Start PHP-FPM
exec "$@"
