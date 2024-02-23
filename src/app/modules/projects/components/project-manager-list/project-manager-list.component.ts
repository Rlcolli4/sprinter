import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfoCardInfo } from 'src/app/models/navigation/info-card-info.model';

@Component({
  selector: 'app-project-manager-list',
  templateUrl: './project-manager-list.component.html',
  styleUrl: './project-manager-list.component.scss'
})
export class ProjectManagerListComponent {
  @Input()
  projectInfo: InfoCardInfo[] = [];

  constructor(private router: Router) { }

  onListItemClick(id: number): void {
    this.router.navigateByUrl("projects/" + id.toString());
  }

}
