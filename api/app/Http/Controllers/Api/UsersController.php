<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::query()->select('id', 'name', 'email', 'fname', 'adr', 'updated_at')->get();

        return response()->json([
            "success" => true,
            "message" => "Users list",
            "data" => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = DB::table('users')->insert([
            'name' => 'Juan Dela Cruz',
            'email' => 'dcruz@gmail.com',
            'password' => bcrypt('12345')
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $el = User::find(intval($request->id));
        if ($el) {
            if ($request->name) {
                $el->name = $request->name;
            }
            if ($request->email) {
                $el->email = $request->email;
            }
            if ($request->adr) {
                $el->adr = $request->adr;
            }
            if ($request->fname) {
                $el->fname = $request->fname;
            }

            $isOk = $el->save();
        } else {
            return response()->json([
                "success" => false,
                "message" => "User not found",
                "data" => $el
            ]);
        }
        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "User updated successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "User updated error",
                "data" => $el
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
