#!/bin/sh
set -e

chown -R $USER:www-data /var/www/html/storage/
chown -R $USER:www-data /var/www/html/bootstrap/cache/
chmod -R 775 /var/www/html/storage/
chmod -R 775 /var/www/html/bootstrap/cache/

php artisan migrate:fresh --force

php artisan app:products

# Start PHP-FPM
exec "$@"
