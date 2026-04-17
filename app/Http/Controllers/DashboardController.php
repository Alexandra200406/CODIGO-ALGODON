<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Producto;
use App\Models\Venta;
use App\Models\VentaItem;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $ventasDelMes = Venta::whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('total');

        $ventasDelMesPasado = Venta::whereMonth('created_at', now()->subMonth()->month)
            ->whereYear('created_at', now()->subMonth()->year)
            ->sum('total');

        $ventasTotales = Venta::sum('total');
        $totalClientes = Cliente::count();
        $totalProductos = Producto::count();
        $productosBajoStock = Producto::whereRaw('stock <= stock_minimo')->count();

        $ventasPorDia = Venta::select(
            DB::raw('DATE(created_at) as fecha'),
            DB::raw('COUNT(*) as cantidad'),
            DB::raw('SUM(total) as total')
        )
            ->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])
            ->groupBy('fecha')
            ->orderBy('fecha')
            ->get();

        $topClientes = Cliente::withCount('ventas')
            ->withSum('ventas', 'total')
            ->orderByDesc('ventas_count')
            ->limit(5)
            ->get();

        $productosMasVendidos = VentaItem::select('producto_id', DB::raw('SUM(cantidad) as total_vendido'))
            ->groupBy('producto_id')
            ->orderByDesc('total_vendido')
            ->limit(5)
            ->with('producto')
            ->get();

        $ventasRecientes = Venta::with('cliente')
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render('dashboard/Index', [
            'metricas' => [
                'ventas_del_mes' => $ventasDelMes,
                'ventas_del_mes_pasado' => $ventasDelMesPasado,
                'ventas_totales' => $ventasTotales,
                'total_clientes' => $totalClientes,
                'total_productos' => $totalProductos,
                'productos_bajo_stock' => $productosBajoStock,
            ],
            'ventas_por_dia' => $ventasPorDia,
            'top_clientes' => $topClientes,
            'productos_mas_vendidos' => $productosMasVendidos,
            'ventas_recientes' => $ventasRecientes,
        ]);
    }
}