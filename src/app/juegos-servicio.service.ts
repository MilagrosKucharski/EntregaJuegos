import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosServicioService {

  private apiUrl = 'https://api.rawg.io/api/games';
  private apiKey = '954d58557bc44da28afdafda9e2ad7dc'; // Sustituye con tu clave de API RAWG

  constructor(private http: HttpClient) {}

  getTopGames(): Observable<any> {
    // Parámetros de solicitud
    const params = new HttpParams().set('key', this.apiKey);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Realizar la solicitud GET a la API de RAWG
    return this.http.get(this.apiUrl, { headers, params });
  }
}
