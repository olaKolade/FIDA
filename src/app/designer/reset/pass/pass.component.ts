import { Component } from '@angular/core';
import { User } from './../../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.get();
    console.log('here');
  }

    user = new User();
    display = false;
    returnedRes = false;
    returnedMess: string;
    returnedUser = new User();
    submitted = false;
    reroute: string;

    onSubmit() {
      this.submitted = true;
      this.edit();
    }

    get() {
      const id = +this.route.snapshot.queryParams.id;
      const reset_hash = String(this.route.snapshot.queryParams.reset_hash);
      // console.log(reset_hash);
      return this.userService
        .showUser({id: id})
        .subscribe(response => {
          if (response.success) {
            this.returnedUser = response['user'];
            if (reset_hash === this.returnedUser.reset) {
              console.log('here');
              this.display = true;
            } else {
              // show a div with token not correct
              this.returnedRes = true;
              this.returnedMess = 'Token not correct for ' + this.returnedUser.email;
            }
          } else {
            // show a div with, this user does not exist
            this.returnedRes = true;
            this.returnedMess = 'User with this ID does not exist';
          }
        });

    }

    edit() {
      this.returnedUser.password = this.user.password;
      this.userService
      .resetUserPass(this.returnedUser)
      .subscribe(
        response => {
          if (response.success) {
            this.router.navigate(['/designer/login']);
          } else {
            console.log('here');
          }
        }
      );
    }

}
