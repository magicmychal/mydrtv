import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public get isLoggedIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
  endpoint = 'http://localhost:3000/users/login';
  token;
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
}
