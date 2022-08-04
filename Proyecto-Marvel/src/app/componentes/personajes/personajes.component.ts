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

  constructor(private personajeService: PersonajesService) {
    this.personajeService.getAll().subscribe((datos) => {
      this.personajes = datos.data.results;
      console.log(datos.data.results)
    });
  }

  buscarPersonaje() {
    this.personajeService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.personaje = item;
    });
  }


}
