import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Globals} from '../globals';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

// Redux
import {Store} from '@ngrx/store';
import * as UserActions from '../redux/user-state-management/user.actions';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [Globals]
})
export class NavbarComponent implements OnInit {
    email = '';
    password = '';

    constructor(
        private authService: AuthService,
        private globals: Globals,
        public rest: UsersService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<any>) {
    }

    public usersId: string;
    user: any;
    notFound: string;

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

    logout() {
        console.log('You are logging out');
        this.authService.logout();
    }

    consoleRedux() {
        this.store.dispatch(new UserActions.PrintStore());
    }

    userNotFound() {
        this.notFound = 'User not found. You will be redirected to the main page in a moment...';
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 3000);  //3s
    }
}
