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
    return (localStorage.getItem('auth_token') !== null);
  }
  static logout() {
    localStorage.removeItem('auth_token');
  }
  login(email: string, password: string){
    console.log('{email: ' + email + ', password:' + password + '}');
    this.http.post(this.endpoint, {email: email, password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['/']);
        localStorage.setItem('auth_token', resp.token);
      });
  }
  loginForm(user){
    //console.log('{email: ' + user.email + ', password:' + user.password + '}');
     this.http.post(this.endpoint, {email: user.email, password: user.password})
      .subscribe((resp: any) => {
        this.router.navigate(['/']);
        localStorage.setItem('auth_token', resp.token);
      });
  }

}
