<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(movie $movie){
        return $movie;
    }
}
