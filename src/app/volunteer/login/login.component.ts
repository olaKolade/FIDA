import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    private router: Router,
    private userService: UserService
  ){}

    user = new User();
    returnedUser = new User();
    //success = false;


    submitted = false;
    route: string;

    onSubmit() {
      this.submitted = true;
      if(this.user.email==='admin'){
        this.router.navigate(['/admin/index']);
      } else {
        this.get();
      }
    }

    get(){
      return this.userService
        .getUser(this.user)
        .subscribe(response => {
          console.log(response);
            console.log(response.success);
          this.returnedUser = response.user[0];
          if(response.success){
            this.route = '/designer/' + this.returnedUser.id;
            this.router.navigate([this.route]);
          }else{
            console.log(response.success);
          }
        });

    }
}
