<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            // 'slug' => 'required|string|unique:movies,slug',
            'category' => 'required|string',
            'video_url' => 'required|string',
            'description' => 'required|string',
            'thumbnail' => 'required|image',
            'rating' => 'required|numeric',
        ];
    }
}
