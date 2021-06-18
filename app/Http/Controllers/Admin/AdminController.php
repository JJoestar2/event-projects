<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Type;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $categories = Category::paginate(5);
        return view('admin.categories', ['categories' => $categories]);
    }

    public function types()
    {
        $types = Type::paginate(5);
        return view('admin.types', ['types' => $types]);
    }

    public function create()
    {
        return view('admin.create-category');
    }

    public function createType()
    {
        return view('admin.create-type');
    }

    public function edit($id)
    {
        $category = Category::where('id', $id)->get();
        return view('admin.category-edit', ['category' => $category]);
    }

    public function editType($id)
    {
        $type = Type::where('id', $id)->get();
        return view('admin.type-edit', ['type' => $type]);
    }

    public function save(Request $request)
    {
        Category::create([
            'category' => $request->input('category')
        ]);
        return redirect('/admin/index');
    }

    public function saveType(Request $request)
    {
        Type::create([
            'type' => $request->input('type')
        ]);
        return redirect('/admin/types');
    }


    public function updateCategory(Request $request, $id)
    {
        Category::where('id', $id)
            ->update([
                'category' => $request->input('category')
            ]);
        return redirect('/admin/index');
    }

    public function updateType(Request $request, $id)
    {
        Type::where('id', $id)
            ->update([
                'type' => $request->input('type')
            ]);
        return redirect('/admin/types');
    }
}
