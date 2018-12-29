import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../services/user.service';


@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  page_title = 'DESIGNERS';

  public data: number;
  public loggedInValue: string;
  public loggedIn = false;

  public urls;

  public adminValue: string;
  public admin: boolean;

  user = new User;
  public id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.loggedInValue = sessionStorage.getItem('loggedInValue');
    if (this.loggedInValue === 'true') {
      this.loggedIn = true;
    } else {
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }

    this.adminValue = sessionStorage.getItem('admin');
    if (this.adminValue === 'true') {
      this.admin = true;
    }
  }

  ngOnInit() {
    this.showUser();
  }

    showUser() {
      this.userService
        .showUser({id: this.id})
        .subscribe(response => {
          if (response.success) {
            this.user = response['user'];
          } else {
            console.log(response.response);
          }
        /* while(_this.user.gallery.charAt(0) === '|')
            {
             _this.user.gallery = _this.user.gallery.substr(1);
           }
            if (_this.user.gallery.length >= 1){
            _this.urls  = _this.user.gallery.split("|");
            }
          */
        });

    }


}
