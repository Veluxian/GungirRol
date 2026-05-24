import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriasService } from '../../services/historias';
import { HistoriasType } from '../../models/HistoriaType';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historias.html',
  styleUrl: './historias.css'
})
export class Historias implements OnInit{
  listaHistorias: HistoriasType[] = [];

  constructor(private historiasService: HistoriasService){}
  ngOnInit(): void{
    this.historiasService.obtenerHistorias().subscribe({
      next: (data) =>{
        this.listaHistorias = data;
      },
      error: (err) => console.error(err)
    });
  }

  catActiva: string = 'Lugares';
  elementoSeleccionado: HistoriasType | null = null;
  

  get listaFiltrada(): HistoriasType[] {
    return this.listaHistorias.filter(
      item => item.categoria.toLowerCase() === this.catActiva.toLowerCase()
    );
  }

  cambiarCategoria(cat: string) {
    this.catActiva = cat;
    this.elementoSeleccionado = null; // Resetear detalle al cambiar categoría
  }

  seleccionarElemento(item: HistoriasType) {
    this.elementoSeleccionado = item;
  }
}