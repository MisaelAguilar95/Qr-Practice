<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});

 // Route::get('/users', function (Request $request) {
 // 	return 'dwq';
 // });
Route::get('/users', 'UsersController@all');
// Route::get('/users/{id}', 'UsersController@find');
Route::post('/users/{user}/materials/{material}', 'UsersController@attach');
// Route::resource('/materials', 'MaterialsController');


Route::get('/materials', 'MaterialsController@index');
Route::get('/materials/{id}', 'MaterialsController@show');
Route::delete('/materials/{id}', 'MaterialsController@eliminar');
Route::patch('/materials/{id}', 'MaterialsController@update');