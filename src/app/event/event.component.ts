import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  page_title: string = "EVENT";
  public img_url:string = "kjl.png";
  constructor() { }

  ngOnInit() {
  }

}
