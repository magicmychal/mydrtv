import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  email = '';
  password = '';

  public usersId: string;
  user: any;
  notFound: string;

  constructor(
    public rest: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.usersId = "5ce1b9264f2e1fa29e4ee216"; //this.route.snapshot.params.id;
    console.log('user id is: ', this.usersId);
    this.rest.getUser(this.usersId).subscribe({
      next: x => this.user = x,
      error: err => this.userNotFound(),
      complete: () => console.log('done')
    });
  }

  Login() {
    console.log('You are logging in');
    this.authService.login(this.email, this.password);

  }
  
  logout(){
    console.log('You are logging out');
    this.authService.logout();
  }

userNotFound() {
  this.notFound = 'User not found. You will be redirected to the main page in a moment...';
  setTimeout(() => {
    this.router.navigate(['/']);
  }, 3000);  //3s
}
}