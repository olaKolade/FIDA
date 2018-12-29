import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-user-d',
  templateUrl: './user-d.component.html',
  styleUrls: ['./user-d.component.css']
})
export class UserDComponent implements OnInit {
  page_title = 'DESIGNERS';

  public data: number;
  public loggedInValue: string;
  public loggedIn = false;

  public urls;

  public adminValue: string;
  public admin: boolean;

  user = new User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.showUser();
  }

    showUser() {
      const id = +this.route.snapshot.paramMap.get('id');
      sessionStorage.setItem('id', String(id));
      sessionStorage.setItem('loggedInValue', 'true');

      this.data = +sessionStorage.getItem('id');
      this.loggedInValue = sessionStorage.getItem('loggedInValue');
      if (this.loggedInValue === 'true') {
        this.loggedIn = true;
      }

      this.adminValue = sessionStorage.getItem('admin');
      if (this.adminValue === 'true') {
        this.admin = true;
      }
      this.userService
        .showUser({id: id})
        .subscribe(response => {
          this.user = response;
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
