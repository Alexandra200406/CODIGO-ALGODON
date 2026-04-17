<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coleccion extends Model
{
    use HasFactory;

    // Indicamos el nombre exacto de la tabla en la base de datos
    protected $table = 'colecciones';

    // Permitimos que estos campos se guarden desde el formulario
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
}