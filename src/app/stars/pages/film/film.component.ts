import { Component, OnInit } from '@angular/core';
import { StarsDataService } from './../../services/stars-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  public movieDetail :any=[];
  public people :any=[];
  public id: string | null = null;

  constructor(private starsService:StarsDataService,private  actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getDetail(this.id)
  }

  //Call API stars wars
  public getDetail(id:string | null): void {
    this.starsService.get(`films/${id}`)
    .subscribe( data => {
     this.movieDetail= data;
     console.log(this.movieDetail);
     let items = data.characters;
     this.people =  this.loopArray(items);
     console.log(this.people);
    }
    );
  }

  private loopArray(dataArray:any) {
    let results = [];
   for (let i = 0; i < dataArray.length; i++) {
     console.log(dataArray[i]);
     results.push(dataArray[i].replace('https://swapi.dev/api/people/', '').replace('/', ''));
   }
   return results;
 }



}
