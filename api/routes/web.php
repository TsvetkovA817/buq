<?php

//use Illuminate\Support\Facades\Route;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PassportAuthController;
use App\Http\Controllers\Api\CtgController;

use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Route::get('/login', function () {
//     return view('welcome')->name('login');
// });


Route::post('login', [PassportAuthController::class, 'login'])->name('login');

Route::get('/', function () {
    return view('welcome');
});

