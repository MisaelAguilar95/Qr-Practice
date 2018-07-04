<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MaterialStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //to do validar que el usuario tenga el rol de storekeeper 
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' =>  'required|string|max:255|unique:materials',
            'description' => 'required|string|max:255',
            'qr_code' => 'required|string|max:255|unique:materials'
        ];
    }
}
