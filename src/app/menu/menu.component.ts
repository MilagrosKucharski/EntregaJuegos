import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuOpen = true; // Inicialmente, el menú estará abierto en la versión de escritorio
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
    this.checkIfMobile(); // Verificar si la pantalla es móvil al cargar el componente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile(); // Verificar si la pantalla es móvil al cambiar el tamaño de la ventana
  }

  checkIfMobile() {
    // Define un ancho máximo para considerar que la pantalla es móvil o tablet
    const mobileWidth = 1200;
    this.isMobile = window.innerWidth < mobileWidth;

    // Si es móvil, cierra el menú automáticamente
    if (this.isMobile) {
      this.isMenuOpen = false;
    } else {
      // Si no es móvil (desktop), abre el menú automáticamente
      this.isMenuOpen = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}





