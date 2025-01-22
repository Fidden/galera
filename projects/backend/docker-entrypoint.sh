#!/bin/sh
set -e

php artisan migrate --force

php artisan app:products

# Start PHP-FPM
exec "$@"
