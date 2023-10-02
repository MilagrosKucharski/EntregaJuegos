import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() juego: Juego | null = null; // Recibe el juego seleccionado como entrada
  @Output() close = new EventEmitter<void>();

  // Función para cerrar el modal
  closeModal() {
    this.close.emit();
  }
}
interface Juego {
  id: number;
  name: string;
  background_image: string;
  description: string;
  reviews_text_count: string;
}




