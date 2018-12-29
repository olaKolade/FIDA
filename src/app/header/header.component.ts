import { Component, OnInit } from '@angular/core';
// import { OwlModule } from 'ngx-owl-carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    mySlideOptions = {items: 1, dots: false, nav: true};
  constructor() { }

  ngOnInit() {
  }

}
