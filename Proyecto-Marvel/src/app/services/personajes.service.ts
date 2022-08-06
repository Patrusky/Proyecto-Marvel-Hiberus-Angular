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

  /* buscar(nombre: string): Observable<any> {
    let url: string = "https://gateway.marvel.com:443/v1/public/characters/" + nombre + "?ts=2&apikey=597e5f5ab2c799f16c0b4c25bcdc2eac&hash=0933ce7dab464a357a216f91dc030325";

    return this.http.get(url);
  } */
  getByName(nombre: string): Observable<any> {
    let url: string = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+ nombre +"&ts=2&apikey=597e5f5ab2c799f16c0b4c25bcdc2eac&hash=0933ce7dab464a357a216f91dc030325";
    return this.http.get(url);
  }
  getById(id: number): Observable<any> {
    let url: string = "https://gateway.marvel.com:443/v1/public/characters/" + id + "?ts=2&apikey=597e5f5ab2c799f16c0b4c25bcdc2eac&hash=0933ce7dab464a357a216f91dc030325";

    return this.http.get(url);
  }

}

/* ********** COMENTARIOS ********** */
/*
getAll -->  Hacemos la llamada para traer todos los datos.

getByName --> Hacemos la llamada pero solo traemos los nombres de los personajes. Esto se consigue porque ponemos la clave valor que nos indica la api. Tras el query (?) de characters va  nameStartsWith(clave) = "+ nombre +"(valor).
Usamos esta clave porque no es tan específica, con la de name tendríamos que escribir el nombre exacto de la api.

getById --> Hacemos la llamda y traemos los id de los personajes. Aquí no piden que pongamos el valor (" + id + ") tras el path(\) de characters.
*/
