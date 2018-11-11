import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  page_title: string = 'SPONSORS';
  public img_url: string = "./../../assets/img/placeholders/358x244.jpg";
  constructor() { }

  ngOnInit() {
  }

}
