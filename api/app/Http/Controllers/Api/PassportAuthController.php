<?php

namespace App\Http\Controllers\Api;

use App\Providers\RouteServiceProvider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\Auth\LoginRequest;

class PassportAuthController extends Controller
{
    /**
     * Registration Req
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:4',
        ]);
  
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
  
        $token = $user->createToken('Laravel8PassportAuth')->accessToken;
        $name=$user->name;
        $id=$user->id;
        $data2 = [
            'email' => $user->email,
        ];
        return response()->json(['username'=>$name, 'id'=>$id, 'data'=>$data2,'token'=>$token,'kod'=>200]);
    }
  
    /**
     * Login Req
     */
 
    public function userInfo() 
    {
 
     $user = auth()->user();
      
     return response()->json(['user' => $user], 200);
 
    }


    public function lgn(Request $request) 
    {
       
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];
  
        $data2 = [
            'email' => $request->email,
        ];
  
        if (auth()->attempt($data)) {
           $user=auth()->user();
           $token = $user->createToken('Laravel8PassportAuth')->accessToken;
           $name = $user->name;
           $id=$user->id;
        }
     return response()->json(['username'=>$name, 'id'=>$id, 'data'=>$data2,'token'=>$token,'kod'=>200]);
    }

/**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    
    public function logout(Request $request)
    {
        $user = Auth::user()->token();
        $user->revoke();
        
        return response()->json(['message' => 'Successfully logged out',
        ], 200); 
    }
 
  
/**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

}