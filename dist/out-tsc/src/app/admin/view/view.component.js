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
var ViewComponent = /** @class */ (function () {
    function ViewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new User;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    ViewComponent.prototype.showUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService
            .showUser({ id: id })
            .subscribe(function (response) {
            _this.user = response.user;
        });
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService
            .deleteUser({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/index']);
            }
        });
    };
    ViewComponent = __decorate([
        Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=view.component.js.map