import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model = new User();
    success = false;
    returnedRes = true;
    returnedMess;
    returnedUser = new User();
    submitted = false;
    route: string;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
 }

    onSubmit() {
      this.submitted = true;
      this.add();
    }

    add() {
      this.userService
        .addUser(this.model)
        .subscribe(response => {
          this.route = '/designer/signup-2/' + response.id;
          if (response.success) {
            this.router.navigate([this.route]);
            sessionStorage.setItem('id', String(response.id));
            sessionStorage.setItem('loggedInValue', 'true');
          } else {
            this.returnedRes = response.success;
            this.returnedMess = response.response;
          }
        });

    }
}
