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

  constructor(public rest: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
    this.userId = "5cdebf2d5c192b6a0a18602d";
    console.log('Userid is: ' + this.userId);

    this.profileForm = this.fb.group({
      name: [{value: '', disabled: true}, Validators.required],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]],
      password: [{value: '', disabled: true}, [Validators.required, Validators.minLength(6)]],
      gender: [{value: '', disabled: true}, Validators.required]
    });

    this.rest.getUser(this.userId).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => console.log(this.selectedUser)
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onEdit(){
    //console.log('Edit clicked');
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

    this.rest.updateUser(this.userId, this.profileForm.value).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => console.log(this.selectedUser)
    })

    //console.log(this.profileForm.value);

  }

  // if the user was not found in the database
  userNotFound() {
    this.notFound = 'User not found in database...';
    console.log(this.notFound);
  }

}
