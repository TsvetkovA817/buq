<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ctg;
use App\Models\T01;
//use Validator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class RbController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCtgAll()
    {
        $products = Ctg::all();

        return response()->json([
            "success" => true,
            "message" => "Product List",
            "data" => $products
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getCtgById($id)
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


    public function lastbooks($categ, $count)
    {
        $msg = "";
        $msg_kod = 500;
        $success = false;
        $isOk = false;

        if ($categ && $count) {
            $books = T01::query()->where('category_id', $categ)->latest()->take($count)->get();
        } elseif (!$categ && $count) {
            $books = T01::query()->latest()->take($count)->get();
        } elseif ($categ && !$count) {
            $books = T01::query()->where('category_id', $categ)->latest()->get();
        } elseif (!$categ && !$count) {
            $books = T01::query()->latest()->get();
        }
        $k = count($books);
        if ($k >= 0) {
            $msg = 'Found ' . $k . ' elements';
            $msg_kod = 200;
            $success = true;
        }
        return $this->sendResponse($books, $msg, $msg_kod, $success);
    }


    public function lastbooksByTheme($categ, $count)
    {
        $msg = "";
        $msg_kod = 500;
        $success = false;
        $isOk = false;

        $books = T01::query()->latest()
            ->leftJoin('categories_has_books', 'books.id', '=', 'categories_has_books.books_uuid')
            ->where('books.category_id', $categ)->orWhere('categories_has_books.categories_uuid', $categ)
            ->take($count)->get();

        $k = count($books);
        if ($k >= 0) {
            $msg = 'Found ' . $k . ' elements';
            $msg_kod = 200;
            $success = true;
        }
        return $this->sendResponse($books, $msg, $msg_kod, $success);
    }


    public function getRb(Request $request)
    {

        $lastbooks = DB::select('select id,title,categ from t01s ORDER BY id desc LIMIT 100');

        $arrc = [];
        $s = '';
        $countcards = 5;
        $countctg = 3;
        $arrRb = [];
        $arrRbC = [];
        $arrCe = [];
        $tc = '';

        if ($request->ctgs)  $countctg = intval($request->ctgs);
        if ($request->cards) $countcards = intval($request->cards);

        foreach ($lastbooks as $el) {
            $tc = $el->categ;
            $f = in_array(trim($tc), $arrCe, true);

            if (!$f) {
               
                $arrCe[] = $tc;

                $c = DB::select('select count(id) AS kol from t01s WHERE categ=?', [$tc]);
                $k = intval($c[0]->kol);
                if ($k >= $countcards) {
                    $arrc[] = $tc;
                }
                $l = count($arrc);
                if ($l >= $countctg) {
                    break;
                }
                
            } 
        }
        $tp = 2;
       
        foreach ($arrc as $categ) {
            $c = [];
            $c = DB::select('select id,title,categ,price,author, 1 as place from t01s WHERE categ=? ORDER BY id desc LIMIT ?', [$categ, $countcards]);
            for ($i = 0; $i < $countcards; $i++) {
                $c[$i]->place = $tp;
                $tp = $tp + 1;
            }
            if (count($c) > 0) {
                $arrRb[] = $c;
            }

            $tp = $tp + 1;
            $c = [];
            $c = DB::select('select id,title,folder,id as idc from ctgs WHERE folder=?', [$categ]);
           
            if ($c) {
                $arrRbC[] = $c[0];  
            } else {
                $arrRbC[] = array("id" => "11", "title" => "11t", "folder" => "11", "idc" => "11");
            }
        }

        return response()->json([
            "success" => true,
            "message" => "Product retrieved successfully.",
            "data1" => $arrRbC,
            "data2" => $arrRb,
            "arrc" => $arrc,
            "req" => $countctg
        ]);
    }
}
