import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user= new User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ){
  }

  ngOnInit(){
    this.showUser();
  }

  showUser(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService
      .showUser({id: id})
      .subscribe(response => {
        console.log(response);
        this.user = response;
      })
  }


        onSubmit(){
          this.editUser();
        }

        editUser(){
          this.userService
            .editUser(this.user)
            .subscribe(response => {
              console.log(response);
            })
        }


}
