<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Product;
use MoonShine\Contracts\UI\ComponentContract;
use MoonShine\Contracts\UI\FieldContract;
use MoonShine\Laravel\Fields\Relationships\BelongsTo;
use MoonShine\Laravel\Fields\Relationships\HasOne;
use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\UI\Components\Layout\Box;
use MoonShine\UI\Fields\ID;
use MoonShine\UI\Fields\Image;
use MoonShine\UI\Fields\Number;
use MoonShine\UI\Fields\Text;

/**
 * @extends ModelResource<Product>
 */
class ProductResource extends ModelResource
{
    protected string $model = Product::class;

    protected string $title = 'Products';

    /**
     * @return list<FieldContract>
     */
    protected function indexFields(): iterable
    {
        return [
            ID::make()->sortable(),
            Text::make('Name', 'name')->sortable(),
            Text::make('Description', 'description'),
            Text::make('Structure', 'structure'),
            Image::make('Poster', 'poster')->disk('public'),
            Number::make('Weight', 'weight'),
            Number::make('Calories', 'cal'),
            Number::make('Protein', 'protein'),
            Number::make('Fats', 'fats'),
            Number::make('Carb', 'carb'),
            BelongsTo::make(
                'Category',
                'category',
                fn($item) => "$item->id. $item->title",
                CategoryResource::class
            ),
        ];
    }

    /**
     * @return list<ComponentContract|FieldContract>
     */
    protected function formFields(): iterable
    {
        return [
            Box::make([
                ID::make(),
                Text::make('Name', 'name')->required(),
                Text::make('Description', 'description')->required(),
                Text::make('Structure', 'structure')->required(),
                Image::make('Poster', 'poster')->required(),
                Number::make('Weight', 'weight')->required(),
                Number::make('Calories', 'cal')->required(),
                Number::make('Protein', 'protein')->required(),
                Number::make('Fats', 'fats')->required(),
                Number::make('Carb', 'carb')->required(),
                BelongsTo::make(
                    'Category',
                    'category',
                    fn($item) => "$item->id - " . "$item->name",
                    CategoryResource::class
                ),
            ])
        ];
    }

    /**
     * @return list<FieldContract>
     */
    protected function detailFields(): iterable
    {
        return [
            ID::make(),
            Text::make('Name', 'name')->required(),
            Text::make('Description', 'description')->required(),
            Text::make('Structure', 'structure')->required(),
            Image::make('Poster', 'poster')->required(),
            Number::make('Weight', 'weight')->required(),
            Number::make('Calories', 'cal')->required(),
            Number::make('Protein', 'protein')->required(),
            Number::make('Fats', 'fats')->required(),
            Number::make('Carb', 'carb')->required(),
            BelongsTo::make(
                'Category',
                'category',
                fn($item) => "$item->id - " . "$item->name",
                CategoryResource::class
            ),
        ];
    }

    /**
     * @param Product $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    protected function rules(mixed $item): array
    {
        return [];
    }
}
