<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\AdminController;

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
Route::get('/event/create', [EventController::class, 'createEvent'])->middleware('auth');
Route::get('/event/edit/{id}', [EventController::class, 'editEvent'])->middleware('auth');

Route::post('/event/update/{id}', [EventController::class, 'eventUpdate']);

Route::get('/event/{id}', [EventController::class, 'getEventById']);

Route::any('/event/register/{userId}/{eventId}', [EventController::class, 'registerInEvent']);
Route::any('/event/leave/{userId}/{eventId}', [EventController::class, 'leaveFromEvent']);

Route::post('/event/save', [EventController::class, 'saveEvent']);

/*================ User Routes ===============*/
Route::get('/user/edit', [UserController::class, 'editUser']);
Route::post('/user/save/{id}', [UserController::class, 'saveUser']);
Route::post('/user/change-password/{id}', [UserController::class, 'saveUserPassword']);


/*======================= Admin Routes ================*/
Route::group(['middleware' => ['role:admin']], function () {

    Route::get('/admin/index', [AdminController::class, 'index'])->name('admin');
    Route::get('/admin/category/create', [AdminController::class, 'create']);
    Route::get('/admin/category/{id}', [AdminController::class, 'edit']);

    Route::post('/admin/category/save', [AdminController::class, 'save']);
    Route::post('/admin/category/{id}/update', [AdminController::class, 'updateCategory']);


    Route::get('/admin/types', [AdminController::class, 'types']);
    Route::get('/admin/type/create', [AdminController::class, 'createType']);
    Route::get('/admin/type/{id}', [AdminController::class, 'editType']);

    Route::post('/admin/type/save', [AdminController::class, 'saveType']);
    Route::post('/admin/type/{id}/update', [AdminController::class, 'updateType']);

});

