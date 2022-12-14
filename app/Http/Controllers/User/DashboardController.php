<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\movie;

class DashboardController extends Controller
{
    public function index(){
        $movies = movie::all();
        $bMovies = movie::all();
        return Inertia::render('User/Dashboard', [
            'movies' => $movies,
            'bMovies' => $bMovies
        ]);
    }
}
