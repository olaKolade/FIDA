import { Component } from '@angular/core';
import { Event } from './../../event';

import { Router } from '@angular/router';

import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventAComponent {

  public adminValue: string;
  constructor(
    private router: Router,
    private eventService: EventService
  ) {
    this.adminValue = sessionStorage.getItem('admin');
    if (this.adminValue !== 'true') {
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
    this.index();
  }

  route: string;
  error = false;
  errMes: string;
  model = new Event();
  events: Array<Event>;

    index() {
      this.eventService
        .indexEvent()
        .subscribe(response => {
          this.events = response;
        });
    }

    delete(id) {
      this.eventService
        .deleteEvent({id: id})
        .subscribe(response => {
          if (response.success) {
            window.location.reload();
          } else {
            this.error = true;
            this.errMes = response.response;
          }
        });
    }

    onSubmit() {
      this.add();
    }

    add() {
      this.eventService
        .addEvent(this.model)
        .subscribe(response => {
          this.route = '/admin/event/';
          {response.success ? window.location.reload() : console.log('Event not added')};
        });

    }
}
