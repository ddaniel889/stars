import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarsComponent } from './stars/stars/stars.component';

const routes: Routes = [
  {
    path: '', component: StarsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
