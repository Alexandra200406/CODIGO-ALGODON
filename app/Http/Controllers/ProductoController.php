<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Producto;

class ProductoController extends Controller
{
    /**
     * VISTA PÚBLICA: Catálogo para clientes (Solo lectura)
     */
    public function catalogo()
    {
        // Importante: Verifica que la carpeta sea "Tienda" y el archivo "Catalogo.tsx"
        return Inertia::render('Tienda/Catalogo', [
            'productos' => Producto::all()
        ]);
    }

    /**
     * VISTA STAFF: Listado de inventario
     */
    public function index()
    {
        return Inertia::render('Productos/Index', [ // Cambiado a Index con Mayúscula por convención
            'productos' => Producto::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Productos/Create'); // Mayúscula
    }

    public function store(Request $request)
    {
        $nuevo = $request->validate([
            'sku' => 'required|unique:productos,sku',
            'nombre' => 'required',
            'precio' => 'required|numeric',
            'stock' => 'required|integer'
        ]);

        Producto::create($nuevo);
        return redirect()->route('productos.index');
    }

    public function edit($id)
    {
        $producto = Producto::findOrFail($id);
        return Inertia::render('Productos/Edit', [ // Mayúscula
            'producto' => $producto
        ]);
    }

    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail($id);
        
        $datos = $request->validate([
            'sku' => 'required|unique:productos,sku,'.$id,
            'nombre' => 'required',
            'precio' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $producto->update($datos);
        return redirect()->route('productos.index');
    }

    public function destroy($id)
    {
        $producto = Producto::findOrFail($id);
        $producto->delete();
        return redirect()->route('productos.index');
    }
}