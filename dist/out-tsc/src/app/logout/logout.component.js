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
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('loggedInValue');
        sessionStorage.removeItem('admin');
        // Remove all saved data from sessionStorage
        sessionStorage.clear();
        this.redirectTo('/home');
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.redirectTo = function (uri) {
        var _this = this;
        this.router.navigateByUrl('/about', { skipLocationChange: true }).then(function () { return _this.router.navigate([uri]); });
    };
    LogoutComponent = __decorate([
        Component({
            selector: 'app-logout',
            template: ''
        }),
        __metadata("design:paramtypes", [Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map