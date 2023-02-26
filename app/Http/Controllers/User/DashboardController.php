<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Favourite;
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

    public function Chats(){
        return Inertia::render('ChatsPage');
    }

    public function Favourites(){
        $favourites = Favourite::where('user_id', auth()->user()->id)->get();
        return Inertia::render('User/Favourites', [
            'favourites' => $favourites,
            'movies' => movie::all(),
        ]);
    }
}
