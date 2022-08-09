import { Component, Input, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

import { initPersonaje, Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: any[] = [];
  nombre: string = '';
  personaje: Personaje[]=[];
  heroes: Personaje[] = [];
  heroe: Personaje = initPersonaje;

  myModal: Modal | undefined;

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
    this.personajeService.getByName(this.nombre).subscribe((datos) => {
      this.personaje = datos.data.results;
      console.log("Personaje", this.personaje);
    })
  }

  /*  Modal */
  open(id: string) {
    this.heroe = this.heroes.filter((h:Personaje) => {
      return h.id == id;
    })[0];
    this.myModal = new bootstrap.Modal(document.getElementById('myModal') as HTMLElement,{
      keyboard: false
    })
    this.myModal?.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.myModal?.hide();
  }


}

/* ********** COMENTARIOS ********** */
/*
1º Traemos todos los datos con el getAll

2º Creamos el arrayHeroes contiene los id de los 4 personajes que queremos.
Lo recorremos con el foreach, le pedimos que traiga los datos de esos id y los meta con el push en el array de heroes.

3º Con el método buscarPersonaje nos trae todos los pernosajes que tenga ese nombre que hemos introducido previamente en el input.


*/
