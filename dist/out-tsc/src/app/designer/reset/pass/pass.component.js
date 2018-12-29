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
import { User } from './../../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
var PassComponent = /** @class */ (function () {
    function PassComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new User();
        this.display = false;
        this.returnedRes = false;
        this.returnedUser = new User();
        this.submitted = false;
        this.get();
        console.log('here');
    }
    PassComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.edit();
    };
    PassComponent.prototype.get = function () {
        var _this = this;
        var id = +this.route.snapshot.queryParams.id;
        var reset_hash = String(this.route.snapshot.queryParams.reset_hash);
        // console.log(reset_hash);
        return this.userService
            .showUser({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.returnedUser = response['user'];
                if (reset_hash === _this.returnedUser.reset) {
                    console.log('here');
                    _this.display = true;
                }
                else {
                    // show a div with token not correct
                    _this.returnedRes = true;
                    _this.returnedMess = 'Token not correct for ' + _this.returnedUser.email;
                }
            }
            else {
                // show a div with, this user does not exist
                _this.returnedRes = true;
                _this.returnedMess = 'User with this ID does not exist';
            }
        });
    };
    PassComponent.prototype.edit = function () {
        var _this = this;
        this.returnedUser.password = this.user.password;
        this.userService
            .resetUserPass(this.returnedUser)
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/designer/login']);
            }
            else {
                console.log('here');
            }
        });
    };
    PassComponent = __decorate([
        Component({
            selector: 'app-pass',
            templateUrl: './pass.component.html',
            styleUrls: ['./pass.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], PassComponent);
    return PassComponent;
}());
export { PassComponent };
//# sourceMappingURL=pass.component.js.map