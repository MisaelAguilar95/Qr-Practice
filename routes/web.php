<?php

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

Route::get('/users', 'UsersController@all');
Route::get('/users/{id}', 'UsersController@find');
Route::post('/users/{user}/materials/{material}', 'UsersController@attach');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/', function () {
	return view('welcome');
});

Route::get('/qr', function () {//User::find()->idate(format)
	return \QRCode::text(\App\User::first())->svg();
});