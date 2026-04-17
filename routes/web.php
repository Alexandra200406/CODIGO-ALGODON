<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\VentaController;
use App\Http\Controllers\ColeccionController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| RUTAS PÚBLICAS
|--------------------------------------------------------------------------
*/

// PORTADA PRINCIPAL (LANDING PAGE)
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// CATÁLOGO DE PRODUCTOS (SOLO LECTURA PARA CLIENTES)
// Esta es la ruta que se activa al dar click en "INGRESAR AL CATÁLOGO"
Route::get('/catalogo', [ProductoController::class, 'catalogo'])->name('catalogo');


/*
|--------------------------------------------------------------------------
| RUTAS PROTEGIDAS (DASHBOARD / ADMIN)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {

    // 🟢 DASHBOARD PRINCIPAL
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // 🟢 GESTIÓN DE PRODUCTOS (CRUD COMPLETO)
    Route::resource('productos', ProductoController::class);

    // 🟢 GESTIÓN DE VENTAS
    Route::resource('ventas', VentaController::class);

    // 🟢 GESTIÓN DE COLECCIONES (DROPS & BANDAS)
    Route::resource('colecciones', ColeccionController::class);
});


/*
|--------------------------------------------------------------------------
| SISTEMA DE AUTENTICACIÓN
|--------------------------------------------------------------------------
*/

if (file_exists(__DIR__.'/auth.php')) {
    require __DIR__.'/auth.php';
} else {
    require __DIR__.'/settings.php';
}