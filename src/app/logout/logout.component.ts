import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {

    sessionStorage.removeItem('id');
    sessionStorage.removeItem('loggedInValue');
    sessionStorage.removeItem('admin');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();

    this.redirectTo('/home');
  }

  ngOnInit() {
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/about', {skipLocationChange: true}).then(() => this.router.navigate([uri]));
}
}
