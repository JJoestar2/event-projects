<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use function Symfony\Component\Translation\t;

class EditUserDataRequest extends FormRequest
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
            'name' => 'required|max:45',
            'surname' => 'required',
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => 'required|max:45',
            'country' => 'required',
            'city' => 'required|max:45',
        ];
    }
}
