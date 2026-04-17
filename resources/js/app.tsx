import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `${title} - Código Algodón`,
    resolve: (name) => {
        // Buscamos específicamente en la carpeta 'pages' y archivo 'welcome' en minúsculas
        return resolvePageComponent(`./pages/${name.toLowerCase()}.tsx`, import.meta.glob('./pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});