<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T04 extends Model
{
    use HasFactory;

    protected $table = 't04s';
    
    public $timestamps = true;
    
    protected $fillable = [
          't01_id',
		  'user_id',
    ];
}
