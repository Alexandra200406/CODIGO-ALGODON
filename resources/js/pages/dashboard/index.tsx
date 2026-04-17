import AppLayout from '@/layouts/app-layout'; // Mantenemos el import seguro
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    // Breadcrumbs básicos
    const breadcrumbs = [
        { title: 'Backstage', href: '/dashboard' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Backstage | Código Algodón" />

            {/* CONTENEDOR PRINCIPAL CON FONDO BLANCO FORZADO */}
            <div className="flex h-full w-full flex-col gap-6 p-8 bg-white min-h-screen text-black">
                
                {/* TÍTULO BACKSTAGE (GIGANTE Y NEGRO) */}
                <div className="mb-10 p-4 border-l-8 border-black">
                    <h1 className="text-[140px] font-black uppercase italic leading-none tracking-tighter text-black">
                        BACKSTAGE
                    </h1>
                    <div className="bg-black text-white inline-block px-4 py-1 font-bold text-xl uppercase tracking-widest italic mt-2">
                        STATUS DE LA TIENDA: EN VIVO
                    </div>
                </div>

                {/* TARJETAS DE ESTADÍSTICAS (FONDO BLANCO, LETRAS NEGRAS) */}
                <div className="grid auto-rows-min gap-6 md:grid-cols-4">
                    {/* Tarjeta 1 - Ventas */}
                    <div className="border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] bg-white">
                        <p className="font-bold uppercase text-sm text-stone-500 tracking-wider">Ventas del mes</p>
                        <p className="text-6xl font-black italic text-black mt-2">$12,450</p>
                    </div>
                    {/* Tarjeta 2 - Stock Total */}
                    <div className="border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] bg-white">
                        <p className="font-bold uppercase text-sm text-stone-500 tracking-wider">Stock Total</p>
                        <p className="text-6xl font-black italic text-black mt-2">156 <span className="text-2xl text-stone-400">PZS</span></p>
                    </div>
                    {/* Tarjeta 3 - Pedidos Activos */}
                    <div className="border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] bg-white">
                        <p className="font-bold uppercase text-sm text-stone-500 tracking-wider">Pedidos Activos</p>
                        <p className="text-6xl font-black italic text-black mt-2">08</p>
                    </div>
                    {/* Tarjeta 4 - Low Stock (Mantenemos amarillo para alerta) */}
                    <div className="border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.4)] bg-yellow-400">
                        <p className="font-bold uppercase text-sm text-black tracking-wider">Prendas Low Stock</p>
                        <p className="text-6xl font-black italic text-black mt-2">03</p>
                    </div>
                </div>

                {/* CONTENEDOR INFERIOR (ESTILO BLANCO Y NEGRO) */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {/* Top Sellers (Texto negro sobre fondo blanco) */}
                    <div className="border-[6px] border-black h-[350px] shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] bg-white p-8">
                        <h2 className="font-black italic text-3xl uppercase border-b-8 border-black mb-6 pb-2 text-black">Top Sellers (Hits)</h2>
                        <div className="space-y-4 text-stone-700 font-bold uppercase italic text-lg">
                            <p>Cargando lista de ventas...</p>
                            {/* Marcadores de posición */}
                            <p className="text-sm opacity-50">1. Nirvana / In Utero - 42 vendidas</p>
                            <p className="text-sm opacity-50">2. Metallica / Master - 38 vendidas</p>
                        </div>
                    </div>
                    {/* Logística (Texto blanco sobre fondo negro) */}
                    <div className="border-[6px] border-black h-[350px] shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] bg-black p-8">
                        <h2 className="font-black italic text-3xl uppercase border-b-8 border-white mb-6 pb-2 text-white">Logística de Gira</h2>
                        <p className="text-stone-300 font-bold uppercase italic text-lg mt-4">No hay envíos pendientes.</p>
                        <p className="text-xs text-stone-500 font-black uppercase mt-2">Gira por México 2024</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}