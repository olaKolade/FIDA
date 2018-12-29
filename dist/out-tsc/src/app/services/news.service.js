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
var NewsService = /** @class */ (function () {
    function NewsService(_http, httpClient) {
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
    NewsService.prototype.indexNews = function () {
        return this._http.post(this.server + 'indexNews', null, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.addNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.showNews = function (info) {
        var data = info;
        return this._http.post(this.server + 'showNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.getNews = function (info) {
        var data = info;
        return this._http.post(this.server + 'getNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.editNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.deleteNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.sendFile = function (formData) {
        var url = this.server + 'addNewsPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    NewsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http, HttpClient])
    ], NewsService);
    return NewsService;
}());
export { NewsService };
//# sourceMappingURL=news.service.js.map