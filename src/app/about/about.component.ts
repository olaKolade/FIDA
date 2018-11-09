import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  page_title:string = 'OUR MISSIONS';
  constructor() { }

  ngOnInit() {
  }

}
