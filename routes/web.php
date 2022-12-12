<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::redirect('/', '/login');

Route::get('/logintes', function(){
    return Inertia::render('LoginPage');
})->name('logintes');

Route::get('/signup', function(){
    return Inertia::render('SignUpPage');
})->name('signuptes');

Route::get('/index', function(){
    return Inertia::render('Index');
})->name('index');

Route::get('/subscription', function(){
    return Inertia::render('Subscription');
})->name('subscription');

//harusnya ada slug disini
Route::get('/movie', function(){
    return Inertia::render('Movie/ShowMovie');
})->name('movie.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
