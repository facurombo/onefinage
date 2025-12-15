<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Empresa;
use App\Models\Categoria;


class Categoria extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function Empresas()
       {
        return$this->hasMany(Empresa::class);
        }
}
