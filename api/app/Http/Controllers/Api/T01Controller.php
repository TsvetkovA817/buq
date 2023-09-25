<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\T01;
//use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class T01Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = T01::all();

        return response()->json([
            "success" => true,
            "message" => "Product List",
            "data" => $products
        ]);
    }

    public function allbookslatest()
    {
        $products = T01::query()->latest()->get();

        return response()->json([
            "success" => true,
            "message" => "Product List",
            "data" => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'id' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $product = T01::create($input);

        return response()->json([
            "success" => true,
            "message" => "Product created successfully.",
            "data" => $product
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, string $id)
    public function update(Request $request)
    {
        $isOk = false;
        $el = T01::find(intval($request->id));
        if ($el) {
            if ($request->title) {
                $el->title = $request->title;
            }
            if ($request->author) {
                $el->author = $request->author;
            }
            if ($request->desc) {
                $el->desc = $request->desc;
            }
            if ($request->price) {
                $el->price = $request->price;
            }
            if ($request->categ) {
                $el->categ = $request->categ;
            }
            if ($request->ctg_id) {
                $el->ctg_id = $request->ctg_id;
            }
            if ($request->cnt) {
                $el->cnt = $request->cnt;
            }
            $isOk = $el->save();
        } else {
            return response()->json([
                "success" => false,
                "message" => "Book not found",
                "data" => $el
            ]);
        }

        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Book updated successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Book updated error",
                "data" => $el
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy1(string $id)
    {
        $product = T01::find(intval($id));
        $product->delete();

        return response()->json([
            "success" => true,
            "message" => "Product deleted successfully.",
            "data" => $product
        ]);
    }

    public function destroy(Request $request)
    {
        $isOk = false;
        $el = T01::find(intval($request->id));
        if ($el) {
            $isOk = $el->delete();
        } else {
            return response()->json([
                "success" => false,
                "message" => "Book not found",
                "data" => $el
            ]);
        }

        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Book deleted successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Book deleted error",
                "data" => $el
            ]);
        }
    }


    public function getbook(Request $request)
    {
        $isOk = false;
        $id = intval($request->id);
        $el = T01::find($id);

        if ($el) {
            $isOk = true;
        } else {
            return response()->json([
                "success" => false,
                "message" => "Book not found",
                "data" => $id
            ]);
        }

        if ($isOk) {
            return response()->json([
                "success" => true,
                "message" => "Book get successfully.",
                "data" => $el
            ]);
        } else {
            response()->json([
                "success" => false,
                "message" => "Book get error",
                "data" => $id
            ]);
        }
    }


    public function getpbooks(Request $request)
    {
        $isOk = false;
        $page = intval($request->page);
        $search = $request->search;
        $cpage = intval($request->cpage);  
        $idc = intval($request->idc);

        $ofs = ($page - 1) * $cpage;
        $lmt = $cpage;
        $s1 = '';
        $s2 = '';
        $par1 = $search;
        $par2 = $search;
        $k = [];
        $c = [];

        if ($search) {
            $s1 = "select id,title,categ,price,author from t01s WHERE LOCATE(LOWER( ? ), LOWER(title))>0 OR LOCATE(LOWER( ? ), LOWER(author))>0 ORDER BY id desc  LIMIT ? OFFSET ?";
            $s2 = "select count(id) as crecs from t01s  WHERE LOCATE(LOWER( ? ), LOWER(title))>0 OR LOCATE(LOWER( ? ), LOWER(author))>0"; //всего с условием
            $k = [];
            $k = DB::select($s2, [$par1, $par2]);
            $c = [];
            $c = DB::select($s1, [$par1, $par2, $lmt, $ofs]);
        } elseif ($idc) {
            $s2 = "select count(id) as crecs from t01s  WHERE ctg_id= ?"; 
            $k = [];
            $k = DB::select($s2, [$idc]);

            $s1 = "select id,title,categ,price,author from t01s WHERE ctg_id= ? ORDER BY id desc  LIMIT ? OFFSET ?";
            $c = [];
            $c = DB::select($s1, [$idc, $lmt, $ofs]);
        } else {

            $s1 = "select id,title,categ,price,author from t01s ORDER BY id desc LIMIT ? OFFSET ?";
            $s2 = "select count(id) as crecs from t01s"; 

            $k = [];
            $k = DB::select($s2);

            $c = [];
            $c = DB::select($s1, [$lmt, $ofs]);
        }

        return response()->json([
            "success" => true,
            "message" => "Books found",
            "search" => $search,
            "idc" => $idc,
            "all" => $k[0]->crecs,
            "page" => $page,
            "cpage" => $cpage,
            "data" => $c
        ]);
    }
}
