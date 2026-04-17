import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

interface Producto {
    id: number;
    nombre: string;
    sku: string;
    precio: number;
    stock: number;
}

export default function Edit({ producto }: { producto: Producto }) {
    
    // Configuramos el formulario con los datos que llegan de Laravel
    const { data, setData, put, processing, errors } = useForm({
        nombre: producto.nombre || '',
        sku: producto.sku || '',
        precio: producto.precio || 0,
        stock: producto.stock || 0,
    });

    const breadcrumbs = [
        { title: 'Backstage', href: '/dashboard' },
        { title: 'Stock Merch', href: '/productos' },
        { title: 'Editar Prenda', href: '#' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Enviamos la petición PUT al controlador
        put(`/productos/${producto.sku}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar | Backstage" />
            
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-8xl tracking-tighter mb-10 border-b-8 border-black pb-4 leading-none">
                        Editar Diseño
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* NOMBRE */}
                        <div className="flex flex-col gap-2">
                            <label className="text-2xl text-stone-400">Nombre de la Prenda</label>
                            <input 
                                type="text"
                                value={data.nombre}
                                onChange={e => setData('nombre', e.target.value)}
                                className="w-full border-4 border-black p-6 text-6xl font-black uppercase italic shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] focus:bg-yellow-400 outline-none transition-all"
                            />
                            {errors.nombre && <span className="text-red-600 lowercase italic">{errors.nombre}</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            {/* SKU */}
                            <div className="flex flex-col gap-2">
                                <label className="text-2xl text-stone-400">SKU</label>
                                <input 
                                    type="text"
                                    value={data.sku}
                                    onChange={e => setData('sku', e.target.value)}
                                    className="w-full border-4 border-black p-6 text-4xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] outline-none"
                                />
                            </div>
                            {/* PRECIO */}
                            <div className="flex flex-col gap-2">
                                <label className="text-2xl text-stone-400">Precio ($)</label>
                                <input 
                                    type="number"
                                    value={data.precio}
                                    onChange={e => setData('precio', Number(e.target.value))}
                                    className="w-full border-4 border-black p-6 text-4xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] outline-none"
                                />
                            </div>
                        </div>

                        {/* STOCK GIGANTE */}
                        <div className="flex flex-col gap-2">
                            <label className="text-2xl text-stone-400">Stock en Almacén</label>
                            <input 
                                type="number"
                                value={data.stock}
                                onChange={e => setData('stock', Number(e.target.value))}
                                className="w-full border-4 border-black p-8 text-9xl text-center shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] outline-none focus:bg-stone-50"
                            />
                        </div>

                        {/* BOTÓN GUARDAR */}
                        <button 
                            type="submit"
                            disabled={processing}
                            className="w-full bg-black text-white p-8 text-5xl font-black hover:bg-stone-800 transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)]"
                        >
                            {processing ? 'GUARDANDO...' : 'ACTUALIZAR DATOS'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}