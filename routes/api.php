<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventTypeController;
use App\Http\Controllers\EventCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('events/all', [EventController::class, 'getAllEvents']);
Route::get('events/{title}', [EventController::class, 'findEventsByTitle']);
Route::get('events/filter/{filter}/{id}', [EventController::class, 'filterEventsByCategoryOrType']);

Route::get('type/all', [EventTypeController::class, 'getAllTypes']);
Route::get('category/all', [EventCategoryController::class, 'getAllCategories']);
