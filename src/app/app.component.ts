import { Component } from '@angular/core';
import {Router,RouterLinkActive} from '@angular/router';
import {Menu_Navbar} from './app.routes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navbar = Menu_Navbar;
}
