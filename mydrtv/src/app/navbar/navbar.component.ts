import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ Globals ]
})
export class NavbarComponent implements OnInit {
  email = '';
  password = '';

  constructor(
      private authService: AuthService,
      private globals: Globals) {}

  ngOnInit() {
  }

  Login() {
    console.log('You are logging in');
    this.authService.login(this.email, this.password);
  }
  logout() {
    console.log('You are logging out');
    this.authService.logout();
  }
}
