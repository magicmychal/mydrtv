import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../services/users.service';
import {AuthService} from '../services/auth.service';

// Redux
import {Store} from '@ngrx/store';
import * as UserActions from '../redux/user-state-management/user.actions';

import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  privacyForm: FormGroup;
  public userId: string;
  notFound: string;
  selectedUser = {};
  showEditButton: boolean = true;
  showSaveButton: boolean = false;
  submitted = false;
  currentUser: any;
  userName: string;

  constructor(public rest: UsersService,
              public authService: AuthService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<UserModel>) {  }


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
        next: result => this.currentUser = result,
        error: error => console.warn('something went wrong with the Observable', error),
        complete: () => console.log('call finished')
    });

    console.log(this.currentUser)

    //this.userId = this.currentUser._id;

    // Create form with FormBuilder
    this.profileForm = this.fb.group({
      name: [this.currentUser.Name, Validators.required],
      email: [this.currentUser.Email, [Validators.required, Validators.email]],
      password: [this.currentUser.Password, [Validators.required, Validators.minLength(6)]],
      gender: [this.currentUser.Gender, Validators.required]
    }); 

    // We only use this form for Development Environments Exam
    // Only for prototype reasons
    this.privacyForm = this.fb.group({}); 

    this.profileForm.disable();

    // Make sure we follow the value changes in the form
    this.profileForm.valueChanges.subscribe(val => {
      this.selectedUser = val;
      //console.log(this.selectedUser);
    });

  }


  // Convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  // Enable editing the form
  onEdit(){
    this.profileForm.enable();
    this.showEditButton = false;
    this.showSaveButton = true;
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    this.profileForm.disable();
    this.showEditButton = true;
    this.showSaveButton = false;

    // Update user in the database
    this.rest.updateUser(this.currentUser._id, this.profileForm.value).subscribe({
      next: result => this.selectedUser = result,
      error: err => this.userNotFound(),
      complete: () => console.log('User updated')
    })

    //console.log(this.profileForm.value);

  }

  // Delete current user
  onDeleteUser(){

    this.rest.deleteUser(this.userId).subscribe({
      next: result => console.log(result),
      error: err => this.userNotFound(),
      complete: () => this.authService.logout()
    })

  }

  // if the user was not found in the database
  userNotFound() {
    this.notFound = 'User not found in database...';
    setTimeout(() => {
      //console.log('User not found')
      this.router.navigate(['/']);
    }, 2000);  // 2s
  }

  getCurrentUser(): Observable<UserModel> {
    return this.store.select('operations');
  }

}
