import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aventuras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aventuras.html',
  styleUrl: './aventuras.css'
})
export class Aventuras {

  enviarBitacora(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const bitacora = {
      titulo: formData.get('titulo'),
      lugar: formData.get('lugar'),
      fecha: formData.get('fecha'),
      relato: formData.get('relato'),
      timestamp: new Date()
    };

    console.log('Bitácora recibida para procesamiento futuro:', bitacora);
    alert('¡Tu relato ha sido enviado con éxito a los archivos de Fergalia!');
    form.reset();
  }
}