import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para [ngStyle]

@Component({
  selector: 'app-inicio',
  standalone: true,
  // Agregamos CommonModule para poder usar directivas de Angular en el HTML
  imports: [CommonModule], 
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit, OnDestroy {
  // --- Lógica del Carrusel ---
  currentIndex: number = 0;
  totalSlides: number = 3; // Joako, Benja y la tercera imagen
  private intervalId: any;

  // Se ejecuta cuando el componente carga
  ngOnInit() {
    this.startAutoPlay();
  }

  // Se ejecuta cuando el componente se destruye (evita fugas de memoria)
  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5000ms = 5 segundos
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  // Método para cuando el usuario hace clic manual
  manualNav(direction: 'next' | 'prev') {
    this.stopAutoPlay(); // Detenemos el reloj para que no salte justo después de hacer clic
    if (direction === 'next') {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
    this.startAutoPlay(); // Reiniciamos el reloj
  }
}