import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../entities/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  public userId: string;
  notFound: string;
  selectedUser = {};
  showEditButton: boolean = true;
  showSaveButton: boolean = false;
  submitted = false;
  firstname: string = "YYY";

  constructor(public rest: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
    this.userId = "5cdec49f5c192b6a0a186030";
    console.log('Userid is: ' + this.userId);

    // Create form with FormBuilder
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required]
    });

    // Get user data from the database
    // This data is commented out in the database now. Need another way.
    this.rest.getUser(this.userId).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => this.onUserRetrieved(this.selectedUser)
    });

    //console.log(this.profileForm.value);
    this.profileForm.disable();

    // Make sure we follow the value changes in the form
    this.profileForm.valueChanges.subscribe(val => {
      this.selectedUser = val;
      //console.log(this.selectedUser);
    });

  }

  onUserRetrieved(user: any): void {

    // Update the data on the form
    this.profileForm.patchValue({
        name: user.Name,
        email: user.Email,
        password: user.Password,
        gender: user.Gender
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
    this.rest.updateUser(this.userId, this.profileForm.value).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => console.log('User updated')
    })

    //console.log(this.profileForm.value);

  }

  // Delete current user
  onDeleteUser(){
    console.log('User delete clicked');

    this.rest.deleteUser(this.userId).subscribe({
      next: x => console.log(x),
      error: err => this.userNotFound(),
      complete: () => console.log('User deleted')
    })

  }

  // if the user was not found in the database
  userNotFound() {
    this.notFound = 'User not found in database...';
    console.log(this.notFound);
  }

}
