<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class movie extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'slug', 'category', 'video_url', 'description', 'thumbnail', 'rating'];
}
