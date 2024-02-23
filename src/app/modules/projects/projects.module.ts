import { NgModule } from '@angular/core';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ]
})
export class ProjectsModule { }
