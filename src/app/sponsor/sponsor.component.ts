import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  myCarouselImages =["./../../assets/img/clients/c1-1.png", "./../../assets/img/clients/c1-2.png",
                     "./../../assets/img/clients/c1-3.png", "./../../assets/img/clients/c1-4.png",
                     "./../../assets/img/clients/c1-5.png", "./../../assets/img/clients/c1-6.png",
                     "./../../assets/img/clients/c1-3.png"];
  myCarouselOptions={items: 7, dots: true, nav: true};

  page_title: string = 'SPONSORS';
  constructor() {  }

  ngOnInit() {
  }

}
