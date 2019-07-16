import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const playersRoutes: Routes = [
  { path: 'players', component: ListComponent },
  { path: 'player/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(playersRoutes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
