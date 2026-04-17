import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ShoppingCart, ArrowLeft, Ticket } from 'lucide-react';

interface Producto {
    id: number;
    sku: string;
    nombre: string;
    precio: number;
    stock: number;
}

interface Props {
    productos: Producto[];
}

export default function Catalogo({ productos }: Props) {
    // Mapeo de imágenes para que coincidan con los modelos que definimos
    // Si el nombre del producto contiene la palabra, le asigna la imagen de banda
    const getImagen = (nombre: string) => {
        const n = nombre.toUpperCase();
        if (n.includes('NIRVANA')) return 'https://images.unsplash.com/photo-1578912853046-01d7e30f015a?q=80&w=500&auto=format&fit=crop';
        if (n.includes('PINK')) return 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=500&auto=format&fit=crop';
        if (n.includes('METALLICA')) return 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=500&auto=format&fit=crop';
        if (n.includes('AC/DC')) return 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&auto=format&fit=crop';
        return 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop'; // Default
    };

    return (
        <div className="bg-white min-h-screen font-black uppercase italic text-black">
            <Head title="CATÁLOGO | CÓDIGO ALGODÓN" />
            
            {/* BARRA DE NAVEGACIÓN SUPERIOR */}
            <nav className="p-6 border-b-2 border-black flex justify-between items-center bg-white sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 hover:line-through">
                    <ArrowLeft size={18} /> VOLVER
                </Link>
                <span className="text-xl tracking-tighter italic">CÓDIGO ALGODÓN / SHOP</span>
                <div className="flex items-center gap-4">
                    <ShoppingCart size={20} />
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto p-10">
                {/* TÍTULO DE SECCIÓN */}
                <div className="mb-12 border-l-8 border-black pl-6">
                    <h1 className="text-7xl tracking-tighter italic leading-none">CATÁLOGO<br/>DISPONIBLE</h1>
                    <p className="text-stone-400 not-italic font-medium text-sm tracking-widest mt-2">© 2026 OFFICIAL MERCHANDISE</p>
                </div>

                {/* GRILLA DE PRODUCTOS (SÓLO LECTURA) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <div key={producto.id} className="group border-2 border-black p-4 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <div className="aspect-[3/4] overflow-hidden border-2 border-black mb-6">
                                    <img 
                                        src={getImagen(producto.nombre)} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                        alt={producto.nombre}
                                    />
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-xl italic mb-1">{producto.nombre}</h2>
                                    <span className="text-[10px] text-stone-400 not-italic tracking-widest">SKU: {producto.sku}</span>
                                </div>
                                <p className="text-3xl mb-6 tracking-tighter">${producto.precio}</p>
                                
                                {/* ÚNICO BOTÓN: COMPRAR */}
                                <button className="w-full bg-black text-white py-4 flex items-center justify-center gap-2 hover:invert transition-all font-black text-sm italic uppercase">
                                    <Ticket size={18} /> AGREGAR AL PEDIDO
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 py-20 text-center border-2 border-dashed border-stone-200">
                            <p className="text-stone-300 italic">No hay productos en inventario actualmente.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* DECORACIÓN FOOTER */}
            <footer className="p-10 text-center border-t border-stone-100 mt-20">
                <p className="opacity-20 text-[10px] tracking-[1em]">BACK TO BASICS / PREMIUM QUALITY</p>
            </footer>
        </div>
    );
}