import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexDComponent implements OnInit {
  page_title = 'DESIGNERS';
  public img_url = './../../assets/img/placeholders/358x244.jpg';

  public id: number;
  public loggedInValue: string;
  public login = true;
  public loggedIn = false;
  public adminValue: string;
  public admin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
      if (String(this.route.snapshot.queryParams.login) === '0') {
        this.login = false;
      }
      this.id = +sessionStorage.getItem('id');
      this.loggedInValue = sessionStorage.getItem('loggedInValue');
      if (this.loggedInValue === 'true') {
        this.loggedIn = true;
      }

      this.adminValue = sessionStorage.getItem('admin');
      if (this.adminValue === 'true') {
        this.admin = true;
      }

    this.index();

  }


  users: Array<User>;

    index() {
      this.userService.indexUsers()
        .subscribe(response => {
          this.users = response;
        });
    }

  ngOnInit() {
  }

}
