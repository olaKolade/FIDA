import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user = new User;
  public adminValue: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.adminValue = sessionStorage.getItem('admin');
    if (this.adminValue !== 'true') {
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
  }


  ngOnInit() {
    this.showUser();
  }

    showUser() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService
        .showUser({id: id})
        .subscribe(response => {
          this.user = response.user;
        });
    }

    delete() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService
        .deleteUser({id: id})
        .subscribe(response => {
          if (response.success) {
            this.router.navigate(['/admin/index']);
          }
        });
    }

}
