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
import { UserService } from './../../services/user.service';
var IndexComponent = /** @class */ (function () {
    function IndexComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
            console.log('yes admin');
        }
        else {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
        this.index();
    }
    IndexComponent.prototype.reload = function () {
        window.location.reload();
    };
    IndexComponent.prototype.index = function () {
        var _this = this;
        this.userService
            .indexUsers()
            .subscribe(function (response) {
            _this.users = response;
        });
    };
    IndexComponent.prototype.delete = function (id) {
        this.userService
            .deleteUser({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
            }
        });
    };
    IndexComponent = __decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            UserService])
    ], IndexComponent);
    return IndexComponent;
}());
export { IndexComponent };
//# sourceMappingURL=index.component.js.map