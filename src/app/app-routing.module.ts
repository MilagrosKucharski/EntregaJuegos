import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiJuegosComponent } from './api-juegos/api-juegos.component';

const routes: Routes = [
  { path: 'api-juegos', component: ApiJuegosComponent }, // Ruta principal
  { path: '/pagina/:pageNumber', component: ApiJuegosComponent }, // Rutas de paginación
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
