<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Venta;
use Illuminate\Support\Facades\Auth;

class VentaController extends Controller
{
    public function index()
    {
        $ventas = Venta::all();
        return Inertia::render('Ventas/index', [
            'ventas' => $ventas
        ]);
    }

    public function create()
    {
        return Inertia::render('ventas/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required', // Aquí llega el nombre del cliente desde el input
            'metodo_pago' => 'required',
            'total' => 'required|numeric',
            'notas' => 'nullable'
        ]);

        // 2. Creamos la venta
        Venta::create([
            'cliente_id' => 1,
            'user_id' => Auth::id() ?? 1, // El ID del administrador logueado
            'nombre' => $request->nombre,
            'subtotal' => $request->total, // O el cálculo que prefieras
            'impuesto' => 0,
            'total' => $request->total,
            'metodo_pago' => $request->metodo_pago,
            'notas' => $request->notas,
            'estado' => 'COMPLETADA'
        ]);

        return redirect()->route('ventas.index');
    }

    public function update(Request $request, $id)
    {
        $venta = Venta::findOrFail($id);
    
        $venta->update([
            'metodo_pago' => $request->metodo_pago,
            'total' => $request->total,
            'notas' => $request->notas,
        ]);

        return redirect()->route('ventas.index');
    }

    public function destroy($id)
    {
        Venta::destroy($id);
        return redirect()->route('ventas.index');
    }
}