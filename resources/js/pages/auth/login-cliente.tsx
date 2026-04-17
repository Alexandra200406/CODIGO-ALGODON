import { Head, useForm, Link } from '@inertiajs/react';

export default function LoginCliente() {
    const { data, setData, post, processing } = useForm({ email: '', password: '' });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Usamos post para procesar el login
        post('/cliente/login');
    };

    return (
        <div className="bg-stone-50 min-h-screen flex items-center justify-center font-black uppercase italic text-black selection:bg-black selection:text-white p-6">
            <Head title="Fan Access | Código Algodón" />
            
            {/* Contenedor Brutalista principal */}
            <div className="w-full max-w-md border-8 border-black p-10 bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                
                {/* TÍTULO CORREGIDO A NEGRO SÓLIDO (text-black) */}
                <h2 className="text-5xl text-center mb-1 text-black tracking-tighter leading-none">
                    BIENVENIDO FAN
                </h2>
                
                {/* Subtítulo centralizado y legible */}
                <p className="text-stone-500 text-center text-[10px] tracking-[0.3em] mb-10">
                    ACCESO EXCLUSIVO A LA BOUTIQUE
                </p>

                <form onSubmit={submit} className="space-y-8">
                    {/* CAMPO DE CORREO */}
                    <div>
                        {/* ETIQUETA CORREGIDA A NEGRO SÓLIDO (text-black) */}
                        <label className="block text-xs mb-3 text-black tracking-widest">
                            CORREO ELECTRÓNICO
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            className="w-full border-4 border-black p-4 text-xl outline-none focus:bg-stone-100 placeholder:text-stone-300 text-black"
                            placeholder="fan@codigoalgodon.com"
                            onChange={e => setData('email', e.target.value)} 
                            value={data.email}
                        />
                    </div>

                    {/* CAMPO DE CONTRASEÑA */}
                    <div>
                        {/* ETIQUETA CORREGIDA A NEGRO SÓLIDO (text-black) */}
                        <label className="block text-xs mb-3 text-black tracking-widest">
                            CONTRASEÑA
                        </label>
                        <input 
                            type="password" 
                            name="password"
                            className="w-full border-4 border-black p-4 text-xl outline-none focus:bg-stone-100 placeholder:text-stone-300 text-black"
                            placeholder="********"
                            onChange={e => setData('password', e.target.value)} 
                            value={data.password}
                        />
                    </div>

                    {/* BOTÓN NEGRO CON TEXTO BLANCO */}
                    <button 
                        className="w-full bg-black text-white py-6 text-2xl hover:bg-stone-900 transition-all active:translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                        disabled={processing}
                    >
                        ENTRAR A COMPRAR
                    </button>
                </form>
                
                {/* LINK VOLVER AL INICIO */}
                <Link 
                    href="/" 
                    className="block mt-10 text-center text-[10px] text-stone-600 hover:text-black hover:underline"
                >
                    ← VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
}