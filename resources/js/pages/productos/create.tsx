import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '', sku: '', precio: 0, stock: 0,
    });

    const breadcrumbs = [{ title: 'Backstage', href: '/dashboard' }, { title: 'Nueva Prenda', href: '#' }];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/productos');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nueva Prenda | Backstage" />
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl mb-10 border-b-8 border-black pb-4">REGISTRAR DISEÑO</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400">Diseño</label>
                            <input type="text" value={data.nombre} onChange={e => setData('nombre', e.target.value)} className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none focus:bg-yellow-400" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-stone-400">SKU</label>
                                <input type="text" value={data.sku} onChange={e => setData('sku', e.target.value)} className="w-full border-4 border-black p-4 text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-stone-400">Precio</label>
                                <input type="number" value={data.precio} onChange={e => setData('precio', Number(e.target.value))} className="w-full border-4 border-black p-4 text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400">Stock Inicial</label>
                            <input type="number" value={data.stock} onChange={e => setData('stock', Number(e.target.value))} className="w-full border-4 border-black p-4 text-4xl text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none" />
                        </div>
                        <button type="submit" disabled={processing} className="w-full bg-black text-white p-5 text-2xl hover:bg-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                            {processing ? 'CARGANDO...' : 'AÑADIR A LA GIRA'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}