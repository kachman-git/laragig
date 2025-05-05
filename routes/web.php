<?php

use App\Http\Controllers\ListingController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ListingController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('dashboard', '/')->name('dashboard');


    Route::resource('listings', ListingController::class)->except(['index']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
