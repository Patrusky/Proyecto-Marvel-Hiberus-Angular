import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './comic-detalle.component.html',
  styleUrls: ['./comic-detalle.component.css']
})
export class ComicDetalleComponent implements OnInit {
  @Input() personaje: Personaje= {
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
    this.showPersonaje.emit(this.personaje.id)
  }

}
