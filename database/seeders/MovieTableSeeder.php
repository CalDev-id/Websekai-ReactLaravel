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
                'category' => 'Action, Martial Arts, Adventure',
                'video_url' => 'demon.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'kny.jpg',
                'rating' => 9.3,
            ],
            [
                'name' => 'Attack On Titan',
                'slug' => 'attack-on-titan',
                'category' => 'Action, Martial Arts, Adventure',
                'video_url' => 'attacktitan.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'aot.jpg',
                'rating' => 9.1,
            ],
            [
                'name' => 'Jujutsu Kaisen',
                'slug' => 'jujutsu-kaisen',
                'category' => 'Action, Martial Arts, Adventure',
                'video_url' => 'cyberpunk.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'jujitsu.jpeg',
                'rating' => 7.5,
            ],
            [
                'name' => 'SPY X FAMILY',
                'slug' => 'spy-x-family',
                'category' => 'Comedy, action, family',
                'video_url' => 'cyberpunk.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'spy.jpg',
                'rating' => 9.7,
            ],
            [
                'name' => 'Kaguya-sama: Love Is War',
                'slug' => 'kaguya-sama-love-is-war',
                'category' => 'Drama, Romance, Comedy',
                'video_url' => 'cyberpunk.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'kaguya.jpg',
                'rating' => 9.2,
            ],
            [
                'name' => 'my dress up darling',
                'slug' => 'Drama, Romance, Comedy',
                'category' => 'Action, Martial Arts, Adventure',
                'video_url' => 'cyberpunk.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'darling.jpg',
                'rating' => 9.2,
            ],
            [
                'name' => 'Cyberpunk Edgerunners',
                'slug' => 'cyberpunk-edgerunners',
                'category' => 'Action, Martial Arts, Adventure',
                'video_url' => 'cyberpunk.mp4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati veritatis praesentium reprehenderit
                libero perspiciatis non consectetur....',
                'thumbnail' => 'cb2.png',
                'rating' => 9.9,
            ]
        ];

        movie::insert($movies);
    }
}
