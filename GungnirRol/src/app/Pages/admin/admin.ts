import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoriasService } from '../../services/historias';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  categoriasDisponibles:string[] = [];
  constructor(private historiasService: HistoriasService){}

  ngOnInit(): void {
    this.historiasService.obtenerHistorias().subscribe({
      next:(historias) =>{
        const categoriasUnicas = new Set(historias.map(h =>h.categoria));
        this.categoriasDisponibles = Array.from(categoriasUnicas);
      },
      error: (err) => console.error('Error al mapear categorias', err)
    });
  }
}
