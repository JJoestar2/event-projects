<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class EventCategoryController extends Controller
{
    public function getAllCategories()
    {
        return CategoryResource::collection(Category::all());
    }
}
