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
import { User } from './../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
var UserDComponent = /** @class */ (function () {
    function UserDComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.page_title = 'DESIGNERS';
        this.loggedIn = false;
        this.user = new User;
    }
    UserDComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    UserDComponent.prototype.showUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        sessionStorage.setItem('id', String(id));
        sessionStorage.setItem('loggedInValue', 'true');
        this.data = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.userService
            .showUser({ id: id })
            .subscribe(function (response) {
            _this.user = response;
            /* while(_this.user.gallery.charAt(0) === '|')
                {
                 _this.user.gallery = _this.user.gallery.substr(1);
               }
                if (_this.user.gallery.length >= 1){
                _this.urls  = _this.user.gallery.split("|");
                }
              */
        });
    };
    UserDComponent = __decorate([
        Component({
            selector: 'app-user-d',
            templateUrl: './user-d.component.html',
            styleUrls: ['./user-d.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], UserDComponent);
    return UserDComponent;
}());
export { UserDComponent };
//# sourceMappingURL=user-d.component.js.map