import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juega',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juega.html',
  styleUrl: './juega.css'
})
export class Juega {
  // ID para controlar cuál está iluminada en la lista
  campanaActivaId: string = 'miedo';

  // Dataset de las campañas
  dbCampanas: any = {
    'miedo': {
      titulo: 'Miedo Urbano',
      tipo: 'Campaña de Intriga y Terror',
      resumen: 'Las sombras de la civilización esconden secretos ancestrales. En las calles empedradas y oscuras, los jugadores deberán resolver misterios donde la cordura es el precio de la verdad.',
      videoUrl: 'assets/videos/miedo-loop.mp4'
    },
    'fuente': {
      titulo: 'La Fuente del Sol',
      tipo: 'Fantasía Épica / Alta Magia',
      resumen: 'Un viaje directo al núcleo místico de Fergalia. Una fuerza corrupta amenaza con extinguir el gran nexo de energía que da vida al continente. La vanguardia de héroes debe resistir.',
      videoUrl: 'assets/videos/fuente-loop.mp4'
    },
    'sotel': {
      titulo: 'SotelMoloch',
      tipo: 'Supervivencia / Mazmorras Extremanas',
      resumen: 'El descenso a las profundidades de la tierra abrasadora. SotelMoloch es un laberinto de piedra, fuego y entidades olvidadas que no perdonan el más mínimo error táctico.',
      videoUrl: 'assets/videos/sotel-loop.mp4'
    }
  };

  // Estado inicial que escucha el HTML (carga Miedo Urbano por defecto)
  campanaSeleccionada = this.dbCampanas['miedo'];

  // Función encargada de cambiar el contenido al hacer clic
  seleccionarCampana(id: string) {
    this.campanaActivaId = id;
    this.campanaSeleccionada = this.dbCampanas[id];
  }
}