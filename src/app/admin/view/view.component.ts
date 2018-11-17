import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
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

    delete(){
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.userService
        .deleteUser({id: id})
        .subscribe(response => {
          if(response.success){
            this.router.navigate(['/admin/index']);
          }


        })
    }

}
