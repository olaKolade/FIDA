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
import { Event } from './../../event';
import { Router } from '@angular/router';
import { EventService } from './../../services/event.service';
var EventAComponent = /** @class */ (function () {
    function EventAComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.error = false;
        this.model = new Event();
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
        this.index();
    }
    EventAComponent.prototype.index = function () {
        var _this = this;
        this.eventService
            .indexEvent()
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    EventAComponent.prototype.delete = function (id) {
        var _this = this;
        this.eventService
            .deleteEvent({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
            }
            else {
                _this.error = true;
                _this.errMes = response.response;
            }
        });
    };
    EventAComponent.prototype.onSubmit = function () {
        this.add();
    };
    EventAComponent.prototype.add = function () {
        var _this = this;
        this.eventService
            .addEvent(this.model)
            .subscribe(function (response) {
            _this.route = '/admin/event/';
            {
                response.success ? window.location.reload() : console.log('Event not added');
            }
            ;
        });
    };
    EventAComponent = __decorate([
        Component({
            selector: 'app-event',
            templateUrl: './event.component.html',
            styleUrls: ['./event.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            EventService])
    ], EventAComponent);
    return EventAComponent;
}());
export { EventAComponent };
//# sourceMappingURL=event.component.js.map