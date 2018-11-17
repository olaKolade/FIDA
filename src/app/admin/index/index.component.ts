import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{

  constructor(
    private router: Router,
    private userService: UserService
  ){
    this.index();
  }


  users: Array<object>;

    index(){
      this.userService
        .index()
        .subscribe(response => {
          this.users = response;
        })
    }

    delete(id){
      console.log(id);
      this.userService
        .deleteUser({id: id})
        .subscribe(response => {
          if(response.success){
            console.log("it got here");
            this.router.navigate(['/admin']);
          }
        })
    }

}
