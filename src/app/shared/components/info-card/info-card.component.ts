import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfoCardInfo } from 'src/app/models/navigation/info-card-info.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input()
  info?: InfoCardInfo;

  constructor(private router: Router) { }

  onCardClick(): void {
    if (this.info) {
      this.router.navigateByUrl("projects/" + this.info?.id.toString());
    }
  }
}
