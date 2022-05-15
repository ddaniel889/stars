import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StarsDataService } from './services/stars-data.service';


import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './stars/stars.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';
import { CharacterComponent } from './pages/character/character.component';



@NgModule({
  declarations: [
    StarsComponent,
    HomeComponent,
    FilmComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    StarsRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatRippleModule,
    MatButtonModule
  ],
  providers: [HttpClient,StarsDataService]
})
export class StarsModule { }
