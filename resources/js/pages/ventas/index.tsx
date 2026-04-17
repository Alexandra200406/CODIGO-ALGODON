import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

export default function index({ ventas = [] }: { ventas: any[] }) {
    return (
        <AppLayout breadcrumbs={[{ title: 'Backstage', href: '/dashboard' }, { title: 'Ventas', href: '#' }]}>
            <Head title="Pedidos Fans | Backstage" />
            
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-8 border-b-8 border-black pb-6">
                        <h1 className="text-7xl tracking-tighter leading-none">VENTAS</h1>
                        <Link 
                            href="/ventas/create" 
                            className="bg-black text-white px-8 py-4 flex items-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-stone-800 transition-all cursor-pointer"
                        >
                            <Plus size={24} /> NUEVA VENTA
                        </Link>
                    </div>

                    <div className="grid gap-4">
                        {ventas.map((v) => (
                            <div key={v.id} className="border-4 border-black grid grid-cols-4 items-center p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-3xl">#{v.id.toString().padStart(3, '0')}</span>
                                <span className="text-xl">{v.nombre || 'FAN'}</span>
                                <span className="text-4xl text-center font-black">${v.total}</span>
                                <div className="flex justify-end">
                                    <span className="bg-green-400 border-2 border-black px-6 py-2 text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        {v.estado}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}