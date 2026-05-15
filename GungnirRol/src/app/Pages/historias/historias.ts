import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historias.html',
  styleUrl: './historias.css'
})
export class Historias {
  catActiva: string = 'Lugares';
  elementoSeleccionado: any = null;

  // Base de datos de ejemplo
  dbHistorias: any = {
    'Lugares': [
      { nombre: 'Valle de Baalth', subtitulo: 'Región Central', imagen: 'assets/historias/baalth.png', descripcion: 'Un valle azotado por la guerra pero lleno de gloria.', datosExtra: 'Población: 2000 almas.' },
      { nombre: 'Cataratas de Éter', subtitulo: 'Anomalía Mística', imagen: 'assets/historias/cataratas.png', descripcion: 'Aguas que fluyen hacia arriba.', datosExtra: 'Altamente inestable.' }
    ],
    'Bestias': [
      { nombre: 'Vermis de Sangre', subtitulo: 'Depredador Alfa', imagen: 'assets/historias/vermis.png', descripcion: 'Habita en las grietas de Fergalia.', datosExtra: 'Débil al fuego.' }
    ],
    // ... añade los demás
  };

  get listaFiltrada() {
    return this.dbHistorias[this.catActiva] || [];
  }

  cambiarCategoria(cat: string) {
    this.catActiva = cat;
    this.elementoSeleccionado = null; // Resetear detalle al cambiar categoría
  }

  seleccionarElemento(item: any) {
    this.elementoSeleccionado = item;
  }
}