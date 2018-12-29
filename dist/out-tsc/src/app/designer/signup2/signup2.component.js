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
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var Signup2Component = /** @class */ (function () {
    function Signup2Component(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.selectedFile = null;
    }
    Signup2Component.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    Signup2Component.prototype.onUpload = function (event) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type.substr(0, 5) !== 'image') {
            alert('The selected file is not an image');
        }
        else if (this.selectedFile.size > 2097152) {
            alert('The selected file is greater than 2MB');
        }
        else {
            alert('Please wait, your file is being uploaded');
            this.userService.sendFile(formData)
                .subscribe(function (response) {
                _this.reroute = '/designer/signup-3/' + _this.id;
                if (response) {
                    _this.router.navigate([_this.reroute]);
                }
                else {
                    _this.router.navigate([_this.reroute]);
                }
            });
        }
    };
    Signup2Component = __decorate([
        Component({
            selector: 'app-signup2',
            templateUrl: './signup2.component.html',
            styleUrls: ['./signup2.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            UserService])
    ], Signup2Component);
    return Signup2Component;
}());
export { Signup2Component };
//# sourceMappingURL=signup2.component.js.map