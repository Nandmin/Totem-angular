import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotemComponent } from './totem/totem.component';

const routes: Routes = [
  {
    path: 'totem', component: TotemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
