import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student'
import { StarsDataService } from './../../services/stars-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filmList :any=[];
  displayedColumns: string[] = ['Title', 'Director', 'Producer', 'Release Date','Movie Detail'];
  dataSource:any;

  constructor(private starsService:StarsDataService ) { }

  ngOnInit(): void {
    this.getFilms();
  }

    //Call API stars wars
    public getFilms(): void {
      this.starsService.get("films")
      .subscribe( data => {
       this.filmList = data.results;
       this.dataSource = this.filmList;
       console.log(this.filmList);
      }
      );
    }

}
