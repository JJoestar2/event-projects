<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventEditRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
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
            'category_id' => 'required',
            'type_id' => 'required',
            'title' => 'required|max:45',
            'description' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'status' => 'required',
            'location' => 'required|max:45',
            'count' => 'max:100',
            'preview' => 'mimes:jpg,png,jpeg|max:5048',
        ];
    }
}
