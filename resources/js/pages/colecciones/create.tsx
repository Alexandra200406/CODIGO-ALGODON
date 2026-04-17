import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        descripcion: '',
    });

    const breadcrumbs = [
        { title: 'Backstage', href: '/dashboard' },
        { title: 'Drops', href: '/colecciones' },
        { title: 'Nuevo Drop', href: '#' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/colecciones');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Nuevo Drop | Backstage" />
            <div className="p-8 bg-white min-h-screen text-black font-black uppercase italic">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl mb-10 border-b-8 border-black pb-4 leading-none tracking-tighter">
                        NUEVO LANZAMIENTO
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400 font-bold">Nombre del Drop / Banda</label>
                            <input 
                                type="text" 
                                value={data.nombre} 
                                onChange={e => setData('nombre', e.target.value)} 
                                className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none focus:bg-yellow-400" 
                                required
                            />
                            {errors.nombre && <span className="text-red-600 text-xs lowercase italic font-bold">{errors.nombre}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-stone-400 font-bold">Descripción / Detalles</label>
                            <textarea 
                                value={data.descripcion} 
                                onChange={e => setData('descripcion', e.target.value)} 
                                className="w-full border-4 border-black p-4 text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none min-h-[150px] resize-none font-bold"
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={processing} 
                            className="w-full bg-black text-white p-5 text-2xl hover:bg-stone-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] transition-all font-black uppercase italic"
                        >
                            {processing ? 'PUBLICANDO...' : 'LANZAR DROP'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}