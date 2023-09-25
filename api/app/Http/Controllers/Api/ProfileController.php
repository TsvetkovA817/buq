<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class ProfileController extends Controller
{
   
    public function updProfile(Request $request)
    {

        $isOk = false;
        $msg = 'Error';

        try {
            $profile = Auth::user();
       
            if (!$profile) {
                $msg = 'Профиль не найден';
            } else {
                if ($request->name) {
                    $profile->name = $request->name;
                }
                if ($request->email) {
                    $profile->email = $request->email;
                }
                if ($request->adr) {
                    $profile->adr = $request->adr;
                }
                if ($request->fname) {
                    $profile->fname = $request->fname;
                }

                $profile->save();
                $msg = 'Saved';
            }
        } catch (\Exception $e) {
            $msg = 'Not saved';
        }
       
        return response()->json(['message' => $msg, 'code' => 200], 200);
    }



    public function getIDAuthUser(Request $request)
    {

        $isOk = false;
        $msg = 'Error';

        try {
            $profile = Auth::user();  
            $id = Auth::id();         

            if (!$id) {
                $msg = 'ID не найден';
            } else {
                $msg = 'ID найден';
            }
        } catch (\Exception $e) {
            $msg = 'no get';
        }
        return response()->json(['message' => $msg, 'code' => 200, 'id' => $id,], 200);
    }
}
