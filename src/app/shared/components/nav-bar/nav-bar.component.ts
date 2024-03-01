import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  routes: Array<any> = routes;

  isErrorRoute(routeTitle: string) {
    if (routeTitle) return routeTitle.toLowerCase().includes('error');
    return false;
  }
}
