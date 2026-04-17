import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Ticket, Search, Filter } from 'lucide-react';

export default function VentasIndex() {
    // Datos de ejemplo para que veas cómo luce la tabla llena
    const ventas = [
        { id: '001', cliente: 'Alex Smith', total: '1,250', fecha: '06 MAR', estado: 'PAGADO' },
        { id: '002', cliente: 'Maria Rock', total: '890', fecha: '05 MAR', estado: 'ENVIADO' },
    ];

    return (
        <AppLayout>
            <Head title="Pedidos Fans | Backstage" />
            
            <div className="min-h-screen bg-white text-black p-8">
                {/* CABECERA DE ALTO IMPACTO */}
                <div className="flex justify-between items-end mb-12 border-b-8 border-black pb-8">
                    <div>
                        <h1 className="text-8xl font-black uppercase italic tracking-tighter leading-none">Ventas</h1>
                        <p className="text-xs font-black uppercase tracking-[0.4em] mt-4 text-stone-500 italic">Gestión de Pedidos & Fans</p>
                    </div>
                    
                    <Link 
                        href="/ventas/create" 
                        className="bg-black text-white px-8 py-4 font-black uppercase text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center gap-3 border-2 border-black"
                    >
                        <Plus size={20} strokeWidth={4} /> Nueva Venta
                    </Link>
                </div>

                {/* BARRA DE FILTROS RÁPIDOS */}
                <div className="flex gap-4 mb-8">
                    <div className="flex-1 border-4 border-black p-3 flex items-center gap-3 bg-stone-50">
                        <Search size={20} />
                        <input type="text" placeholder="BUSCAR PEDIDO O FAN..." className="bg-transparent border-none outline-none font-black uppercase text-xs w-full" />
                    </div>
                    <button className="border-4 border-black px-6 py-2 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                        <Filter size={18} /> Filtrar
                    </button>
                </div>

                {/* TABLA BRUTALISTA */}
                <div className="border-8 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black text-white text-[10px] font-black uppercase tracking-widest">
                                <th className="p-5 border-r border-stone-800">ID</th>
                                <th className="p-5 border-r border-stone-800">Fan / Cliente</th>
                                <th className="p-5 border-r border-stone-800 text-center">Fecha</th>
                                <th className="p-5 border-r border-stone-800 text-right">Total</th>
                                <th className="p-5 text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-8 divide-black">
                            {ventas.length > 0 ? (
                                ventas.map((venta) => (
                                    <tr key={venta.id} className="hover:bg-stone-50 transition-colors">
                                        <td className="p-5 font-black italic border-r-4 border-black">#{venta.id}</td>
                                        <td className="p-5 font-black uppercase text-sm border-r-4 border-black">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-[10px]">FS</div>
                                                {venta.cliente}
                                            </div>
                                        </td>
                                        <td className="p-5 text-center font-bold border-r-4 border-black">{venta.fecha}</td>
                                        <td className="p-5 text-right font-black text-xl border-r-4 border-black">${venta.total}</td>
                                        <td className="p-5 text-center">
                                            <span className="bg-green-400 border-2 border-black px-3 py-1 text-[10px] font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                                {venta.estado}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-20 text-center">
                                        <Ticket size={48} className="mx-auto mb-4 opacity-20" />
                                        <p className="font-black uppercase italic text-stone-300">No hay ventas registradas todavía.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* RESUMEN INFERIOR */}
                <div className="mt-12 flex gap-8">
                    <div className="border-4 border-black p-6 bg-black text-white flex-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Ventas del Mes</p>
                        <p className="text-4xl font-black italic">$12,450</p>
                    </div>
                    <div className="border-4 border-black p-6 bg-white flex-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Tickets Activos</p>
                        <p className="text-4xl font-black italic">08</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}