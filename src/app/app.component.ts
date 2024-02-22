import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: Add Icons for the route
  links: { id: number, title: string, route: string }[] = [
    { id: 1, title: "Home", route: "home" },
    { id: 2, title: "Teams", route: "teams" },
    { id: 3, title: "Projects", route: "projects" },
  ];

  constructor(private router: Router) { }

  onNavItemClick(link: { id: number, title: string, route: string }): void {
    console.log(link);
    this.router.navigateByUrl(link.route);
  }
}
