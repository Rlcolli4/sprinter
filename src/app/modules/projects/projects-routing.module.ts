import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsManagerComponent } from './containers';
import { ProjectComponent } from './containers/project/project.component';

const routes: Routes = [
  { path: ":id", component: ProjectComponent },
  { path: "", component: ProjectsManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
