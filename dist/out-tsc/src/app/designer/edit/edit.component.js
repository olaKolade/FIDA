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
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new User;
        this.selectedFile = null;
        this.returnedUser = new User();
        this.urls = new Array();
        this.filesToUpload = [];
        this.id = +this.route.snapshot.paramMap.get('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue !== 'true') {
            this.router.navigate(['/designer'], { queryParams: { login: 0 } });
        }
    }
    EditComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    EditComponent.prototype.showUser = function () {
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
            /*while(_this.user.gallery.charAt(0) === '|')
               {
                _this.user.gallery = _this.user.gallery.substr(1);
               }
               if (_this.user.gallery.length >= 1){
               _this.urlsU  = _this.user.gallery.split("|");
               }
               */
        });
    };
    EditComponent.prototype.onSubmit = function () {
        this.editUser();
    };
    EditComponent.prototype.editUser = function () {
        var _this = this;
        this.userService
            .editUser(this.user)
            .subscribe(function (response) {
            if (response.success) {
                _this.returnedUser = response.user;
                _this.reroute = '/designer/' + _this.returnedUser.id;
                _this.router.navigate([_this.reroute]);
            }
        });
    };
    EditComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    EditComponent.prototype.onUpload = function (event) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        this.userService.sendFile(formData)
            .subscribe(function (response) {
            _this.reroute = '/designer/' + _this.id;
            if (response) {
                _this.router.navigate([_this.reroute]);
            }
            else {
                console.log('User not added');
            }
        });
    };
    EditComponent.prototype.removePic = function (data) {
        this.userService.removePic({ picture: data })
            .subscribe(function (response) {
            window.location.reload();
        });
    };
    EditComponent.prototype.onGallerySelected = function (event) {
        var _this = this;
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        this.filesToUpload.push(event.target.files[0]);
    };
    EditComponent.prototype.onUploadG = function () {
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
    EditComponent = __decorate([
        Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map