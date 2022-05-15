import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarsComponent } from './stars/stars.component';

import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';
import { CharacterComponent } from './pages/character/character.component';

const routes: Routes = [
  {
    path: '', component: StarsComponent
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'film/:id', component:  FilmComponent },
  { path: 'character/:id', component:  CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarsRoutingModule { }
