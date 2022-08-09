import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.component.html',
  styleUrls: ['./personaje-detalles.component.css']
})
export class PersonajeDetallesComponent implements OnInit {

  @Input() pers: Personaje= {
    id:'',
    name: '',
    description:'',
    thumbnail: {
      path: '',
      extension: ''
    }
  }
  showPersonaje: any;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(){
    this.showPersonaje.emit(this.pers.id)
  }

}
