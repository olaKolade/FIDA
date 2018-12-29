var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
var EventService = /** @class */ (function () {
    function EventService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        // Local LARAVEL server
        // server = 'http://babawandemovies.com/back/';
        this.server = 'http://localhost:8000/';
        this.headers = new Headers;
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new RequestOptions({ headers: this.headers });
    }
    EventService.prototype.indexEvent = function () {
        return this._http.post(this.server + 'indexEvent', null, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.addEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.showEvent = function (info) {
        var data = info;
        return this._http.post(this.server + 'showEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.getEvent = function (info) {
        var data = info;
        return this._http.post(this.server + 'getEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.editEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.deleteEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.sendFile = function (formData) {
        var url = this.server + 'addEventPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    EventService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http, HttpClient])
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=event.service.js.map