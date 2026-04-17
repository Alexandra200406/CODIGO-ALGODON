import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Plus } from 'lucide-react';

interface Producto {
    id: number;
    nombre: string;
    sku: string;
    precio: number;
    stock: number;
}

export default function index({ productos = [] }: { productos: Producto[] }) {
    
    const breadcrumbs = [
        { title: 'Backstage', href: '/dashboard' },
        { title: 'Stock Merch', href: '/productos' },
    ];

    const handleEliminar = (id: number, nombre: string) => {
        if (confirm(`¿ELIMINAR "${nombre.toUpperCase()}"?`)) {
            router.delete(`/productos/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Stock Merch | Backstage" />
            
            <div className="p-8 bg-white min-h-screen text-black">
                <div className="max-w-7xl mx-auto">
                    
                    {/* ENCABEZADO - TAMAÑO AJUSTADO */}
                    <div className="flex justify-between items-end mb-8 border-b-4 border-black pb-4">
                        <div>
                            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
                                STOCK MERCH
                            </h1>
                            <p className="text-stone-400 font-bold uppercase tracking-widest mt-1 text-[10px]">
                                CONTROL DE ALMACÉN / CÓDIGO ALGODÓN
                            </p>
                        </div>
                        
                        <Link 
                            href="/productos/create" 
                            className="bg-black text-white px-5 py-2 font-black uppercase italic text-sm flex items-center gap-2 hover:bg-stone-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                        >
                            <Plus size={18} strokeWidth={3} /> NUEVA PRENDA
                        </Link>
                    </div>

                    {/* TABLA - TAMAÑOS REDUCIDOS PARA MEJOR LECTURA */}
                    <div className="border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                        <table className="w-full text-left font-black uppercase italic">
                            <thead className="bg-black text-white text-[10px] tracking-[0.2em]">
                                <tr>
                                    <th className="p-4 border-r border-stone-800 w-32">SKU</th>
                                    <th className="p-4 border-r border-stone-800">DISEÑO</th>
                                    <th className="p-4 border-r border-stone-800 text-center w-40">PRECIO</th>
                                    <th className="p-4 border-r border-stone-800 text-center w-32">STOCK</th>
                                    <th className="p-4 text-center w-40">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black text-black">
                                {productos.map((p) => (
                                    <tr key={p.id} className="hover:bg-stone-50 transition-colors">
                                        <td className="p-4 border-r-2 border-black text-sm text-stone-400">
                                            {p.sku || '---'}
                                        </td>
                                        <td className="p-4 border-r-2 border-black">
                                            <span className="text-2xl font-black block leading-none tracking-tight">
                                                {p.nombre}
                                            </span>
                                        </td>
                                        <td className="p-4 border-r-2 border-black text-2xl font-black text-center">
                                            ${p.precio}
                                        </td>
                                        <td className={`p-4 border-r-2 border-black text-center ${p.stock < 5 ? 'bg-red-50' : ''}`}>
                                            <span className={`text-3xl font-black leading-none ${p.stock < 5 ? 'text-red-600' : ''}`}>
                                                {p.stock}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col gap-2">
                                                <Link 
                                                    href={`/productos/${p.id}/edit`} 
                                                    className="w-full py-1.5 border-2 border-black text-center font-black uppercase italic text-[10px] hover:bg-black hover:text-white transition-all"
                                                >
                                                    EDITAR
                                                </Link>
                                                <button 
                                                    onClick={() => handleEliminar(p.id, p.nombre)}
                                                    className="w-full py-1.5 border-2 border-red-600 text-red-600 text-center font-black uppercase italic text-[10px] hover:bg-red-600 hover:text-white transition-all"
                                                >
                                                    BORRAR
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}