import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  page_title = 'NEWS AND EVENTS';
  public img_url: string = "./../../assets/img/placeholders/358x244.jpg";
  constructor() {
  }

  ngOnInit() {
  }

}
