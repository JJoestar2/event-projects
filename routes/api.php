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

Route::any('events/all', [EventController::class, 'getAllEvents']);
Route::get('events/{title}', [EventController::class, 'findEventsByTitle']);
Route::get('events/user/{id}', [EventController::class, 'getUserEvents']);
Route::get('event/schedule/user/{id}', [EventController::class, 'getUserSchedule']);
Route::get('created-events/user/{id}', [EventController::class, 'getCreatedEvents']);
Route::get('event/remove/{id}', [EventController::class, 'deleteEvent']);

Route::get('type/all', [EventTypeController::class, 'getAllTypes']);
Route::get('category/all', [EventCategoryController::class, 'getAllCategories']);
