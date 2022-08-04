import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  url: string = "https://gateway.marvel.com:443/v1/public/characters?ts=2&apikey=597e5f5ab2c799f16c0b4c25bcdc2eac&hash=0933ce7dab464a357a216f91dc030325";
  cabeceras: HttpHeaders = new HttpHeaders({ "Content-type": "application/json" })

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url, { headers: this.cabeceras });
  }

  buscar(nombre: string): Observable<any> {
    let url: string = "https://gateway.marvel.com:443/v1/public/characters/" + nombre + "?ts=2&apikey=597e5f5ab2c799f16c0b4c25bcdc2eac&hash=0933ce7dab464a357a216f91dc030325";

    return this.http.get(url);
  }

}

