<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
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
            'name' => 'nullable|unique:movies,name,'.$this->movie->id,
            // 'slug' => 'nullable|string|unique:movies,slug',
            'category' => 'nullable|string',
            'video_url' => 'nullable|string',
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|image',
            'rating' => 'nullable|numeric',
        ];
    }
}
