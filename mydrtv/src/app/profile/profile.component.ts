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
  submitted = false;

  constructor(public rest: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
    this.userId = "5cdfd690703a6e211ca25d5c";
    console.log('Userid is: ' + this.userId);

    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      gender: ['']
    });

    this.rest.getUser(this.userId).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => console.log(this.selectedUser)
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onSubmit() {
    //this.submitted = true;

  }

  // if the user was not found in the database
  userNotFound() {
    this.notFound = 'User not found in database...';
    console.log(this.notFound);
  }

}
