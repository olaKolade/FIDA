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
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.page_title = 'DESIGNERS';
        this.loggedIn = false;
        this.user = new User;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        else {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
    }
    DesignerComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    DesignerComponent.prototype.showUser = function () {
        var _this = this;
        this.userService
            .showUser({ id: this.id })
            .subscribe(function (response) {
            if (response.success) {
                _this.user = response['user'];
            }
            else {
                console.log(response.response);
            }
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
    DesignerComponent = __decorate([
        Component({
            selector: 'app-designer',
            templateUrl: './designer.component.html',
            styleUrls: ['./designer.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], DesignerComponent);
    return DesignerComponent;
}());
export { DesignerComponent };
//# sourceMappingURL=designer.component.js.map