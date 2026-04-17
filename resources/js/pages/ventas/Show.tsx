import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface VentaItem {
    id: number;
    producto_id: number;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
    producto: {
        id: number;
        nombre: string;
    };
}

interface Venta {
    id: number;
    cliente_id: number | null;
    user_id: number;
    subtotal: number;
    impuesto: number;
    total: number;
    estado: string;
    metodo_pago: string;
    notas: string | null;
    created_at: string;
    cliente: {
        id: number;
        nombre: string;
        email: string;
        telefono: string | null;
    } | null;
    user: {
        id: number;
        name: string;
    };
    items: VentaItem[];
}

interface Props {
    venta: Venta;
}

export default function VentasShow({ venta }: Props) {
    const formatCurrency = (value: number) =>
        new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        }).format(value);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Ventas', href: '/ventas' },
        { title: `Venta #${venta.id}`, href: `/ventas/${venta.id}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Venta #${venta.id}`} />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Venta #{venta.id}</h1>
                    <Link href="/ventas">
                        <Button variant="outline">Volver a Ventas</Button>
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border bg-card p-6">
                        <h2 className="mb-4 text-lg font-semibold">
                            Información General
                        </h2>
                        <dl className="space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">
                                    Fecha:
                                </dt>
                                <dd>
                                    {new Date(venta.created_at).toLocaleString(
                                        'es-MX',
                                    )}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">
                                    Usuario:
                                </dt>
                                <dd>{venta.user?.name}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">
                                    Método de Pago:
                                </dt>
                                <dd className="capitalize">
                                    {venta.metodo_pago}
                                </dd>
                            </div>
                            {venta.notas && (
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Notas:
                                    </dt>
                                    <dd>{venta.notas}</dd>
                                </div>
                            )}
                        </dl>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <h2 className="mb-4 text-lg font-semibold">Cliente</h2>
                        {venta.cliente ? (
                            <dl className="space-y-2">
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Nombre:
                                    </dt>
                                    <dd>{venta.cliente.nombre}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Email:
                                    </dt>
                                    <dd>{venta.cliente.email}</dd>
                                </div>
                                {venta.cliente.telefono && (
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">
                                            Teléfono:
                                        </dt>
                                        <dd>{venta.cliente.telefono}</dd>
                                    </div>
                                )}
                            </dl>
                        ) : (
                            <p className="text-muted-foreground">
                                Venta general sin cliente
                            </p>
                        )}
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6">
                    <h2 className="mb-4 text-lg font-semibold">Productos</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Producto</TableHead>
                                <TableHead className="text-right">
                                    Precio Unitario
                                </TableHead>
                                <TableHead className="text-right">
                                    Cantidad
                                </TableHead>
                                <TableHead className="text-right">
                                    Subtotal
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {venta.items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.producto?.nombre}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(item.precio_unitario)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {item.cantidad}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(item.subtotal)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-end">
                            <div className="w-64 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal:</span>
                                    <span>
                                        {formatCurrency(venta.subtotal)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Impuesto:</span>
                                    <span>
                                        {formatCurrency(venta.impuesto)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total:</span>
                                    <span>{formatCurrency(venta.total)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
