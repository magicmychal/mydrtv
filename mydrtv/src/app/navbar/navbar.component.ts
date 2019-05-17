import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  email = '';
  password = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  Login() {
    console.log('You are logging in');
    this.authService.login(this.email, this.password);
  }
  logout(){
    console.log('You are logging out');
    AuthService.logout();
  }
}
