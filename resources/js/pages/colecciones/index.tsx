import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Zap } from 'lucide-react';

interface Coleccion {
    id: number;
    nombre: string;
    descripcion: string;
}

export default function index({ colecciones = [] }: { colecciones: Coleccion[] }) {
    
    const breadcrumbs = [
        { title: 'Backstage', href: '/dashboard' },
        { title: 'Drops & Bandas', href: '#' },
    ];

    const handleEliminar = (id: number, nombre: string) => {
        if (confirm(`¿ELIMINAR EL DROP "${nombre.toUpperCase()}"?`)) {
            router.delete(`/colecciones/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Drops & Bandas | Backstage" />
            
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="flex justify-between items-end mb-8 border-b-4 border-black pb-4">
                        <div>
                            <h1 className="text-5xl tracking-tighter leading-none">DROPS & BANDAS</h1>
                        </div>
                        
                        <Link 
                            href="/colecciones/create" 
                            className="bg-black text-white px-6 py-3 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-stone-800 transition-all"
                        >
                            <Plus size={20} /> NUEVO DROP
                        </Link>
                    </div>

                    {colecciones.length === 0 ? (
                        <div className="bg-yellow-400 border-4 border-black p-20 text-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                            <Zap size={80} className="mx-auto mb-4" />
                            <h2 className="text-4xl">SIN LANZAMIENTOS</h2>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {colecciones.map((c) => (
                                <div key={c.id} className="border-4 border-black p-6 flex justify-between items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white relative overflow-hidden">
                                    <div className="z-10">
                                        <h3 className="text-4xl tracking-tighter">{c.nombre}</h3>
                                        <p className="text-stone-500 text-sm normal-case font-bold italic">{c.descripcion}</p>
                                    </div>
                                    
                                    <div className="flex gap-4 z-10">
                                        {/* ESTE LINK ES EL QUE CORRIGE EL ERROR DE BORRADO AL EDITAR */}
                                        <Link 
                                            href={`/colecciones/${c.id}/edit`} 
                                            className="border-2 border-black px-6 py-2 text-xs bg-white hover:bg-black hover:text-white transition-all font-black"
                                        >
                                            EDITAR
                                        </Link>
                                        
                                        <button 
                                            onClick={() => handleEliminar(c.id, c.nombre)}
                                            className="border-2 border-red-600 text-red-600 px-6 py-2 text-xs hover:bg-red-600 hover:text-white transition-all font-black"
                                        >
                                            BORRAR
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}