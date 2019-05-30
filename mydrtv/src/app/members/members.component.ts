import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  private users;
  notFound: string;
  userName: string = '';
  userEmail: string = '';

  constructor(
    public rest: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.rest.getUsers().subscribe({
      next: x => {this.users = x, this.userName = x.Name, this.userEmail = x.userEmail},
      error: err => this.userNotFound(),
      complete: () => console.log('done')
    });
  }
  userNotFound() {
    this.notFound = 'User not found. You will be redirected to the main page in a moment...';
  }
}
