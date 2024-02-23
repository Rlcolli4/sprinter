import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkInfo } from './models/navigation/link-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: Add Icons for the route
  links: LinkInfo[] = [
    { id: 1, title: "Home", route: "home", icon: "home" },
    { id: 2, title: "Teams", route: "teams", icon: "people" },
    { id: 3, title: "Projects", route: "projects", icon: "work" },
  ];

  constructor(public router: Router) { }

}
