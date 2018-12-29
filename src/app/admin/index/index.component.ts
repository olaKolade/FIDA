import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  users: Array<object>;
  public adminValue: string;
  public admin: boolean;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.adminValue = sessionStorage.getItem('admin');
    if (this.adminValue === 'true') {
      this.admin = true;
      console.log('yes admin');
    } else {
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
    this.index();
  }

  reload() {
    window.location.reload();
  }

  index() {
    this.userService
      .indexUsers()
      .subscribe(response => {
        this.users = response;
      });
  }

  delete(id) {
    this.userService
      .deleteUser({id: id})
      .subscribe(response => {
        if (response.success) {
            window.location.reload();
        }
      });
  }

}
