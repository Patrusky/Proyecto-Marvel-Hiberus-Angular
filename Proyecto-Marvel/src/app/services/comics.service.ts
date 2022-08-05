import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//Importamos el environment , que es el que tiene las partes de la url

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  endpoint:string =  'comics';

  constructor(private http: HttpClient) {

   }
   getAll(){
    return this.http.get(`${environment.url}${this.endpoint}?ts=2&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}`)
    .pipe(map((data:any) => {
      return data.data.results;
    }));
   }
}
/* Con .pipe estamos haciendo un filtro a los datos para que vengan limpios y con map estamos devolviendo
un nuevo array con esos datos limpios.  */
