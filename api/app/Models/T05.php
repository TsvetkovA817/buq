<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T05 extends Model
{
    use HasFactory;

    protected $table = 't05s';

    public $timestamps = true;

    protected $fillable = [
		  'user_id',
          'fname',
          'email',
          'adr',
          'sm',
          'isp',
          'iss',
    ];
}
