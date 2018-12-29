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
var Signup3Component = /** @class */ (function () {
    function Signup3Component(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.selectedFile = null;
        this.urls = new Array();
        this.filesToUpload = [];
    }
    Signup3Component.prototype.onFileSelected = function (event) {
        var _this = this;
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                if (file.size > 2097152) {
                    alert('The selected file is greater than 2MB, Please select another one');
                }
                else {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.urls.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
        if (event.target.files[0].size < 2097152) {
            this.filesToUpload.push(event.target.files[0]);
        }
    };
    Signup3Component.prototype.onUpload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append('image[]', files[i], files[i]['name']);
        }
        this.userService.sendGallery(formData)
            .subscribe(function (response) {
            _this.reroute = '/designer/' + _this.id;
            _this.router.navigate([_this.reroute]);
        });
    };
    Signup3Component = __decorate([
        Component({
            selector: 'app-signup3',
            templateUrl: './signup3.component.html',
            styleUrls: ['./signup3.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            UserService])
    ], Signup3Component);
    return Signup3Component;
}());
export { Signup3Component };
//# sourceMappingURL=signup3.component.js.map