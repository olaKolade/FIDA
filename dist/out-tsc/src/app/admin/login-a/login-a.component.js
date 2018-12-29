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
import { User } from 'src/app/user';
import { Router } from '@angular/router';
var LoginAComponent = /** @class */ (function () {
    function LoginAComponent(router) {
        this.router = router;
        this.user = new User();
        this.returnedRes = false;
        this.returnedUser = new User();
        this.submitted = false;
    }
    LoginAComponent.prototype.ngOnInit = function () {
    };
    LoginAComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.user.email === 'admin') {
            if (this.user.password === '12FidaAdmin34') {
                sessionStorage.setItem('admin', 'true');
                this.router.navigate(['/admin/index']);
            }
            else {
                this.returnedRes = true;
                this.returnedMess = 'Invalid Password';
            }
        }
        else {
            this.returnedRes = true;
            this.returnedMess = 'Invalid Username';
        }
    };
    LoginAComponent = __decorate([
        Component({
            selector: 'app-login-a',
            templateUrl: './login-a.component.html',
            styleUrls: ['./login-a.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], LoginAComponent);
    return LoginAComponent;
}());
export { LoginAComponent };
//# sourceMappingURL=login-a.component.js.map