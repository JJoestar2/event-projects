<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;

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

Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::view('/', 'welcome');

/*========== Events Routes =====*/
Route::get('/event/create', [EventController::class, 'createEvent']);

Route::get('/event/{id}', [EventController::class, 'getEventById']);
Route::any('/event/register/{userId}/{eventId}', [EventController::class, 'registerInEvent']);
Route::any('/event/leave/{userId}/{eventId}', [EventController::class, 'leaveFromEvent']);

Route::post('/event/save', [EventController::class, 'saveEvent']);

/*================ User Routes ===============*/
Route::get('/user/edit', [EventController::class, 'editUser'])->middleware('auth');
Route::get('/user/save/{id}', [EventController::class, 'saveUser']);
