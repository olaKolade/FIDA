import { Component, OnInit } from '@angular/core';
import { Subscriber } from './../subscriber';
import { News } from './../news';
import { NewsService } from './../services/news.service';
import { Event } from './../event';
import { EventService } from './../services/event.service';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myCarouselImages = ['./../../assets/img/clients/c1-1.png', './../../assets/img/clients/c1-2.png',
                     './../../assets/img/clients/c1-3.png', './../../assets/img/clients/c1-4.png'];
  myCarouselOptions = {items: 4, dots: true, nav: true};

  _sub = new Subscriber();
  news: Array<News>;
  events: Array<Event>;

  constructor(private newsService: NewsService, private eventService: EventService, private userService: UserService) {

    this.indexNews();
    this.indexEvent();
  }

  ngOnInit() {
  }
  indexNews() {
    this.newsService.indexNews()
      .subscribe(response => {
        this.news = response;
      });
  }

  indexEvent() {
    this.eventService.indexEvent()
      .subscribe(response => {
        this.events = response;
      });
  }

  onSubscribe() {
    if (!this._sub.email) {
      alert('Email Field required');
    } else {
      this.userService.subs({
        email: this._sub.email,
        name: this._sub.name,
        title: this._sub.title,
        company: this._sub.company
      }).subscribe(response => {
          console.log(response);
          alert('thank you for subscribing');
        });
    }
  }
}
