var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Subscriber } from './../subscriber';
import { NewsService } from './../services/news.service';
import { EventService } from './../services/event.service';
import { UserService } from './../services/user.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(newsService, eventService, userService) {
        this.newsService = newsService;
        this.eventService = eventService;
        this.userService = userService;
        this.myCarouselImages = ['./../../assets/img/clients/c1-1.png', './../../assets/img/clients/c1-2.png',
            './../../assets/img/clients/c1-3.png', './../../assets/img/clients/c1-4.png'];
        this.myCarouselOptions = { items: 4, dots: true, nav: true };
        this._sub = new Subscriber();
        this.indexNews();
        this.indexEvent();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.indexNews = function () {
        var _this = this;
        this.newsService.indexNews()
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    HomeComponent.prototype.indexEvent = function () {
        var _this = this;
        this.eventService.indexEvent()
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    HomeComponent.prototype.onSubscribe = function () {
        if (!this._sub.email) {
            alert('Email Field required');
        }
        else {
            this.userService.subs({
                email: this._sub.email,
                name: this._sub.name,
                title: this._sub.title,
                company: this._sub.company
            }).subscribe(function (response) {
                console.log(response);
                alert('thank you for subscribing');
            });
        }
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [NewsService, EventService, UserService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map