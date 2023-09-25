<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T06 extends Model
{
    use HasFactory;

    protected $table = 't06s';

    public $timestamps = true;

    protected $fillable = [
          't01_id',
		  'cnt',
          'price',
          'sm',
    ];
}
