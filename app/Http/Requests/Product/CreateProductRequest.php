<?php

namespace App\Http\Requests\Product;

use App\Product;
use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('create', Product::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'provider_id' => 'required|exists:providers,id',
            'client_id' => 'required|exists:clients,id',
            'name' => 'required|string',
            'description' => 'nullable|string',
            'buy_price' => 'required|numeric|min:1',
            'sell_price' => 'required|numeric|min:1',
            'image' => 'nullable|mimes:jpeg,jpg,bmp,png,webp'
        ];
    }
}
