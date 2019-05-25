import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as UserActions from '../redux/user-state-management/user.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endpoint = 'http://localhost:3000/users/login';
    token;

    constructor(
        private http: HttpClient,
        private router: Router,
        private store: Store<any>
    ) {
    }

    public isLoggedIn(): boolean {
        // return (localStorage.getItem('auth_token') !== null);
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
        console.warn('login with redux');
        this.http.post(this.endpoint, {email: email, password: password})
            .subscribe((resp: any) => {
                localStorage.setItem('auth_token', resp.token);
                // dispatch an action
                const userInfo = {Id: resp._id, Name: resp.Name, Email: resp.Email, Password: resp.password, Gender: resp.Gender
                    , History: []}
                this.store.dispatch(new UserActions.LogIn(userInfo));
                this.router.navigate(['/home']);
            });
    }

    loginForm(user) {
        this.http.post(this.endpoint, user)
            .subscribe((resp: any) => {
                localStorage.setItem('auth_token', resp.token);
                this.router.navigate(['/home']);
            });
    }

}
