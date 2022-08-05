import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: any[]= [];

  constructor(private comicsService:ComicsService) {
    this.comicsService.getAll().subscribe((data:any) =>{
      this.comics = data;
      console.log(this.comics)
    })
  }

  ngOnInit(): void {
  }

}
