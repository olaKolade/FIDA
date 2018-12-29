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
import { News } from './../../news';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from './../../services/news.service';
var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(route, router, newsService) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.news = new News;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        this.showNews();
    };
    UserViewComponent.prototype.showNews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .showNews({ id: id })
            .subscribe(function (response) {
            _this.news = response.news;
        });
    };
    UserViewComponent = __decorate([
        Component({
            selector: 'app-user-view',
            templateUrl: './user-view.component.html',
            styleUrls: ['./user-view.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            NewsService])
    ], UserViewComponent);
    return UserViewComponent;
}());
export { UserViewComponent };
//# sourceMappingURL=user-view.component.js.map