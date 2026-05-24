import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriasType } from '../models/HistoriaType';

@Injectable({
  providedIn: 'root',
})
export class HistoriasService {
  private apiUrl ='https://localhost:5432/api/historias';

  constructor(private https: HttpClient) {}
  obtenerHistorias(): Observable<HistoriasType[]>{
    return this.https.get<HistoriasType[]>(this.apiUrl);
  }
}
