<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Demon Slayer : Kimetsu No Yaiba',
                'slug' => 'demon-slayer-kimetsu-no-yaiba',
                'category' => 'Action, Adventures',
                'video_url' => '/images/demon.mp4',
                'thumbnail' => 'kny.jpg',
                'rating' => 9.3,
            ],
            [
                'name' => 'Attack On Titan',
                'slug' => 'attack-on-titan',
                'category' => 'Action, Adventures',
                'video_url' => '/images/demon.mp4',
                'thumbnail' => 'aot.jpg',
                'rating' => 9.1,
            ],
            [
                'name' => 'Cyberpunk Edgerunners',
                'slug' => 'cyberpunk-edgerunners',
                'category' => 'Action, Adventures',
                'video_url' => '/images/demon.mp4',
                'thumbnail' => 'cb2.png',
                'rating' => 9.9,
            ]
        ];

        movie::insert($movies);
    }
}
