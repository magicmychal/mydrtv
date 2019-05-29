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
        localStorage.removeItem('user_id');
        this.router.navigate(['/welcome']);
    }

    login(email: string, password: string) {
        this.http.post(this.endpoint, {email: email, password: password})
            .subscribe((resp: any) => {
                localStorage.setItem('auth_token', resp.token);
                localStorage.setItem('user_id', resp._id);
                // dispatch an action
                const userInfo = {
                    _id: resp._id, Name: resp.Name, Email: resp.Email, Password: resp.password, Gender: resp.Gender
                    , History: []
                }
                this.store.dispatch(new UserActions.LogIn(userInfo));
                this.router.navigate(['/home']);
            }, err => document.getElementById("wrong")
                .style.display = "block"),
            document.getElementById('dropdownMenu1')
                .setAttribute("data-toggle", "");
    }

    loginForm(user) {
        this.http.post(this.endpoint, user)
            .subscribe((resp: any) => {
                localStorage.setItem('auth_token', resp.token);
                localStorage.setItem('user_id', resp._id);
                // dispatch an action
                const userInfo = {_id: resp._id, Name: resp.Name, Email: resp.Email, Password: resp.Password, Gender: resp.Gender
                    , History: []}
                this.store.dispatch(new UserActions.LogIn(userInfo));
                this.router.navigate(['/home']);
            }, err => document.getElementById('wrong-form').style.display ='block');
        }
}
