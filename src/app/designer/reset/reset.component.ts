import { Component } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ){}

    user = new User();
    returnedRes = true;
    returnedMess;
    returnedUser = new User();
    submitted = false;
    route: string;

    onSubmit() {
      alert('Please wait while we verify your email');
      this.submitted = true;
      this.get();
    }

    get() {
      this.user.password = '';
      return this.userService
        .getUser(this.user)
        .subscribe(response => {
          if (response.success) {
            console.log(response);
            this.returnedRes = response.success;
            this.returnedMess = `Verification Email sent to {{this.user.email}}.
            Please, click the link sent to you. Be sure to check your spam`;
          } else {
            console.log(response);
            this.returnedRes = response.success;
            this.returnedMess = response.response;
          }
        });

    }
}
