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
var UserService = /** @class */ (function () {
    function UserService(_http, httpClient) {
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
    UserService.prototype.indexUsers = function () {
        return this._http.post(this.server + 'indexUser', null, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.sendFile = function (formData) {
        var url = this.server + 'addUserPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    UserService.prototype.sendGallery = function (formData) {
        var url = this.server + 'addUserGallery';
        return this.httpClient.post(url, formData, { responseType: 'text' });
    };
    UserService.prototype.addUserPicture = function (info) {
        var data = info;
        return this._http.post(this.server + 'addUserPicture', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.showUser = function (info) {
        var data = info;
        return this._http.post(this.server + 'showUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (info) {
        var data = info;
        return this._http.post(this.server + 'getUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.resetUserPass = function (info) {
        var data = info;
        return this._http.post(this.server + 'reset', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.removePic = function (info) {
        var data = info;
        var url = this.server + 'removePic';
        return this.httpClient.post(url, data /*, {responseType: 'text'}*/);
    };
    UserService.prototype.subs = function (info) {
        var data = info;
        var url = this.server + 'subscribe';
        return this.httpClient.post(url, data /*, {responseType: 'text'}*/);
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http, HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map