<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PassportAuthController;
use App\Http\Controllers\Api\CtgController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\T01Controller;
use App\Http\Controllers\Api\T02Controller;
use App\Http\Controllers\Api\T03Controller;
use App\Http\Controllers\Api\T04Controller;
use App\Http\Controllers\Api\RbController;

use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('lgn', [PassportAuthController::class, 'lgn'])->name('lgn');

Route::post('rgn', [PassportAuthController::class, 'register']);

Route::post('notlogined', function () {
    return view('welcome')->name('notlogined');
});

Route::get('/allcateg', [CtgController::class, 'index'])
    ->middleware('api');

Route::get ('/getbook',    [T01Controller::class, 'getbook']); 
Route::get ('/allbooks',    [T01Controller::class, 'index']); 
Route::get ('/getpbooks',    [T01Controller::class, 'getpbooks']); 

Route::get ('/rb',   [RbController::class, 'getRb']);

Route::middleware('auth:api')->group(function () {
    Route::post('/updset', [T02Controller::class, 'update']); 
    Route::get('/getset', [T02Controller::class, 'getset']); 

    Route::get ('/getallcarts',   [T03Controller::class, 'getallcarts']); //лк
    Route::get ('/getallfavs',    [T04Controller::class, 'getallfavs']); //лк
    Route::get ('/getucart',   [T03Controller::class, 'getucart']); //лк
    Route::get ('/getufav',    [T04Controller::class, 'getufav']); //лк
    Route::post('/updcrtid', [T03Controller::class, 'updateById']); //лк
    Route::post('/updfavid', [T04Controller::class, 'updateById']); //лк
    Route::delete ('/delcrtid',   [T03Controller::class, 'destroy']);//лк
    Route::delete ('/delfavid',   [T04Controller::class, 'destroy']);//лк
    Route::post('/addcrt', [T03Controller::class, 'store']); //лк
    Route::post('/addcrtgr', [T03Controller::class, 'storegr']); //лк
    Route::post('/addfav', [T04Controller::class, 'store']); //лк
    Route::post('/updcnt', [T03Controller::class, 'updatecnt']); //лк

    Route::post('/addbook', [T01Controller::class, 'store']); //лк
    Route::post('/updbook', [T01Controller::class, 'update']); //лк
    Route::get ('/books',   [T01Controller::class, 'index']); //лк
    Route::delete ('/delbook',   [T01Controller::class, 'destroy']);//лк

    Route::get('getuser', [PassportAuthController::class, 'userInfo']);
    Route::get('ctg/{id}', [CtgController::class, 'show']);
    Route::get('logout', [PassportAuthController::class, 'logout']);
    Route::get('profile', [PassportAuthController::class, 'userInfo']);
    Route::post('updprofile', [ProfileController::class, 'updProfile']);
    Route::get('/users', [UsersController::class, 'index']);
    Route::post('/upduser', [UsersController::class, 'update']);    
    Route::post('/updctg', [CtgController::class, 'update']); 
    
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
