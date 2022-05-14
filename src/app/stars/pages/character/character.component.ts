import { Component, OnInit } from '@angular/core';
import { StarsDataService } from './../../services/stars-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public movieDetail :any=[];
  public people :any=[];
  public id: string | null = null;

  constructor(private starsService:StarsDataService,private  actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getPeople(this.id)
  }

   //Call API stars wars
   public getPeople(id:string | null): void {
    this.starsService.get(`people/${id}`)
    .subscribe( data => {
     this.people= data;
     console.log(this.people);
    
    }
    );
  }

}
