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
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../services/event.service';
var UserEventComponent = /** @class */ (function () {
    function UserEventComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.event = new Event;
    }
    UserEventComponent.prototype.ngOnInit = function () {
        this.showEvent();
    };
    UserEventComponent.prototype.showEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .showEvent({ id: id })
            .subscribe(function (response) {
            _this.event = response.event;
        });
    };
    UserEventComponent = __decorate([
        Component({
            selector: 'app-user-view',
            templateUrl: './user-view.component.html',
            styleUrls: ['./user-view.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EventService])
    ], UserEventComponent);
    return UserEventComponent;
}());
export { UserEventComponent };
//# sourceMappingURL=user-view.component.js.map