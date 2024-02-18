import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromStandAlones from "./standalones";

const routes: Routes = [
  {
    path: "projects", loadChildren: () => import("./modules/projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path: "teams", loadChildren: () => import("./modules/teams/teams.module").then(m => m.TeamsModule)
  },
  { path: "home", component: fromStandAlones.HomeComponent },
  { path: "", component: fromStandAlones.LoginComponent },
  { path: "*", redirectTo: "projects" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
