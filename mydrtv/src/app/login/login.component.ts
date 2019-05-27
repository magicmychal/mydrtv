import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../entities/users';

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

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      password: [''],
      gender: ['']
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.authService.loginForm(this.loginForm.value);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
}