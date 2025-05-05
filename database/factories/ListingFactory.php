<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'email' => $this->faker->unique()->safeEmail(),
            'website' => $this->faker->url(),
            'company' => $this->faker->company(),
            'location' => $this->faker->address(),
            'tags' => 'laravel, api, backend',
            'user_id' => 1,
        ];
    }
}
