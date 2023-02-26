<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;
    protected $table = 'favourites';

    protected $fillable = [
        'user_id',
        'movie_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    protected $with = ['movie'];
    public function movie(){
        return $this->belongsTo(Movie::class);
    }
}
