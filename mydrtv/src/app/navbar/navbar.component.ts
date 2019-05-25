import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Globals} from '../globals';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

// Redux
import {Store} from '@ngrx/store';
import * as UserActions from '../redux/user-state-management/user.actions';

import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [Globals]
})
export class NavbarComponent implements OnInit {
    email = '';
    password = '';

    user: any;
    notFound: string;

    // only for the logged in user
    currentUser: any;
    userName: string;

    constructor(
        private authService: AuthService,
        private globals: Globals,
        public rest: UsersService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<UserModel>) {
    }

    ngOnInit() {
        /*
        Redux state is saved for the currently open window.
        If the user closes the window and opens it up again, we lose it.
        Therefore if the state does not exist and the user is logged in
        we need to create the state.
         */

        if (localStorage.getItem('auth_token') && !this.userName) {
            // dispatch action
            this.rest.getUser(localStorage.getItem('user_id')).subscribe({
                next: userInfo => this.store.dispatch(new UserActions.LogIn(userInfo)),
                error: err => this.userNotFound(),
                complete: () => console.log('done')
            });
        }

        this.getCurrentUser().subscribe({
            next: result => this.userName = result.Name,
            error: error => console.warn('something went wrong with the Observable', error),
            complete: () => console.log('call finished')
        });
        this.currentUser = this.getCurrentUser();
    }

    Login() {
        console.log('You are logging in');
        this.authService.login(this.email, this.password);

    }

    logout() {
        console.log('You are logging out');
        this.authService.logout();
    }


    userNotFound() {
        this.notFound = 'User not found. You will be redirected to the main page in a moment...';
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 3000);  // 3s
    }

    getCurrentUser(): Observable<UserModel> {
        return this.store.select('operations');
    }
}