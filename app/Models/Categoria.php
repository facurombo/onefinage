<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function Empresas()
       {
        retunr$this->hasMany(Empresa::class);
        }
}
