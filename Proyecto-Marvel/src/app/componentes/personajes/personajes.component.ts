import { Component } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: any[] = [];
  nombre: string = '';
  personaje: any;
  heroes: any[] = [];


  constructor(private personajeService: PersonajesService) {
    this.personajeService.getAll().subscribe((datos) => {
      this.personajes = datos.data.results;
      console.log("Personajes", this.personajes);
    });

    let arrayHeroes = [1009664, 1009368, 1010338, 1009562];
    arrayHeroes.forEach((id: number) => {
      this.personajeService.getById(id).subscribe((datos) => {
        this.heroes.push(datos.data.results[0])

      })
    });
  }
  buscarPersonaje() {
    this.personajeService.getByName(this.nombre).subscribe((item) => {
      console.log(item);
      this.personaje = item
    })
  }
}
/* ********** COMENTARIOS ********** */
/*
1º Traemos todos los datos con el getAll

2º Creamos el arrayHeroes contiene los id de los 4 personajes que queremos.
Lo recorremos con el foreach, le pedimos que traiga los datos de esos id y los meta con el push en el array de heroes.

3º Con el método buscarPersonaje nos trae todos los pernosajes que tenga ese nombre que hemos introducido previamente en el input.


*/
