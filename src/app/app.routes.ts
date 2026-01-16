import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
    {
        path: '',
        component: Counter,
    },
    {
        path: 'hero',
        component: Hero,
    },
    {
        path: 'dragonball',
        component: Dragonball,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuper,
    },
    {
        path: '**',
        redirectTo: '', // Redireccionar a la ruta raíz o a una página de inicio predeterminada, en este caso a la pagina de Counter
    }
    
];
