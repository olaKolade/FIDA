import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  page_title: string = 'SPONSORS';
  constructor() { }

  ngOnInit() {
  }

}
