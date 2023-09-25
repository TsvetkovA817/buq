<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\T04;
//use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class T04Controller extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function getallfavs()
    {

        $products = T04::all();

        return response()->json([
            "success" => true,
            "message" => "Settings list",
            "data" => $products
        ]);
    }


    public function getSetById($id)
    {
        $product = T04::find($id);

        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }

        return response()->json([
            "success" => true,
            "message" => "Product retrieved successfully.",
            "data" => $product
        ]);
    }

    public function updateById(Request $request)
    {

        $el = T04::find(intval($request->id));
        if ($el) {
            if ($request->t01_id) {
                $el->t01_id = $request->t01_id;
            }

            if ($request->user_id) {
                $el->user_id = $request->user_id;
            }

            $isOk = $el->save();
        } else {
            return response()->json([
                "success" => false,
                "message" => "Fvl el not found",
                "data" => $el
            ]);
        }
        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Fvl el updated successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Fvl el updated error",
                "data" => $el
            ]);
        }
    }


    public function update(Request $request)
    {
        $arr = json_decode($request->t04s, true);
        $d = '';
        $msg = '';
        if ($arr) {
            foreach ($arr as $key => $value) {
                $d = $value;     // {id: 1, zn: '32'}
                $id = $d['id'];
                $zn = $d['zn'];

                $el = T04::find(intval($id));
                if ($el) {
                    $msg = $msg . "id=$id,zn=$zn ";
                    $el->zn = $zn;
                    $el->save();
                }
            }
            $msg = $msg . 'Settings updated successfully';
        } else {
            $msg = 'Settings not changed';
        }

        return response()->json([
            "success" => true,
            "message" => $msg,
            "data" => $arr
        ]);
    }


    public function destroy(Request $request)
    {
        $isOk = false;
        $el = T04::find(intval($request->id));
        if ($el) {
            $isOk = $el->delete();
        } else {
            return response()->json([
                "success" => false,
                "message" => "Fvl el not found",
                "data" => $el
            ]);
        }

        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Fvl el deleted successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Fvl el deleted error",
                "data" => $el
            ]);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            't01_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $product = null;
        $k1 = 0;
        $k2 = 0;
        $k3 = 1;

        $elc = T04::where('t01_id', intval($input['t01_id']))->where('user_id', intval($input['user_id']))->first();

        if (!$elc) {
            $product = T04::create($input);
            $k1 = $k1 + 1;
        } else {
            $k2 = $k2 + 1;
        }

        return response()->json([
            "success" => true,
            "message" => "El created successfully.",
            "all" => $k3,
            "add" => $k1,
            "exist" => $k2,
            "data" => $product
        ]);
    }


    public function getufav(Request $request)
    {

        $idu = intval($request->idu);  

        if ($idu) {
            $s2 = "SELECT t04s.id  as 'id', t04s.t01_id  as 't01_id', t04s.user_id, t01s.title, t01s.author, t01s.categ,t01s.ctg_id,t01s.price
             FROM t04s LEFT JOIN t01s
             ON t01s.id=t04s.t01_id WHERE t04s.user_id= ?";
            $k = [];
            $k = DB::select($s2, [$idu]);
        }

        return response()->json([
            "success" => true,
            "message" => "Settings list",
            "data" => $k
        ]);
    }

}
