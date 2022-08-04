import { Component } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: any = [];
  nombre: string = '';
  personaje: any;
  heroes: any[] = [];

  constructor(private personajeService: PersonajesService) {
    this.personajeService.getAll().subscribe((datos) => {
      this.personajes = datos.data.results;
      console.log("Personajes", this.personajes);
      //escoger a 4
      // Filtramos los id de los personajes = [{id: 1},{id: 2}, {id: 3}] y con el includes incluimos solos los 4 que indicamos
      let arraydeHeroes = [1009664,1009368,1010338,1011266];
      this.heroes = this.personajes.filter( (personaje:any) => {
        return arraydeHeroes.includes(personaje.id);
      });

      this.heroes.map( personaje => {
        if (personaje.thumbnail.path.search('image_not_available') != -1){
          personaje.thumbnail.path = '/assets/personajes/' + personaje.id;
        }
      });
      console.log(this.heroes);
    });

  }

  buscarPersonaje() {
    this.personajeService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.personaje = item;
    });
  }


}
