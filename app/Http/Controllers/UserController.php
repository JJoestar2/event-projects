<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditUserDataRequest;
use App\Http\Requests\EditUserPasswordRequest;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use Auth;
use File;
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function editUser()
    {
        $user = User::select(['id', 'name', 'surname', 'email', 'phone', 'country', 'city', 'photo'])
            ->where('id', Auth::id())
            ->get();
        return view('edit-user', ['user' => $user]);
    }

    public function saveUser(EditUserDataRequest $request, $id)
    {
        if($request->validated())
        {
            User::where('id', $id)
                ->update([
                    'name' => $request->input('name'),
                    'surname' => $request->input('surname'),
                    'email' => $request->input('email'),
                    'phone' => $request->input('phone'),
                    'country' => $request->input('country'),
                    'city' => $request->input('city')
                ]);
        }

        return redirect("/user/edit");
    }

    public function saveUserPassword(EditUserPasswordRequest $request, $id)
    {
        if($request->validated())
        {
            $newPassword = Hash::make($request->input('password'));
            User::where('id', $id)
                ->update([
                    'password' => $newPassword
                ]);
        }

        return redirect("/user/edit");
    }

    public function changePhoto(Request $request, $id)
    {
        $request->validate([
            'photo' => 'required|mimes:jpg,png,jpeg|max:5048'
        ]);

        if($request->old_photo != '') {
            File::delete('images/avatars/' . "$request->old_photo");
        }

        $imageName = time() . '-' . "{$id}" . '.' . $request->photo->extension();
        $request->photo->move(public_path('images/avatars'), $imageName);

        User::where('id', $id)
            ->update([
                'photo' => $imageName
            ]);

        return redirect("/user/edit");

    }
}
