import { Component } from '@angular/core';
import { initPersonaje, Personaje } from 'src/app/models/personaje';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.component.html',
  styleUrls: ['./personaje-detalles.component.css']
})
export class PersonajeDetallesComponent {

  personaje: Personaje = initPersonaje;

  constructor(private route: ActivatedRoute, private personajeService: PersonajesService) {
    let id = this.route.snapshot.params['id']
    this.personajeService.getById(id).subscribe( data => {
      this.personaje = data.data.results[0];
    });
  }
}
