<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Models\SubscriptionPlan;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

//midtrans route
Route::post('/midtrans/notification', [SubscriptionPlanController::class, 'midtransCallback'])->name('midtrans.notification');

Route::redirect('/', '/login');

Route::get('/logintes', function(){
    return Inertia::render('LoginPage');
})->name('logintes');

Route::get('/signup', function(){
    return Inertia::render('SignUpPage');
})->name('signuptes');

// ini index lama
// Route::get('/index', function(){
//     return Inertia::render('Index');
// })->name('index');

Route::get('/chats', function(){
    return Inertia::render('ChatsPage');
})->name('chats');

// Route::get('/subscription', function(){
//     return Inertia::render('Subscription');
// })->name('subscription');

//harusnya ada slug disini
// Route::get('/movie/{slug}', function(){
//     return Inertia::render('Movie/ShowMovie');
// })->name('movie.show');

// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/chats', [DashboardController::class, 'chats'])->name('chats');
    Route::get('/favourites', [DashboardController::class, 'favourites'])->name('favourites');
    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    Route::get('/subscription', [SubscriptionPlanController::class, 'index'])->name('subscription.index');
    // Route::get('/subscription', [SubscriptionPlanController::class, 'index'])->name('subscription.index')->middleware('checkUserSubscription:false');
    Route::post('subscription/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscription.userSubscribe');

});
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::resource('movie', AdminMovieController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
