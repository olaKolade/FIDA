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
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
var IndexDComponent = /** @class */ (function () {
    function IndexDComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.page_title = "DESIGNERS";
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.login = true;
        this.loggedIn = false;
        if (String(this.route.snapshot.queryParams.login) === '0') {
            this.login = false;
        }
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.index();
    }
    IndexDComponent.prototype.index = function () {
        var _this = this;
        this.userService.indexUsers()
            .subscribe(function (response) {
            _this.users = response;
        });
    };
    IndexDComponent.prototype.ngOnInit = function () {
    };
    IndexDComponent = __decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], IndexDComponent);
    return IndexDComponent;
}());
export { IndexDComponent };
//# sourceMappingURL=index.component.js.map