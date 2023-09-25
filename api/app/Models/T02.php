<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T02 extends Model
{
    use HasFactory;

    protected $table = 't02s';
    
    public $timestamps = true;
    
    protected $fillable = [
          'zn'
    ];
}
