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
var ResetComponent = /** @class */ (function () {
    function ResetComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new User();
        this.returnedRes = true;
        this.returnedUser = new User();
        this.submitted = false;
    }
    ResetComponent.prototype.onSubmit = function () {
        alert('Please wait while we verify your email');
        this.submitted = true;
        this.get();
    };
    ResetComponent.prototype.get = function () {
        var _this = this;
        this.user.password = '';
        return this.userService
            .getUser(this.user)
            .subscribe(function (response) {
            if (response.success) {
                console.log(response);
                _this.returnedRes = response.success;
                _this.returnedMess = "Verification Email sent to {{this.user.email}}.\n            Please, click the link sent to you. Be sure to check your spam";
            }
            else {
                console.log(response);
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    ResetComponent = __decorate([
        Component({
            selector: 'app-reset',
            templateUrl: './reset.component.html',
            styleUrls: ['./reset.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            UserService])
    ], ResetComponent);
    return ResetComponent;
}());
export { ResetComponent };
//# sourceMappingURL=reset.component.js.map