<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T01 extends Model
{
    use HasFactory;

    protected $table = 't01s';
    
    public $timestamps = true;
    
    protected $fillable = [
         'title','desc', 'ctg_id', 'author', 
         'categ','price','cnt'
    ];
}
