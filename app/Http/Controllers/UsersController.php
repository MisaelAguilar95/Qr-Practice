<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function find(Request $request, $id)
    {
    	if ($request->has('materials')) {
    		return \App\User::findOrFail($id)->load('materials');
    	}
    	return \App\User::findOrFail($id);
    }

    public function all(Request $request)
    {
        return \App\User::all();
    }


    /**
     * Attach a material to a user 
     *
     * @param  \App\User\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function attach($user, $material)
    {
    	$userModel = \App\User::findOrFail($user);
    	$materialModel = \App\Material::findOrFail($material);
    	$userModel->materials()->attach($material, ['notes' => 'fewfwef']);
    	return $userModel->load('materials');
    }
}
