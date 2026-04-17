import { LayoutGrid, Shirt, Ticket, Zap, LogOut } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function AppSidebar({ auth }: { auth: any }) {
    // Evitamos errores si auth no ha cargado
    const userName = auth?.user?.name || 'Admin';

    const navItems = [
        { title: 'Backstage', href: '/dashboard', icon: LayoutGrid, desc: 'DASHBOARD' },
        { title: 'Stock Merch', href: '/productos', icon: Shirt, desc: 'INVENTARIO' },
        { title: 'Drops & Bandas', href: '/colecciones', icon: Zap, desc: 'LANZAMIENTOS' },
        { title: 'Pedidos Fans', href: '/ventas', icon: Ticket, desc: 'GESTIÓN VENTAS' },
    ];

    return (
        <aside className="w-64 bg-white border-r-4 border-black h-screen flex flex-col sticky top-0 shadow-[4px_0px_0px_0px_rgba(0,0,0,1)]">
            {/* LOGO BACKSTAGE */}
            <div className="p-6 border-b-4 border-black bg-black text-white text-center">
                <h2 className="font-black uppercase tracking-tighter leading-none text-xl italic text-white">Backstage</h2>
                <p className="text-[8px] font-bold tracking-[0.3em] opacity-60 mt-1 uppercase text-white">Código Algodón</p>
            </div>

            {/* NAVEGACIÓN ADMIN */}
            <nav className="flex-grow p-4 space-y-1">
                {navItems.map((item) => (
                    <Link 
                        key={item.title} 
                        href={item.href} 
                        className="flex items-center gap-4 p-3 border-2 border-transparent text-black hover:border-black hover:bg-stone-50 transition-all group"
                    >
                        <item.icon size={20} className="flex-shrink-0 text-black" />
                        <div>
                            <p className="font-black uppercase text-[11px] leading-none text-black">{item.title}</p>
                            <p className="text-[7px] font-bold text-stone-400 uppercase mt-1 group-hover:text-black">{item.desc}</p>
                        </div>
                    </Link>
                ))}
            </nav>

            {/* PANEL DE USUARIO ADMIN */}
            <div className="p-4 border-t-4 border-black bg-white">
                <div className="flex items-center gap-3 p-2 border-2 border-black bg-stone-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-[10px] italic uppercase">
                        {userName.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-grow overflow-hidden text-black">
                        <p className="font-black text-[10px] uppercase truncate text-black">{userName}</p>
                        <p className="text-[8px] font-bold text-stone-500 uppercase tracking-tighter">Admin Principal</p>
                    </div>
                </div>
                
                <Link 
                    href="/logout" 
                    method="post" 
                    as="button" 
                    className="w-full mt-4 flex items-center justify-center gap-2 text-[9px] font-black uppercase text-red-600 hover:text-white hover:bg-red-600 p-2 border-2 border-red-600 transition-all"
                >
                    <LogOut size={12} /> Salir
                </Link>
            </div>
        </aside>
    );
}