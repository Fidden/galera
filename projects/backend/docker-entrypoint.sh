#!/bin/sh

# Устанавливаем права для storage
chown -R www-data:www-data /var/www/html/storage
chmod -R 775 /var/www/html/storage

# Выполняем миграции и другие команды
php artisan optimize:clear
php artisan migrate:fresh --force
php artisan app:products

exec "$@"
