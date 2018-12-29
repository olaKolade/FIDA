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
import { Router } from '@angular/router';
import { NewsService } from './../../services/news.service';
var NewsIndexComponent = /** @class */ (function () {
    function NewsIndexComponent(router, newsService) {
        this.router = router;
        this.newsService = newsService;
        this.returnedRes = true;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
        this.index();
    }
    NewsIndexComponent.prototype.index = function () {
        var _this = this;
        this.newsService
            .indexNews()
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    NewsIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.newsService
            .deleteNews({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    NewsIndexComponent = __decorate([
        Component({
            selector: 'app-news-index',
            templateUrl: './news-index.component.html',
            styleUrls: ['./news-index.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            NewsService])
    ], NewsIndexComponent);
    return NewsIndexComponent;
}());
export { NewsIndexComponent };
//# sourceMappingURL=news-index.component.js.map