import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mundo',
  standalone: true,
  imports: [CommonModule], // Obligatorio para usar *ngIf en el HTML
  templateUrl: './mundo.html',
  styleUrl: './mundo.css',
})
export class Mundo {
  // 1. Definimos el "Diccionario" de datos (como un mini dataset)
  datosRegiones: any = {
    'bosque': {
      nombre: 'El Bosque de los Ecos',
      descripcion: 'Un lugar donde los susurros de los antiguos Anunak aún se escuchan entre los árboles. La vegetación brilla con una luz violeta tenue durante la noche.',
      clima: 'Húmedo y Templado',
      peligro: 'Medio (Espíritus errantes)'
    },
    'capital': {
      nombre: 'Ciudad de Anunak',
      descripcion: 'La joya de la corona de Fergalia. Una metrópolis construida sobre ruinas tecnológicas avanzadas, protegida por muros de obsidiana.',
      clima: 'Controlado mágicamente',
      peligro: 'Bajo (Guardia de Élite)'
    },
    'montanas': {
      nombre: 'Cumbres de Plata',
      descripcion: 'Montañas tan altas que rozan el vacío. Aquí se extrae el metal necesario para forjar las armas más poderosas de la región.',
      clima: 'Gélido extremo',
      peligro: 'Alto (Dragones de escarcha)'
    },
    'costa': {
      nombre: 'Costa del Susurro',
      descripcion: 'Aguas cristalinas de color cian que esconden secretos de civilizaciones sumergidas.',
      clima: 'Cálido / Tropical',
      peligro: 'Mínimo'
    }
  };

  // 2. Esta es la variable que el HTML está "escuchando"
  // La inicializamos con un estado vacío o por defecto
  regionSeleccionada = {
    nombre: 'Selecciona una región',
    descripcion: 'Haz clic en una de las regiones de la izquierda para conocer los secretos de Fergalia...',
    clima: '---',
    peligro: '---'
  };

  // 3. Esta es la función (método) que se activa al hacer (click)
  seleccionarRegion(id: string) {
    this.regionSeleccionada = this.datosRegiones[id];
  }
}