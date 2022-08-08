import { Component, Input, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

import { initComic, Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {

  comics: any[] = [];
  title: string = '';
  comic: Comic[] = [];
  description: Comic[] = [];
  heroe: Comic = initComic;

  myModal: Modal | undefined;



  constructor(private comicService: ComicsService) {
    this.comicService.getAll().subscribe((datos) => {
      this.comics = datos.data.results;
      console.log("Comics", this.comics);
    });

  }


  /*  Modal */
  open(id: string) {
    this.comic = this.comics.filter((h: Comic) => {
      return h.id == id;
    })[0];
    this.myModal = new bootstrap.Modal(document.getElementById('myModal') as HTMLElement, {
      keyboard: false
    })
    this.myModal?.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.myModal?.toggle();
  }
}

/* ********** COMENTARIOS ********** */
/*
1º Traemos todos los datos con el getAll

2º Creamos el arrayHeroes contiene los id de los 4 personajes que queremos.
Lo recorremos con el foreach, le pedimos que traiga los datos de esos id y los meta con el push en el array de heroes.

3º Con el método buscarPersonaje nos trae todos los pernosajes que tenga ese nombre que hemos introducido previamente en el input.


*/





// import { Component, OnInit } from '@angular/core';
// import { ComicsService } from 'src/app/services/comics.service';

// @Component({
//   selector: 'app-comics',
//   templateUrl: './comics.component.html',
//   styleUrls: ['./comics.component.css']
// })
// export class ComicsComponent implements OnInit {
//   comics: any[]= [];

//   constructor(private comicsService:ComicsService) {
//     this.comicsService.getAll().subscribe((data:any) =>{
//       this.comics = data;
//       console.log(this.comics)
//     })
//   }

//   ngOnInit(): void {
//   }

// }
