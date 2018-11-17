import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  constructor(
    private router: Router,
    private userService: UserService
  ){}

    model = new User();
    success = false;


    submitted = false;
    route: string;

    onSubmit() {
      this.submitted = true;
      this.add();
    }

    add(){
      this.userService
        .addUser(this.model)
        .subscribe(response => {
          console.log(response);
          this.route = '/designer/' + response.id;
          {response.success ? this.router.navigate([this.route]) : console.log("User not added" )};
        })

    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}
