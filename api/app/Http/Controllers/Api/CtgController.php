<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ctg;
//use Validator;
use Illuminate\Support\Facades\Validator;

class CtgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Ctg::all();

        return response()->json([
            "success" => true,
            "message" => "Product List",
            "data" => $products
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'desc' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $product = Ctg::create($input);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $product
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
        $product = Ctg::find($id);

        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }

        return response()->json([
            "success" => true,
            "message" => "Product retrieved successfully.",
            "data" => $product
        ]);
    }



    public function update(Request $request)
    {
        $el = Ctg::find(intval($request->id));
        if ($el) {
            if ($request->title) {
                $el->title = $request->title;
            }
            if ($request->folder) {
                $el->folder = $request->folder;
            }
            if ($request->desc) {
                $el->desc = $request->desc;
            }

            $isOk = $el->save();
        } else {
            return response()->json([
                "success" => false,
                "message" => "Categ not found",
                "data" => $el
            ]);
        }
        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Categ updated successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Categ updated error",
                "data" => $el
            ]);
        }
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update2(Request $request, Ctg $product)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'desc' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $product->title = $input['title'];
        $product->desc = $input['desc'];
        $product->save();

        return response()->json([
            "success" => true,
            "message" => "Product updated successfully.",
            "data" => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ctg $product)
    {
        $product->delete();

        return response()->json([
            "success" => true,
            "message" => "Product deleted successfully.",
            "data" => $product
        ]);
    }
}
