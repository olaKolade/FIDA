import { Component, OnInit } from '@angular/core';
import { User } from './../user';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  page_title: string = 'DESIGNERS';
  public img_url: string = "./../../assets/img/placeholders/358x244.jpg";

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


}
