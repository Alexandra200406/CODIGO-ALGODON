import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ clientes = [], productos = [] }: any) {
    const { data, setData, post, processing, errors } = useForm({
        cliente_id: 1,
        nombre: '',
        metodo_pago: 'Efectivo',
        impuesto: 0,
        notas: '',
        total: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validamos que el total no sea 0 antes de enviar
        if(data.total <= 0) {
            alert("EL TOTAL DEBE SER MAYOR A 0");
            return;
        }
        post('/ventas');
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Ventas', href: '/ventas' }, { title: 'Nueva', href: '#' }]}>
            <Head title="Nueva Venta | Backstage" />
            <div className="p-8 bg-stone-900 min-h-screen text-white font-black uppercase italic">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl mb-10 border-b-4 border-white pb-4">NUEVA VENTA</h1>
                    
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
                        <div className="space-y-6 bg-stone-800 p-6 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                            <h2 className="text-2xl border-b border-stone-600 pb-2">DATOS DE LA VENTA</h2>
                            
                            <div>
    <label className="text-xs text-stone-400">CLIENTE / FAN</label>
    <input 
        type="text"
        className="w-full bg-transparent border-2 border-white p-3 mt-1 outline-none focus:bg-white focus:text-black"
        placeholder="Escribe el nombre del cliente..."
        value={data.nombre}
        onChange={e => setData('nombre', e.target.value)}
        required
    />
</div>

                            <div>
                                <label className="text-xs text-stone-400">MÉTODO DE PAGO</label>
                                <select 
                                    className="w-full bg-transparent border-2 border-white p-3 mt-1 outline-none focus:bg-white focus:text-black"
                                    value={data.metodo_pago}
                                    onChange={e => setData('metodo_pago', e.target.value)}
                                >
                                    <option value="Efectivo" className="text-black">EFECTIVO</option>
                                    <option value="Tarjeta" className="text-black">TARJETA</option>
                                    <option value="Transferencia" className="text-black">TRANSFERENCIA</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-stone-400">TOTAL A COBRAR</label>
                                <input 
                                    type="number" 
                                    value={data.total}
                                    onChange={e => setData('total', Number(e.target.value))}
                                    className="w-full bg-transparent border-2 border-white p-3 mt-1 text-3xl outline-none focus:bg-yellow-400 focus:text-black"
                                    placeholder="0.00"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="bg-stone-800 p-6 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mb-6">
                                <label className="text-xs text-stone-400">NOTAS DEL PEDIDO</label>
                                <textarea 
                                    className="w-full bg-transparent border-2 border-white p-3 mt-1 min-h-[150px] outline-none"
                                    value={data.notas}
                                    onChange={e => setData('notas', e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="bg-white text-black p-6 text-3xl hover:bg-yellow-400 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]"
                            >
                                {processing ? 'PROCESANDO...' : 'REGISTRAR VENTA'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}