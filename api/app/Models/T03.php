<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T03 extends Model
{
    use HasFactory;

    protected $table = 't03s';
    
    public $timestamps = true;
    
    protected $fillable = [
          't01_id',
          'cnt',
		  'user_id',
    ];
}
