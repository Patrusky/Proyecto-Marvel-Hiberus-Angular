import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  endpoint:string =  'comics';

  constructor(private http: HttpClient) {

   }
   getAll(){
    return this.http.get(`${environment.url}${this.endpoint}?ts=2&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH}&offset=2`)
    .pipe(map((data:any) => {
      return data.data.results;
    }));
   }
}
/* ********** COMENTARIOS ********** */
/*
En esta llamada la url viene importada de environments, allí se han creado las variables de url, key y hash. Endpoint
 es otra parte de la url, que en este caso contiene comics.
Con .pipe estamos haciendo un filtro a los datos para que vengan limpios y con map estamos devolviendo
un nuevo array con esos datos limpios.  */
