<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lectura extends Model
{
    use HasFactory;
    public function lectura(){
        return $this->belongsTo("App\Models\Lectura");
    }
}
