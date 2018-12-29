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
import { Router } from '@angular/router';
import { NewsService } from './../../services/news.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var AddNewsComponent = /** @class */ (function () {
    function AddNewsComponent(router, newsService) {
        this.router = router;
        this.newsService = newsService;
        this.news = new News();
        this.success = false;
        this.error = false;
        this.submitted = false;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
    }
    AddNewsComponent.prototype.ngOnInit = function () {
    };
    AddNewsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.add();
    };
    AddNewsComponent.prototype.add = function () {
        var _this = this;
        this.newsService
            .addNews(this.news)
            .subscribe(function (response) {
            _this.route = '/admin/viewNews/' + response.id;
            if (response.success) {
                _this.router.navigate([_this.route]);
            }
            else {
                _this.error = true;
                _this.resMes = response.response;
            }
        });
    };
    AddNewsComponent = __decorate([
        Component({
            selector: 'app-add-news',
            templateUrl: './add-news.component.html',
            styleUrls: ['./add-news.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            NewsService])
    ], AddNewsComponent);
    return AddNewsComponent;
}());
export { AddNewsComponent };
//# sourceMappingURL=add-news.component.js.map