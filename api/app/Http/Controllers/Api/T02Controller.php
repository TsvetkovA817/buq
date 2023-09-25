<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\T02;


class T02Controller extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function getset()
    {
		$products = T02::all();
     
        return response()->json([
            "success" => true,
            "message" => "Settings list",
            "data" => $products
        ]);
    }


	public function getSetById($id)
    {
        $product = T02::find($id);
   
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
        $el = T02::find(intval($request->id));
        if($el){
        if($request->title){
            $el->title = $request->title;
          }

         $isOk=$el->save();
        }
        else{
            return response()->json([
                "success" => false,
                "message" => "Sett not found",
                "data" => $el
            ]);
    
        }
        if($isOk){
        return response()->json([
            "success" => true,
            "message" => "Sett updated successfully.",
            "data" => $el
        ]);
        }
        else{
            response()->json([
                "success" => false,
                "message" => "Sett updated error",
                "data" => $el            
            ]);
        }
    }


	public function update(Request $request)
    {
        $arr= json_decode($request->t02s, true);
		$d='';
		$msg='';
        if($arr){
		foreach ( $arr as $key => $value ) {
			$d=$value;     
			$id=$d['id'];
			$zn=$d['zn'];
			
	        $el = T02::find(intval($id));
             if($el){
				$msg=$msg ."id=$id,zn=$zn ";
                $el->zn=$zn;
			    $el->save();
			 }
		}
		    $msg=$msg .'Settings updated successfully';
	    }
		else{
			$msg='Settings not changed';
		}

		return response()->json([
            "success" => true,
            "message" => $msg,
            "data" => $arr
        ]);
	}        

}


