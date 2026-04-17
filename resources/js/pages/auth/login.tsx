import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Loader2, Lock, Mail } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Cambiado de route('login') a '/login' para evitar errores
        post('/login');
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-6">
            <Head title="Acceso Staff | Código Algodón" />

            <div className="w-full max-w-md">
                {/* LOGO */}
                <div className="text-center mb-10">
                    <div className="inline-flex w-12 h-12 bg-black rounded-full items-center justify-center mb-4 shadow-xl">
                        <span className="text-white font-black italic text-xl">C</span>
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter italic text-stone-900">
                        Código Algodón
                    </h1>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mt-2">
                        Acceso Exclusivo Staff
                    </p>
                </div>

                <div className="bg-white border border-stone-100 p-10 shadow-sm">
                    <form onSubmit={submit} className="space-y-6">
                        {/* EMAIL */}
                        <div>
                            <label className="text-[9px] font-black uppercase tracking-widest text-stone-500 mb-2 block">
                                Correo Electrónico
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-stone-300" size={16} />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full bg-stone-50 border border-stone-100 p-3 pl-10 text-sm outline-none focus:border-indigo-500 transition-all text-stone-800"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                            </div>
                            {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold uppercase">{errors.email}</p>}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-[9px] font-black uppercase tracking-widest text-stone-500 mb-2 block">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-stone-300" size={16} />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-full bg-stone-50 border border-stone-100 p-3 pl-10 text-sm outline-none focus:border-indigo-500 transition-all text-stone-800"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-[10px] text-red-500 mt-1 font-bold uppercase">{errors.password}</p>}
                        </div>

                        {/* BOTÓN ENTRAR */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-black text-white text-[11px] font-black uppercase py-4 tracking-[0.2em] hover:bg-indigo-600 transition-all flex items-center justify-center gap-2"
                        >
                            {processing ? (
                                <Loader2 className="animate-spin" size={16} />
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <Link 
                        href="/" 
                        className="text-[9px] font-bold text-stone-400 uppercase tracking-widest hover:text-black transition-colors"
                    >
                        ← Volver a la Boutique
                    </Link>
                </div>
            </div>
        </div>
    );
}