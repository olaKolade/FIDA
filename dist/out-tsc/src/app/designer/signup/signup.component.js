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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, _http) {
        this.router = router;
        this.userService = userService;
        this._http = _http;
        this.headers = new Headers;
        this.model = new User();
        this.success = false;
        this.returnedRes = true;
        this.returnedUser = new User();
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.add();
    };
    SignupComponent.prototype.add = function () {
        var _this = this;
        this.userService
            .addUser(this.model)
            .subscribe(function (response) {
            _this.route = '/designer/signup-2/' + response.id;
            if (response.success) {
                _this.router.navigate([_this.route]);
                sessionStorage.setItem('id', String(response.id));
                sessionStorage.setItem('loggedInValue', 'true');
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            UserService, Http])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map