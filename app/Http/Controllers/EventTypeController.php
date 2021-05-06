<?php

namespace App\Http\Controllers;

use App\Http\Resources\TypeResource;
use App\Models\Type;
use Illuminate\Http\Request;

class EventTypeController extends Controller
{
    public function getAllTypes()
    {
        return TypeResource::collection(Type::all());
    }
}
