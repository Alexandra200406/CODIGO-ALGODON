import { Head, Link } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';

export default function Welcome() {
    // Restaurando tus imágenes originales (Sudaderas/Tees neutras de Unsplash)
    const prendas = [
        { id: 1, sku: 'CA-001', url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop' },
        { id: 2, sku: 'CA-002', url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop' },
        { id: 3, sku: 'CA-003', url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop' },
        { id: 4, sku: 'CA-004', url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop' },
    ];

    return (
        <div className="bg-white min-h-screen font-black uppercase italic text-black selection:bg-black selection:text-white pb-10">
            <Head title="CÓDIGO ALGODÓN | INICIO" />
            
            {/* ACCESO STAFF */}
            <div className="absolute top-6 right-6 z-50">
                <Link 
                    href="/login" 
                    className="flex items-center gap-2 border-2 border-black px-4 py-2 text-[10px] hover:bg-black hover:text-white transition-all bg-white"
                >
                    <ShieldCheck size={14} /> STAFF ACCESS
                </Link>
            </div>

            {/* HEADER GIGANTE (AJUSTADO EL PT-20 A PT-10) */}
            <header className="flex flex-col items-center pt-10 mb-8 text-center">
                <div className="relative inline-block">
                    <h1 className="text-[12rem] tracking-tighter leading-[0.8] select-none">
                        CÓDIGO<br/>ALGODÓN
                    </h1>
                    <div className="absolute -bottom-2 right-0 bg-black text-white px-3 py-1 text-lg">
                        EST. 2026
                    </div>
                </div>
            </header>

            {/* SECCIÓN DE PRENDAS (TUS IMÁGENES ORIGINALES) */}
            <section className="max-w-[1200px] mx-auto px-6 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {prendas.map((p) => (
                        <div key={p.id} className="group relative">
                            {/* Card Brutalista */}
                            <div className="aspect-[3/4] overflow-hidden border-2 border-black relative bg-[#f5f5f5] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <img 
                                    src={p.url} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    alt="Prenda"
                                />
                                {/* SKU overlay */}
                                <div className="absolute bottom-2 left-2 text-[8px] bg-white px-1 border border-black italic font-black">
                                    SKU: {p.sku}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FRASE DE CIERRE (ESPACIO AJUSTADO) */}
            <div className="flex flex-col items-center text-center px-6">
                <p className="text-black tracking-[0.5em] text-xl max-w-4xl border-y-2 border-black py-4 w-full">
                    ESENCIA TEXTIL / CALIDAD PREMIUM / BACK TO BASICS
                </p>
            </div>

            {/* DECORACIÓN FOOTER (SIN MT-40) */}
            <footer className="mt-16 w-full px-10 flex justify-between items-end border-t border-stone-100 pt-8 pb-10">
                <div className="text-[10px] leading-tight text-stone-400 font-bold tracking-widest uppercase">
                    AUTHOR: ALEXANDRA SOSA<br/>
                    INFRASTRUCTURE & TECH / 2026
                </div>
                <div className="text-[8rem] leading-[0.5] opacity-5 select-none pointer-events-none font-black tracking-tighter">
                    ALGODÓN®
                </div>
            </footer>
        </div>
    );
}