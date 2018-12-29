import { Component, OnInit } from '@angular/core';
import { Event } from './../../event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserEventComponent implements OnInit {
  event = new Event;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}


  ngOnInit() {
    this.showEvent();
  }

    showEvent() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.eventService
        .showEvent({id: id})
        .subscribe(response => {
          this.event = response.event;
        });
    }
}
