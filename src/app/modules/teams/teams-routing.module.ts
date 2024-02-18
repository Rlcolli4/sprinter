import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsManagerComponent } from './containers/teams-manager/teams-manager.component';

const routes: Routes = [
  { path: "", component: TeamsManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
