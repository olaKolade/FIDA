import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assets/img/logo.png';
  // title = 'International Designers Association';
  // abbr = 'IDA - ';
  public id: number;
  public loggedInValue: string;
  public loggedIn = false;

  constructor( private _router: Router){
    this.id = +sessionStorage.getItem('id');
    this.loggedInValue = sessionStorage.getItem('loggedInValue');
    if(this.loggedInValue === 'true'){
      this.loggedIn = true;
    }
  }

  ngOnInit(){

      this._router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
      };
      this._router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd){
          this._router.navigated = false;
          window.scrollTo(0,0);
        }
      });
  }
}
