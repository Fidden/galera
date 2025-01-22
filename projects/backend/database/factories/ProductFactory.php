<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->words(3, true),
            'poster' => 'https://static.tildacdn.com/tild3263-3039-4463-b434-653735666230/Defualtsufle.png',
            'weight' => $this->faker->randomFloat(2, 1, 1000),
            'cal' => $this->faker->randomFloat(2, 1, 1000),
            'protein' => $this->faker->randomFloat(2, 1, 1000),
            'fats' => $this->faker->randomFloat(2, 1, 1000),
            'carb' => $this->faker->randomFloat(2, 1, 1000),
            'structure' => $this->faker->paragraphs(2, true),
        ];
    }
}
