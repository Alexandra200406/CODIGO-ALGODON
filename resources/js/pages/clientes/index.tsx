import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, router } from '@inertiajs/react';
import { Plus, X, Sparkles, Pencil, Trash2, Camera } from 'lucide-react';

interface Look {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion?: string;
}

export default function index({ clientes }: { clientes: Look[] }) {
    const [showModal, setShowModal] = useState(false);
    const [editingLook, setEditingLook] = useState<Look | null>(null);

    const { data, setData, post, put, reset, errors } = useForm({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
    });

    const closeModal = () => {
        setShowModal(false);
        setEditingLook(null);
        reset();
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingLook) {
            put(`/clientes/${editingLook.id}`, {
                onSuccess: () => closeModal(),
            });
        } else {
            post('/clientes', {
                onSuccess: () => closeModal(),
            });
        }
    };

    const openEditModal = (look: Look) => {
        setEditingLook(look);
        setData({
            nombre: look.nombre,
            email: look.email || '',
            telefono: look.telefono || '',
            direccion: look.direccion || '',
        });
        setShowModal(true);
    };

    return (
        <AppLayout>
            <Head title="Lookbook - Código Algodón" />
            
            <div className="p-8 bg-[#FDFCFB] min-h-screen">
                <div className="flex justify-between items-center mb-12 border-b border-stone-100 pb-8">
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-stone-950 italic">
                            Lookbook <span className="text-stone-300 font-light">/ Estilos</span>
                        </h1>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mt-2 italic">Inspiración Código Algodón</p>
                    </div>
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-indigo-600 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg flex items-center gap-3"
                    >
                        <Plus size={14} /> Nuevo Concepto
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {clientes.map((look) => (
                        <div key={look.id} className="group relative border-l border-stone-100 pl-6 hover:border-indigo-500 transition-colors">
                            <div className="absolute top-0 right-0 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => openEditModal(look)} className="text-stone-400 hover:text-indigo-600"><Pencil size={14} /></button>
                                <button onClick={() => router.delete(`/clientes/${look.id}`)} className="text-stone-400 hover:text-red-600"><Trash2 size={14} /></button>
                            </div>

                            <div className="space-y-4">
                                <div className="aspect-video bg-stone-50 border border-stone-100 flex items-center justify-center">
                                    <Camera size={32} className="text-stone-200" strokeWidth={1} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">{look.email}</p>
                                    <h3 className="text-2xl font-light uppercase tracking-tighter text-stone-900">{look.nombre}</h3>
                                    <span className="inline-block text-[10px] font-bold text-stone-400 uppercase tracking-widest bg-stone-50 px-3 py-1 mt-2">
                                        {look.telefono}
                                    </span>
                                    {look.direccion && (
                                        <p className="text-xs text-stone-500 italic mt-4 leading-relaxed border-t border-stone-50 pt-4">
                                            "{look.direccion}"
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
                        <div className="bg-[#121212] border border-stone-800 w-full max-w-md p-10 shadow-2xl relative">
                            <button onClick={closeModal} className="absolute top-6 right-6 text-stone-600 hover:text-white"><X size={24} /></button>

                            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
                                <Sparkles className="text-indigo-500" size={20} />
                                {editingLook ? 'Editar Concepto' : 'Añadir al Lookbook'}
                            </h2>

                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500 mb-2 block">Nombre del Estilo</label>
                                    <input type="text" required value={data.nombre} onChange={e => setData('nombre', e.target.value)} className="w-full bg-stone-900 border border-stone-800 p-3 text-white text-sm outline-none focus:border-indigo-500" />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500 mb-2 block">Vibra (Ej. Casual)</label>
                                        <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full bg-stone-900 border border-stone-800 p-3 text-white text-sm outline-none focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500 mb-2 block">Ocasión</label>
                                        <input type="text" value={data.telefono} onChange={e => setData('telefono', e.target.value)} className="w-full bg-stone-900 border border-stone-800 p-3 text-white text-sm outline-none focus:border-indigo-500" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500 mb-2 block">Notas</label>
                                    <textarea value={data.direccion} onChange={e => setData('direccion', e.target.value)} className="w-full bg-stone-900 border border-stone-800 p-3 text-white text-sm outline-none focus:border-indigo-500 h-24 resize-none" />
                                </div>

                                <button type="submit" className="w-full bg-white text-black text-[10px] font-black uppercase py-4 hover:bg-indigo-600 hover:text-white transition-all">
                                    {editingLook ? 'Guardar Cambios' : 'Registrar Estilo'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}