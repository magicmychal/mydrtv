import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = 'http://localhost:3000/users/login';
  token;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public isLoggedIn(): boolean {
    //return (localStorage.getItem('auth_token') !== null);
    if (localStorage.getItem('auth_token')) {
      // user logged in
      return true;
    } else {
      // user logged out
      return false;
    }
  }
  public logout() {
    localStorage.removeItem('auth_token');
  }
  login(email: string, password: string) {
    console.log('{email: ' + email + ', password:' + password + '}');
    this.http.post(this.endpoint, {email: email, password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['/home']);
        localStorage.setItem('auth_token', resp.token);
      }, err => document.getElementById("wrong").style.display ="block"), document.getElementById('dropdownMenu1').setAttribute("data-toggle", "")
  }
  loginForm(user) {
    //console.log('{email: ' + user.email + ', password:' + user.password + '}');
     this.http.post(this.endpoint, user)
      .subscribe((resp: any) => {
        localStorage.setItem('auth_token', resp.token);
        this.router.navigate(['/home']);
      }, err => document.getElementById("wrong-form").style.display ="block");
  }

}
