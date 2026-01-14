import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';

export const routes: Routes = [
    {
        path: 'counter',
        component: Counter,
    },
    {
        path: 'hero',
        component: Hero,
    },
];
