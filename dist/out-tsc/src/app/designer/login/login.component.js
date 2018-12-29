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
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new User();
        this.returnedRes = true;
        this.returnedUser = new User();
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.user.email === 'admin') {
            sessionStorage.setItem('admin', 'true');
            this.router.navigate(['/admin/index']);
        }
        else {
            this.get();
        }
    };
    LoginComponent.prototype.get = function () {
        var _this = this;
        return this.userService
            .getUser(this.user)
            .subscribe(function (response) {
            if (response.success) {
                _this.returnedUser = response.user[0];
                sessionStorage.setItem('id', String(_this.returnedUser.id));
                sessionStorage.setItem('loggedInValue', 'true');
                _this.route = '/designer/' + _this.returnedUser.id;
                _this.router.navigate([_this.route]);
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map