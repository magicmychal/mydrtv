import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../entities/users';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  selectedUser: User;

  notFound: string;

  constructor(public rest: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router)
  {}

  ngOnInit() {
    this.signupForm = this.fb.group({
        name: [''],
        lastName: [''],
        email: [''],
        password: [''],
        retypePassword: [''],
        gender: ['']
      })
  }

  onSubmit() {
    this.rest.addUser(this.signupForm.value).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      complete: () => console.log('done')
    });
    }
    // if the user was not found in the database
    // user is redirected to the homepage
    userNotFound() {
      this.notFound = 'Signup failed...';
      console.log(this.notFound);
  }

}

