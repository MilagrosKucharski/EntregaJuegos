import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service'; // Ajusta la importación
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-api-juegos',
  templateUrl: './api-juegos.component.html',
  styleUrls: ['./api-juegos.component.css']
})
export class ApiJuegosComponent implements OnInit {
  juegos: Juego[] = [];
  selectedJuego: Juego | null = null;
  searchTerm: string = ''; // Agrega la propiedad searchTerm
  currentPage: number = 1; // Declaración e inicialización de currentPage
  itemsPerPage: number = 20;
  displayedJuegos: Juego[] = [];
  appName = 'Mi Aplicación de Juegos';

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute // Importa ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const page = +params['page'] || 1; // Obtiene el valor de 'page' de la URL o usa 1 como valor por defecto
      this.loadGames();
    });
  }
  loadGames() {
    // Utiliza el número de página actual para cargar los juegos
    this.gamesService.getGamesByPage(this.currentPage).subscribe((data: any) => {
      this.juegos = data.results;
    });
  }

  updateDisplayedGames() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedJuegos = this.juegos.slice(startIndex, endIndex);
  }


  onPageChange(page: number) {
    this.currentPage = page;
    this.loadGames();
  }


  openPopup(juego: Juego) {
    this.selectedJuego = juego;
  }

  // Función para cerrar el modal
  closePopup() {
    this.selectedJuego = null;
  }

  loadOriginalGames() {
    this.gamesService.getTopGames().subscribe((data: any) => {
      this.juegos = data.results;
    });
  }

  filterJuegos(searchTerm: string) {
    if (searchTerm.trim() === '') {
      // Si el término de búsqueda está vacío, cargar todos los juegos originales
      this.loadOriginalGames();
    } else {
      // Filtrar los juegos en función del término de búsqueda
      this.juegos = this.juegos.filter((juego) =>
        juego.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
  selectRandomGames() {
    const randomGames: Juego[] = [];
    const numGamesToSelect = 10;

    while (randomGames.length < numGamesToSelect) {
      const randomIndex = Math.floor(Math.random() * this.juegos.length);
      const selectedGame = this.juegos[randomIndex];

      // Asegurarse de no agregar duplicados
      if (!randomGames.includes(selectedGame)) {
        randomGames.push(selectedGame);
      }
    }

    this.juegos = randomGames;
  }

}

interface Juego {
  id: number;
  name: string;
  background_image: string;
  updated: string;
  reviews_text_count: string;
}
