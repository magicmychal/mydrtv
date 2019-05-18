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

  submitted = false;

  constructor(public rest: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router)
  {}

  ngOnInit() {
    this.signupForm = this.fb.group({
        name: ['', Validators.required],
        lastName: ['',  Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        gender: ['M']
      })
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {

        return;
    }

    this.rest.addUser(this.signupForm.value).subscribe({
      next: x => this.selectedUser = x,
      error: err => this.userNotFound(),
      // TO DO: change it to login, when we have the page
      complete: () => this.router.navigate(['/'])
    });
    }
    // if the user was not found in the database
    // user is redirected to the homepage
    userNotFound() {
      this.notFound = 'Signup failed...';
      console.log(this.notFound);
  }

}


