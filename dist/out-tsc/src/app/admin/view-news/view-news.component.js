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
var ViewNewsComponent = /** @class */ (function () {
    function ViewNewsComponent(route, router, newsService) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.news = new News;
        this.selectedFile = null;
        this.returnedRes = true;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
    }
    ViewNewsComponent.prototype.ngOnInit = function () {
        this.showNews();
    };
    ViewNewsComponent.prototype.showNews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .showNews({ id: id })
            .subscribe(function (response) {
            _this.news = response['news'];
        });
    };
    ViewNewsComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .deleteNews({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/newsIndex']);
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    ViewNewsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ViewNewsComponent.prototype.onUpload = function (event) {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        console.log(this.selectedFile.name);
        this.newsService.sendFile(formData)
            .subscribe(function (response) {
            if (response) {
                window.location.reload();
            }
            else {
                window.location.reload();
            }
        });
    };
    ViewNewsComponent = __decorate([
        Component({
            selector: 'app-view-news',
            templateUrl: './view-news.component.html',
            styleUrls: ['./view-news.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            NewsService])
    ], ViewNewsComponent);
    return ViewNewsComponent;
}());
export { ViewNewsComponent };
//# sourceMappingURL=view-news.component.js.map