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
var ViewEventComponent = /** @class */ (function () {
    function ViewEventComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.event = new Event;
        this.selectedFile = null;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
    }
    ViewEventComponent.prototype.ngOnInit = function () {
        this.showEvent();
    };
    ViewEventComponent.prototype.showEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .showEvent({ id: id })
            .subscribe(function (response) {
            _this.event = response['event'];
        });
    };
    ViewEventComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .deleteEvent({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/event']);
            }
        });
    };
    ViewEventComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ViewEventComponent.prototype.onUpload = function (event) {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        console.log(this.selectedFile.name);
        this.eventService.sendFile(formData)
            .subscribe(function (response) {
            if (response) {
                window.location.reload();
            }
            else {
                window.location.reload();
            }
        });
    };
    ViewEventComponent = __decorate([
        Component({
            selector: 'app-view-event',
            templateUrl: './view-event.component.html',
            styleUrls: ['./view-event.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EventService])
    ], ViewEventComponent);
    return ViewEventComponent;
}());
export { ViewEventComponent };
//# sourceMappingURL=view-event.component.js.map