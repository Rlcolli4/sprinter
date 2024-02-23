import { Component } from '@angular/core';
import { InfoCardInfo, InfoCardType } from 'src/app/models/navigation/info-card-info.model';

@Component({
  selector: 'app-projects-manager',
  templateUrl: './projects-manager.component.html',
  styleUrl: './projects-manager.component.scss'
})
export class ProjectsManagerComponent {
  projectInfo: InfoCardInfo[] = [
    {
      id: 1,
      title: "Sands of Time",
      subtitle: "Started Jan 19, 2024",
      type: InfoCardType.PROJECTS
    },
    {
      id: 2,
      title: "Hyrule Champion",
      subtitle: "Completed Dev 1, 2023",
      type: InfoCardType.PROJECTS
    },
    {
      id: 3,
      title: "Shadows of the Erd Tree",
      subtitle: "TBD",
      type: InfoCardType.PROJECTS
    },
    {
      id: 4,
      title: "Fatality / Friendship",
      subtitle: "TBD",
      type: InfoCardType.PROJECTS
    }
  ];
  type = "CARD";
}
