import { Component, OnInit } from '@angular/core';

import { Event } from './../event';
import { EventService } from './../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  page_title = 'EVENT';

  public img_url = './../../assets/img/placeholders/358x244.jpg';
    constructor(private eventService: EventService) {
    this.index();
  }


  events: Array<object>;

    index() {
      this.eventService.indexEvent()
        .subscribe(response => {
          this.events = response;
        });
    }


}
