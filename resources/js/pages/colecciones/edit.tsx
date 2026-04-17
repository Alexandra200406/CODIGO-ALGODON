import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ coleccion }: { coleccion: any }) {
    const { data, setData, put, processing, errors } = useForm({
        nombre: coleccion.nombre,
        descripcion: coleccion.descripcion || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/colecciones/${coleccion.nombre}`);
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Drops', href: '/colecciones' }, { title: 'Editar', href: '#' }]}>
            <Head title="Editar Drop | Backstage" />
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl mb-10 border-b-8 border-black pb-4 leading-none tracking-tighter">
                        EDITAR DROP
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400 font-bold">Nombre del Drop</label>
                            <input 
                                type="text" 
                                value={data.nombre} 
                                onChange={e => setData('nombre', e.target.value)} 
                                className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none focus:bg-yellow-400" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400 font-bold">Descripción</label>
                            <textarea 
                                value={data.descripcion} 
                                onChange={e => setData('descripcion', e.target.value)} 
                                className="w-full border-4 border-black p-4 text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none min-h-[150px] resize-none"
                            />
                        </div>
                        <button type="submit" disabled={processing} className="w-full bg-black text-white p-5 text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                            {processing ? 'GUARDANDO...' : 'ACTUALIZAR DROP'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}