import { Routes } from '@angular/router';
import * as PG from './Pages/index'

export const routes: Routes = [
    { path: '', component: PG.Inicio},
    { path: 'inicio', component: PG.Inicio},
    { path: 'mundo', component: PG.Mundo},
    { path: 'historias', component: PG.Historias},
    { path: 'aventuras', component: PG.Aventuras},
    { path: 'juega', component: PG.Juega},
    { path: 'admin', component: PG.Admin},
];