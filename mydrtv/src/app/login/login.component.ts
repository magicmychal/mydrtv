import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../entities/users';

// Redux
import {Store} from '@ngrx/store';
import * as UserActions from '../redux/user-state-management/user.actions';

import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  selectedUser: User;
  notFound: string;
  submitted = false;
  email = '';
  password = '';

  // only for the logged in user
  currentUser: any;
  userName: string;

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public rest: UsersService,
    private router: Router,
    private store: Store<UserModel>
  ) { }

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

      this.loginForm = this.fb.group({
        email: [''],
        password: ['']
      });
      }

      get f() { return this.loginForm.controls; }

      Login() {
        this.submitted = true;
        this.authService.loginForm(this.loginForm.value);

        // stop here if form is invalid
        if (this.loginForm.invalid) {
        return;

      }
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