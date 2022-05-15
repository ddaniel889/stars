import { Component, OnInit } from '@angular/core';
import { Film } from '../../model/film'
import { StarsDataService } from './../../services/stars-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Director', 'Producer', 'Release Date','Movie Detail'];
  dataSource: Array<Film> =[];

  constructor(private starsService:StarsDataService ) { }

  ngOnInit(): void {
    this.getFilms();
  }

    //Call API stars wars
    public getFilms(): void {
      this.starsService.get("films")
      .subscribe( data => {
       this.dataSource = data.results;
       console.log(this.dataSource);
      }
      );
    }

}
