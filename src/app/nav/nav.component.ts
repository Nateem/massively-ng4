import { Component, OnInit } from '@angular/core';
import {Router,RouterLinkActive} from '@angular/router';
import {Menu_Navbar} from '../app.routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbar = Menu_Navbar;
  constructor() { }

  ngOnInit() {
  }

}
