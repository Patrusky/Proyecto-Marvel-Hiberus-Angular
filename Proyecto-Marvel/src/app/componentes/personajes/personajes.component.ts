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
  personaje:any ;
  heroes: any[]= [];


  constructor(private personajeService: PersonajesService) {
    this.personajeService.getAll().subscribe((datos) => {
      this.personajes = datos.data.results;
      console.log("Personajes", this.personajes);
    });

  let arrayHeroes = [1009664, 1009368, 1010338, 1009562];
  arrayHeroes.forEach((id: number) => {
      this.personajeService.getById(id).subscribe((datos) =>{
        this.heroes.push(datos.data.results[0])

      })
  });
  }

  /* buscarPersonaje() {
    this.personajeService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.personaje = item
    });
  } */
getPersonaje(){
  this.personajeService.getByName(this.nombre).subscribe((item) =>{
    console.log(item);
  })
}

}
