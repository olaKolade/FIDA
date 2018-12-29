import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

    user = new User();
    returnedRes = true;
    returnedMess;
    returnedUser = new User();
    submitted = false;
    route: string;

    onSubmit() {
      this.submitted = true;
      if (this.user.email === 'admin') {
        sessionStorage.setItem('admin', 'true');
        this.router.navigate(['/admin/index']);
      } else {
        this.get();
      }
    }

    get() {
      return this.userService
        .getUser(this.user)
        .subscribe(response => {
          if (response.success) {
            this.returnedUser = response.user[0];
            sessionStorage.setItem('id', String(this.returnedUser.id));
            sessionStorage.setItem('loggedInValue', 'true');
            this.route = '/designer/' + this.returnedUser.id;
            this.router.navigate([this.route]);
          } else {
            this.returnedRes = response.success;
            this.returnedMess = response.response;
          }
        });

    }
}
