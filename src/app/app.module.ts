// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Importa el componente header
import { CardsComponent } from './cards/cards.component'; // Importa el componente cards
import { FooterComponent } from './footer/footer.component'; // Importa el componente footer
import { SearcherComponent } from './searcher/searcher.component';
import { ModalComponent } from './modal/modal.component';
import { ApiJuegosComponent } from './api-juegos/api-juegos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'pagina/1', pathMatch: 'full' }, // Redirige a la página 1 por defecto
  { path: 'pagina/:page', component: ApiJuegosComponent } // Ruta para páginas específicas
  // Otras rutas si es necesario
];


@NgModule({
  declarations: [
    AppComponent,
    ApiJuegosComponent, // Declara el componente api-juegos
    HeaderComponent, // Declara el componente header
    SearcherComponent, // Declara el componente barra-busqueda
    CardsComponent, // Declara el componente cards
    FooterComponent, // Declara el componente footer
    ModalComponent,
    MenuComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }

