<?php

namespace App\Http\Requests\PaymentType;

use App\PaymentType;
use Illuminate\Foundation\Http\FormRequest;

class DeletePaymentTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('delete', $this->getModel('payment_type', PaymentType::class));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
