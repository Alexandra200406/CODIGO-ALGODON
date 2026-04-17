<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Coleccion;

class ColeccionController extends Controller
{
    public function index()
    {
        $colecciones = Coleccion::all();
        return Inertia::render('Colecciones/index', [
            'colecciones' => $colecciones
        ]);
    }

    public function create()
    {
        return Inertia::render('Colecciones/create');
    }

    public function store(Request $request)
    {
        $nuevo = $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required'
        ]);
        $colecciones = Coleccion::create($nuevo);
        return redirect()->route('colecciones.index');
    }

    public function edit($id)
    {
        $colecciones = Coleccion::find($id);
        return Inertia::render('Colecciones/edit', [
            'coleccion' => $colecciones->only(['nombre', 'descripcion'])
        ]);
    }

    public function update(Request $request, $nombre)
    {
        $colecciones = Coleccion::where('nombre', $nombre)->firstOrFail();
    
        $colecciones->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
        ]);

        return redirect()->route('colecciones.index');
    }

    public function destroy($id)
    {
        $colecciones = Coleccion::find($id);
        $colecciones->delete();
        return redirect()->route('colecciones.index');
    }
}