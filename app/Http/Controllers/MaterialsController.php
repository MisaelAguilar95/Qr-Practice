<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MaterialStoreRequest;

class MaterialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \App\Material::all();
        // return view('materials.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MaterialStoreRequest $request)
    {
        $material = \App\Material::create($request->all());
        // $material = \App\Material::create([
        //     'name' => 'dsadada.dsad.a',
        //     'description' => 'dwqdwqwdq',
        //     'qr_code' => 'fwefwqfwqfwqfwq'
        // ]);
        return $material;

        //return "estoy en el metodo store en materialsController";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return "estoy en el show" . $id;
        return \App\Material::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //return $request->all();
        $materialToUpdate = \App\Material::findOrFail($id);
        // $materialToUpdate->name = $request->name;
        // $materialToUpdate->save();
        $materialToUpdate->update($request->all());
        return $materialToUpdate;
        //$materialToUpdate->update([])
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function eliminar($id)
    {
        $materialToDelete = \App\Material::findOrFail($id);
        $materialToDelete->delete();
        return $materialToDelete;
    }
}
