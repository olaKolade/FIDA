import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  page_title: string = "VOLUNTEER";
  public img_url: string = "./../../assets/img/placeholders/358x244.jpg";
  constructor() { }

  ngOnInit() {
  }

}
