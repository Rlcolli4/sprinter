import { Component, Input } from '@angular/core';
import { InfoCardInfo } from 'src/app/models/navigation/info-card-info.model';

@Component({
  selector: 'app-project-manager-cards',
  templateUrl: './project-manager-cards.component.html',
  styleUrl: './project-manager-cards.component.scss'
})
export class ProjectManagerCardsComponent {
  @Input()
  projectInfo: InfoCardInfo[] = [];

}
