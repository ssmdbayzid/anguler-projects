import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-main',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.scss'
})
export class HeaderMainComponent {

}
