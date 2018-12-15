(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n\n    <div class=\"\" *ngIf=\"loggedIn\">\n      <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n    </div>\n    <div class=\"\" *ngIf=\"admin\">\n      <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n    </div>\n\n            <div class=\"block-heading-two\">\n              <h3><span>{{page_title}}</span></h3>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-4 col-sm-6\">\n                <p>is to provide designers to express their beliefs in what other designers make</p>\n                <p>Their belief and values are translated into their product, and our mission is to empower every designer\n                and every organization to achieve their goal.</p>\n\n                <p>Our ideals is to promote and increase designer's level of success and focus on the customer experience\n                and providing the highest levels of customer service.</p>\n                <br />\n              </div>\n              <div class=\"col-md-4 col-sm-6\">\n                <h5>The bridge between design and business</h5>\n                <p>Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit consectetur euismod ed  euismod  adipiscing elit sapien. Donec eu feugiat enim,  tempus arcu. </p>\n                <h6>Graphic Designing</h6>\n                <div class=\"progress pb-sm\">\n                  <!-- White color (progress-bar-white) -->\n                  <div class=\"progress-bar progress-bar-red\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                   <span class=\"sr-only\">40% Complete (success)</span>\n                  </div>\n                </div>\n                <h6>Photography</h6>\n                <div class=\"progress pb-sm\">\n                  <div class=\"progress-bar progress-bar-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                   <span class=\"sr-only\">40% Complete (success)</span>\n                  </div>\n                </div>\n                <h6>Money Making</h6>\n                <div class=\"progress pb-sm\">\n                  <div class=\"progress-bar progress-bar-lblue\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n                   <span class=\"sr-only\">40% Complete (success)</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-4 col-sm-6\">\n                <h6>CONTACT US</h6>\n                <div class=\"text-center\">\n                  <img src=\"./../../assets/img/rev-slider/mockup1.png\" alt=\"\" class=\"img-responsive\" />\n                </div>\n                <br>\n                <label for=\"Email\">Email:</label>\n                123456@gmail.com\n  <br />\n              </div>\n            </div>\n\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.page_title = 'Our Mission';
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-news/add-news.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/add-news/add-news.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQixDQUFDLFdBQVc7Q0FDNUM7O0FBRUQ7RUFDRSwrQkFBK0IsQ0FBQyxTQUFTO0NBQzFDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/add-news/add-news.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/add-news/add-news.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div>\n        <div class=\"row float-right\">\n          <a class=\"btn btn-secondary\" routerLink=\"/admin/newsIndex\">Go Back</a>\n        </div>\n        <div class=\"row\">\n          <p></p>\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\n          {{resMes}}\n        </div>\n      <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #signup=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Title:</label>\n          <input type=\"text\" class=\"form-control\"\n          [(ngModel)]=\"news.title\" name=\"title\" id=\"title\"  #title=\"ngModel\"/> <br />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"about\">News Body:</label>\n          <textarea name=\"body\" class=\"form-control\" rows=\"8\" cols=\"50\" [(ngModel)]=\"news.body\" name=\"body\" required></textarea> <br />\n        </div>\n        <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!signup.form.valid\">Add News</button>\n      </form>\n    </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/add-news/add-news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-news/add-news.component.ts ***!
  \******************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../news */ "./src/app/news.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddNewsComponent = /** @class */ (function () {
    function AddNewsComponent(router, newsService, _http) {
        this.router = router;
        this.newsService = newsService;
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"];
        this.news = new _news__WEBPACK_IMPORTED_MODULE_1__["News"]();
        this.success = false;
        this.error = false;
        this.submitted = false;
    }
    AddNewsComponent.prototype.ngOnInit = function () {
    };
    AddNewsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.add();
    };
    AddNewsComponent.prototype.add = function () {
        var _this = this;
        this.newsService
            .addNews(this.news)
            .subscribe(function (response) {
            _this.route = '/admin/viewNews/' + response.id;
            if (response.success) {
                _this.router.navigate([_this.route]);
            }
            else {
                _this.error = true;
                _this.resMes = response.response;
            }
        });
    };
    AddNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-news',
            template: __webpack_require__(/*! ./add-news.component.html */ "./src/app/admin/add-news/add-news.component.html"),
            styles: [__webpack_require__(/*! ./add-news.component.css */ "./src/app/admin/add-news/add-news.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], AddNewsComponent);
    return AddNewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/calend/calend.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/calend/calend.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NhbGVuZC9jYWxlbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/calend/calend.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/calend/calend.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"blog-two\">\n    <div class=\"row\">\n\n      <!-- Sidebar column -->\n      <div class=\"col-md-2\">\n        <!-- Sidebar -->\n        <div class=\"sidebar\">\n          <!-- Categories Widget -->\n          <div class=\"s-widget\">\n            <!-- Heading -->\n            <h5><i class=\"fa fa-folder color\"></i>&nbsp; Categories</h5>\n            <!-- Widgets Content -->\n            <div class=\"widget-content categories\">\n              <ul class=\"list-6\">\n                <li><a routerLink=\"/admin/index\">Users</a></li>\n                <li><a routerLink=\"/admin/newsIndex\">News</a></li>\n                <li><a routerLink=\"/admin/event\">Events</a></li>\n                <li><a routerLink=\"/admin/calendar\">Calendar</a></li>\n                <li><a routerLink=\"/logout\">Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Mainbar column -->\n      <div class=\"col-md-10\">\n        <app-calend></app-calend>\n      </div>\n</div>\n</div>\n</main>\n"

/***/ }),

/***/ "./src/app/admin/calend/calend.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/calend/calend.component.ts ***!
  \**************************************************/
/*! exports provided: CalendAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendAComponent", function() { return CalendAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendAComponent = /** @class */ (function () {
    function CalendAComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    CalendAComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CalendAComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendAComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendAComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendAComponent.prototype, "modalContent", void 0);
    CalendAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./calend.component.html */ "./src/app/admin/calend/calend.component.html"),
            styles: [__webpack_require__(/*! ./calend.component.css */ "./src/app/admin/calend/calend.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CalendAComponent);
    return CalendAComponent;
}());



/***/ }),

/***/ "./src/app/admin/event/event.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/event/event.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/event/event.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/event/event.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"blog-two\">\n    <div class=\"row\">\n\n      <!-- Sidebar column -->\n      <div class=\"col-md-2\">\n        <!-- Sidebar -->\n        <div class=\"sidebar\">\n          <!-- Categories Widget -->\n          <div class=\"s-widget\">\n            <!-- Heading -->\n            <h5><i class=\"fa fa-folder color\"></i>&nbsp; Categories</h5>\n            <!-- Widgets Content -->\n            <div class=\"widget-content categories\">\n              <ul class=\"list-6\">\n                <li><a routerLink=\"/admin/index\">Users</a></li>\n                <li><a routerLink=\"/admin/newsIndex\">News</a></li>\n                <li><a routerLink=\"/admin/event\">Events</a></li>\n                <li><a routerLink=\"/admin/calendar\">Calendar</a></li>\n                <li><a routerLink=\"/logout\">Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Mainbar column -->\n      <div class=\"col-md-10\">\n        <a routerLink=\"#add\" class=\"btn btn-success\">+ Event</a>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-sm\">\n            <caption>List of Event</caption>\n            <thead class=\"thead-light\">\n              <th scope=\"col\">S/N</th>\n              <th scope=\"col\">Topic</th>\n              <th scope=\"col\">Body</th>\n              <th scope=\"col\">View</th>\n              <th scope=\"col\">Delete</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let event of events; let i=index\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{event.title}}</td>\n                <td>{{event.body}}</td>\n                <td><a routerLink=\"/admin/viewEvent/{{event.id}}\" class=\"btn btn-sm btn-dark\">View</a></td>\n                <td class=\"table-danger\"><button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"delete(event.id)\">Delete</button></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #signup=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Title:</label>\n            <input type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"model.title\" name=\"title\" id=\"title\"  #title=\"ngModel\"/> <br />\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"about\">Event Body:</label>\n            <textarea name=\"body\" class=\"form-control\" rows=\"8\" cols=\"50\" [(ngModel)]=\"model.body\" name=\"body\" required></textarea> <br />\n          </div>\n          <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!signup.form.valid\">Add Event</button>\n        </form>\n\n      </div>\n</div>\n</div>\n</main>\n"

/***/ }),

/***/ "./src/app/admin/event/event.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/event/event.component.ts ***!
  \************************************************/
/*! exports provided: EventAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAComponent", function() { return EventAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../event */ "./src/app/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventAComponent = /** @class */ (function () {
    function EventAComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.error = false;
        this.model = new _event__WEBPACK_IMPORTED_MODULE_1__["Event"]();
        this.index();
    }
    EventAComponent.prototype.index = function () {
        var _this = this;
        this.eventService
            .indexEvent()
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    EventAComponent.prototype.delete = function (id) {
        var _this = this;
        this.eventService
            .deleteEvent({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
                _this;
            }
            else {
                _this.error = true;
                _this.errMes = response.response;
            }
        });
    };
    EventAComponent.prototype.onSubmit = function () {
        this.add();
    };
    EventAComponent.prototype.add = function () {
        var _this = this;
        this.eventService
            .addEvent(this.model)
            .subscribe(function (response) {
            _this.route = '/admin/event/';
            {
                response.success ? window.location.reload() : console.log("Event not added");
            }
            ;
        });
    };
    EventAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/admin/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/admin/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventAComponent);
    return EventAComponent;
}());



/***/ }),

/***/ "./src/app/admin/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"blog-two\">\n    <div class=\"row\">\n\n      <!-- Sidebar column -->\n      <div class=\"col-md-2\">\n        <!-- Sidebar -->\n        <div class=\"sidebar\">\n          <!-- Categories Widget -->\n          <div class=\"s-widget\">\n            <!-- Heading -->\n            <h5><i class=\"fa fa-folder color\"></i>&nbsp; Categories</h5>\n            <!-- Widgets Content -->\n            <div class=\"widget-content categories\">\n              <ul class=\"list-6\">\n                <li><a routerLink=\"/admin/index\">Users</a></li>\n                <li><a routerLink=\"/admin/newsIndex\">News</a></li>\n                <li><a routerLink=\"/admin/event\">Events</a></li>\n                <li><a routerLink=\"/admin/calendar\">Calendar</a></li>\n                <li><a routerLink=\"/logout\">Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Mainbar column -->\n      <div class=\"col-md-10\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-sm\">\n            <caption>List of Users</caption>\n            <thead class=\"thead-light\">\n              <th scope=\"col\">S/N</th>\n              <th scope=\"col\">Full Name</th>\n              <th scope=\"col\">Email</th>\n              <th scope=\"col\">Age</th>\n              <th scope=\"col\">About</th>\n              <th scope=\"col\">View</th>\n              <th scope=\"col\">Delete</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let i=index\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{user.name}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.age}}</td>\n                <td>{{user.about}}</td>\n                <td><a routerLink=\"/admin/view/{{user.id}}\" class=\"btn btn-sm btn-dark\">View</a></td>\n                <td class=\"table-danger\"><button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"delete(user.id)\">Delete</button></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"btn-group-vertical btn-block\">\n        <!-- <a routerLink=\"/admin/event\" class=\"btn btn-secondary btn-block\">Events</a> -->\n      </div>\n    </div>\n    <div class=\"col-md-10\">\n\n    </div>\n  </div>\n</div>\n</div>\n</main>\n"

/***/ }),

/***/ "./src/app/admin/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        sessionStorage.setItem('admin', 'true');
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.index();
        //this.reload();
    }
    IndexComponent.prototype.reload = function () {
        window.location.reload();
    };
    IndexComponent.prototype.index = function () {
        var _this = this;
        this.userService
            .indexUsers()
            .subscribe(function (response) {
            _this.users = response;
        });
    };
    IndexComponent.prototype.delete = function (id) {
        this.userService
            .deleteUser({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
            }
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/admin/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/news-index/news-index.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/news-index/news-index.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ld3MtaW5kZXgvbmV3cy1pbmRleC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/news-index/news-index.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/news-index/news-index.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"blog-two\">\n    <div class=\"row\">\n\n      <!-- Sidebar column -->\n      <div class=\"col-md-2\">\n        <!-- Sidebar -->\n        <div class=\"sidebar\">\n          <!-- Categories Widget -->\n          <div class=\"s-widget\">\n            <!-- Heading -->\n            <h5><i class=\"fa fa-folder color\"></i>&nbsp; Categories</h5>\n            <!-- Widgets Content -->\n            <div class=\"widget-content categories\">\n              <ul class=\"list-6\">\n                <li><a routerLink=\"/admin/index\">Users</a></li>\n                <li><a routerLink=\"/admin/newsIndex\">News</a></li>\n                <li><a routerLink=\"/admin/event\">Events</a></li>\n                <li><a routerLink=\"/admin/calendar\">Calendar</a></li>\n                <li><a routerLink=\"/logout\">Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Mainbar column -->\n      <div class=\"col-md-10\">\n        <div *ngIf=\"!returnedRes\" class=\"alert alert-warning\">\n          <p>{{returnedMess}}</p>\n        </div>\n        <a routerLink=\"/admin/addNews\" class=\"btn btn-success\">+ News</a>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-sm\">\n            <caption>List of News</caption>\n            <thead class=\"thead-light\">\n              <th scope=\"col\">S/N</th>\n              <th scope=\"col\">Topic</th>\n              <th scope=\"col\">Body</th>\n              <th scope=\"col\">View</th>\n              <th scope=\"col\">Delete</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let news of news; let i=index\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{news.title}}</td>\n                <td>{{news.body}}</td>\n                <td><a routerLink=\"/admin/viewNews/{{news.id}}\" class=\"btn btn-sm btn-dark\">View</a></td>\n                <td class=\"table-danger\"><button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"delete(news.id)\">Delete</button></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n</div>\n</div>\n</main>\n"

/***/ }),

/***/ "./src/app/admin/news-index/news-index.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/news-index/news-index.component.ts ***!
  \**********************************************************/
/*! exports provided: NewsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsIndexComponent", function() { return NewsIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsIndexComponent = /** @class */ (function () {
    function NewsIndexComponent(router, newsService) {
        this.router = router;
        this.newsService = newsService;
        this.returnedRes = true;
        this.index();
    }
    NewsIndexComponent.prototype.index = function () {
        var _this = this;
        this.newsService
            .indexNews()
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    NewsIndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.newsService
            .deleteNews({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                window.location.reload();
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    NewsIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-index',
            template: __webpack_require__(/*! ./news-index.component.html */ "./src/app/admin/news-index/news-index.component.html"),
            styles: [__webpack_require__(/*! ./news-index.component.css */ "./src/app/admin/news-index/news-index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsIndexComponent);
    return NewsIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-event/view-event.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/view-event/view-event.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXctZXZlbnQvdmlldy1ldmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/view-event/view-event.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/view-event/view-event.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"event.title\">\n          <div class=\"row\">\n            <img src=\"./../../uploads/event/{{event.image}}\" alt=\"\">\n          </div>\n          <label for=\"title\" class=\"form-label\">Title:</label> <h3>{{event.title}}</h3> <br />\n\n          <br />\n\n          <label for=\"body\" class=\"form-label\">Body: <br> </label> {{event.body}}<br />\n          <form  #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n                Add Picture <input type=\"file\" name=\"file\" hidden (change)=\"onFileSelected($event)\">\n            </label>\n            </span>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUpload()\">Upload</button>\n          </form>\n          <a routerLink=\"/admin/event\" class=\"btn btn-lg btn-success\">Go Back</a>\n          <button type=\"button\"  class=\"btn btn-lg btn-danger\" (click)=\"delete()\">Delete News</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/view-event/view-event.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/view-event/view-event.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventComponent", function() { return ViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../event */ "./src/app/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewEventComponent = /** @class */ (function () {
    function ViewEventComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.event = new _event__WEBPACK_IMPORTED_MODULE_1__["Event"];
        this.selectedFile = null;
    }
    ViewEventComponent.prototype.ngOnInit = function () {
        this.showEvent();
    };
    ViewEventComponent.prototype.showEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .showEvent({ id: id })
            .subscribe(function (response) {
            _this.event = response['event'];
        });
    };
    ViewEventComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .deleteEvent({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/event']);
            }
        });
    };
    ViewEventComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ViewEventComponent.prototype.onUpload = function (event) {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        console.log(this.selectedFile.name);
        this.eventService.sendFile(formData)
            .subscribe(function (response) {
            if (response) {
                window.location.reload();
            }
            else {
                window.location.reload();
            }
        });
    };
    ViewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-event',
            template: __webpack_require__(/*! ./view-event.component.html */ "./src/app/admin/view-event/view-event.component.html"),
            styles: [__webpack_require__(/*! ./view-event.component.css */ "./src/app/admin/view-event/view-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], ViewEventComponent);
    return ViewEventComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-news/view-news.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/view-news/view-news.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXctbmV3cy92aWV3LW5ld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/view-news/view-news.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/view-news/view-news.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"news.title\">\n          <div class=\"row\">\n            <img src=\"./../../uploads/news/{{news.image}}\" alt=\"\">\n          </div>\n          <div *ngIf=\"!returnedRes\" class=\"alert alert-warning\">\n            <p>{{returnedMess}}</p>\n          </div>\n          <label for=\"title\" class=\"form-label\">Title:</label> <h3>{{news.title}}</h3> <br />\n\n          <br />\n\n          <label for=\"body\" class=\"form-label\">Body: <br> </label> {{news.body}}<br />\n          <form  #newsForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n                Add Picture <input type=\"file\" name=\"file\" hidden (change)=\"onFileSelected($event)\">\n            </label>\n            </span>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUpload()\">Upload</button>\n          </form>\n          <a routerLink=\"/admin/newsIndex\" class=\"btn btn-lg btn-success\">Go Back</a>\n          <button type=\"button\"  class=\"btn btn-lg btn-danger\" (click)=\"delete()\">Delete News</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/view-news/view-news.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/view-news/view-news.component.ts ***!
  \********************************************************/
/*! exports provided: ViewNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNewsComponent", function() { return ViewNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../news */ "./src/app/news.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewNewsComponent = /** @class */ (function () {
    function ViewNewsComponent(route, router, newsService) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.news = new _news__WEBPACK_IMPORTED_MODULE_1__["News"];
        this.selectedFile = null;
        this.returnedRes = true;
    }
    ViewNewsComponent.prototype.ngOnInit = function () {
        this.showNews();
    };
    ViewNewsComponent.prototype.showNews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .showNews({ id: id })
            .subscribe(function (response) {
            _this.news = response['news'];
        });
    };
    ViewNewsComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .deleteNews({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/newsIndex']);
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    ViewNewsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ViewNewsComponent.prototype.onUpload = function (event) {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        console.log(this.selectedFile.name);
        this.newsService.sendFile(formData)
            .subscribe(function (response) {
            if (response) {
                window.location.reload();
            }
            else {
                window.location.reload();
            }
        });
    };
    ViewNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-news',
            template: __webpack_require__(/*! ./view-news.component.html */ "./src/app/admin/view-news/view-news.component.html"),
            styles: [__webpack_require__(/*! ./view-news.component.css */ "./src/app/admin/view-news/view-news.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], ViewNewsComponent);
    return ViewNewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/view/view.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/view/view.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"user.name\">\n          <label for=\"name\" class=\"form-label\">Name:</label> {{user.name}}<br />\n\n          <label for=\"profile_pic\">Upload Your Profile Picture:</label>\n          <img src=\"\" alt=\"Profile Pic\"> <br />\n\n          <label for=\"age\">Age: </label>\n          {{user.age}} <br />\n\n          <label for=\"email\">Email: </label>\n          {{user.email}} <br />\n\n          <label for=\"about\">About Me:</label>\n          {{user.about}} <br />\n          <label for=\"gallery\">Gallery: <span class=\"small\">(Max of 9)</span> </label>\n          <!--foreach url in img --> <img src=\"\" alt=\"Gallery\">\n          <br /><br />\n          <button type=\"button\"  class=\"btn btn-lg btn-danger\" (click)=\"delete()\">Delete User</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/view/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    ViewComponent.prototype.showUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService
            .showUser({ id: id })
            .subscribe(function (response) {
            _this.user = response;
        });
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService
            .deleteUser({ id: id })
            .subscribe(function (response) {
            if (response.success) {
                _this.router.navigate(['/admin/index']);
            }
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/admin/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/admin/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/user-view/user-view.component */ "./src/app/news/user-view/user-view.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _event_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/user-view/user-view.component */ "./src/app/event/user-view/user-view.component.ts");
/* harmony import */ var _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _designer_designer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./designer/designer.component */ "./src/app/designer/designer.component.ts");
/* harmony import */ var _designer_index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./designer/index/index.component */ "./src/app/designer/index/index.component.ts");
/* harmony import */ var _designer_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./designer/edit/edit.component */ "./src/app/designer/edit/edit.component.ts");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _designer_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./designer/signup/signup.component */ "./src/app/designer/signup/signup.component.ts");
/* harmony import */ var _designer_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./designer/signup2/signup2.component */ "./src/app/designer/signup2/signup2.component.ts");
/* harmony import */ var _designer_signup3_signup3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./designer/signup3/signup3.component */ "./src/app/designer/signup3/signup3.component.ts");
/* harmony import */ var _designer_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./designer/login/login.component */ "./src/app/designer/login/login.component.ts");
/* harmony import */ var _designer_user_d_user_d_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./designer/user-d/user-d.component */ "./src/app/designer/user-d/user-d.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_index_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/index/index.component */ "./src/app/admin/index/index.component.ts");
/* harmony import */ var _admin_view_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/view/view.component */ "./src/app/admin/view/view.component.ts");
/* harmony import */ var _admin_event_event_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/event/event.component */ "./src/app/admin/event/event.component.ts");
/* harmony import */ var _admin_calend_calend_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/calend/calend.component */ "./src/app/admin/calend/calend.component.ts");
/* harmony import */ var _admin_news_index_news_index_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/news-index/news-index.component */ "./src/app/admin/news-index/news-index.component.ts");
/* harmony import */ var _admin_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/view-news/view-news.component */ "./src/app/admin/view-news/view-news.component.ts");
/* harmony import */ var _admin_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/add-news/add-news.component */ "./src/app/admin/add-news/add-news.component.ts");
/* harmony import */ var _admin_view_event_view_event_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/view-event/view-event.component */ "./src/app/admin/view-event/view-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'userview/:id', component: _news_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'event', component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"] },
    { path: 'userevent/:id', component: _event_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_6__["UserEventComponent"] },
    { path: 'sponsor', component: _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_7__["SponsorComponent"] },
    { path: 'donate', component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_9__["DonateComponent"] },
    { path: 'volunteer', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_13__["VolunteerComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"] },
    { path: 'designer', component: _designer_index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexDComponent"] },
    { path: 'designer/login', component: _designer_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'designer/signup', component: _designer_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"] },
    { path: 'designer/:id', component: _designer_designer_component__WEBPACK_IMPORTED_MODULE_10__["DesignerComponent"] },
    { path: 'designer/edit/:id', component: _designer_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"] },
    { path: 'designer/view/:id', component: _designer_user_d_user_d_component__WEBPACK_IMPORTED_MODULE_18__["UserDComponent"] },
    { path: 'designer/signup-2/:id', component: _designer_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_15__["Signup2Component"] },
    { path: 'designer/signup-3/:id', component: _designer_signup3_signup3_component__WEBPACK_IMPORTED_MODULE_16__["Signup3Component"] },
    { path: 'admin/index', component: _admin_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"] },
    { path: 'admin/calendar', component: _admin_calend_calend_component__WEBPACK_IMPORTED_MODULE_23__["CalendAComponent"] },
    { path: 'admin/newsIndex', component: _admin_news_index_news_index_component__WEBPACK_IMPORTED_MODULE_24__["NewsIndexComponent"] },
    { path: 'admin/addNews', component: _admin_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_26__["AddNewsComponent"] },
    { path: 'admin/viewNews/:id', component: _admin_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_25__["ViewNewsComponent"] },
    { path: 'admin/viewEvent/:id', component: _admin_view_event_view_event_component__WEBPACK_IMPORTED_MODULE_27__["ViewEventComponent"] },
    { path: 'admin/event', component: _admin_event_event_component__WEBPACK_IMPORTED_MODULE_22__["EventAComponent"] },
    { path: 'admin', redirectTo: '/admin/index', pathMatch: 'full' },
    { path: 'admin/view/:id', component: _admin_view_view_component__WEBPACK_IMPORTED_MODULE_21__["ViewComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Outer Starts -->\n<div class=\"outer\">\n  <!-- Top bar starts -->\n  <div class=\"top-bar\">\n    <div class=\"container\">\n      <!-- Contact starts -->\n      <div class=\"tb-contact pull-right\">\n        <!-- Email -->\n        <i class=\"fa fa-envelope color\"></i> &nbsp; <a href=\"mailto:contact@domain.com\">contact@domain.com</a>\n        &nbsp;&nbsp;\n        <!-- Phone -->\n        <i class=\"fa fa-phone color\"></i> &nbsp; +1 (342)-(323)-4923\n      </div>\n      <!-- Contact ends -->\n      <div class=\"tb-social pull-left\">\n        <div class=\"\" *ngIf=\"loggedIn\">\n          <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n        </div>\n        <div class=\"\" *ngIf=\"admin\">\n          <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n        </div>\n        <div class=\"row\">\n          <p></p>\n        </div>\n      </div>\n      <!-- Social media starts -->\n      <div class=\"tb-social pull-left\">\n        <div class=\"brand-bg text-left\">\n          <!-- Brand Icons -->\n          <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook square-2 rounded-1\"></i></a>\n          <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter square-2 rounded-1\"></i></a>\n          <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus square-2 rounded-1\"></i></a>\n          <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin square-2 rounded-1\"></i></a>\n          <a href=\"#\" class=\"pinterest\"><i class=\"fa fa-pinterest square-2 rounded-1\"></i></a>\n        </div>\n      </div>\n      <!--  Social media ends -->\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n  <div class=\"header-2\">\n    <!-- Container -->\n    <div style=\"margin-left:20px;\" >\n      <div class=\"\">\n        <div class=\"col-md-4\">\n          <!-- Logo section -->\n          <div class=\"logo\">\n            <img src=\"{{title}}\" alt=\"FIDA\" class=\"img img-responsive\" />\n            <!-- <h1 style=\"display:inline;\"><a href=\"#\"><i class=\"fa fa-user\"></i> {{ abbr }}</a></h1>\n            <h3 style=\"display:inline;\"><a class=\"color\" href=\"#\">{{ title }}</a></h3> -->\n          </div>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"col-sm-12  py-4\">\n            <div class=\"btn-group btn-group-xs  flex-wrap\" data-toggle=\"buttons\">\n              <a routerLink=\"/home\" class=\"btn btn-secondary btn-sm\" style=\"color:white;\" role=\"button\">Home</a>\n              <a routerLink=\"/news\" class=\"btn btn-success btn-sm\" style=\"color:white;\" role=\"button\">News</a>\n              <a routerLink=\"/event\" class=\"btn btn-danger btn-sm\" style=\"color:white;\" role=\"button\">Events</a>\n              <a routerLink=\"/sponsor\" class=\"btn btn-success btn-sm\" style=\"color:white;\" role=\"button\">Sponsors</a>\n              <a routerLink=\"/donate\" class=\"btn btn-secondary btn-sm\" style=\"color:white;\" role=\"button\">Donate Now</a>\n              <a routerLink=\"/designer\" class=\"btn btn-color btn-sm\" style=\"color:white;\" role=\"button\">Designer</a>\n              <a routerLink=\"/volunteer\" class=\"btn btn-warning btn-sm\" style=\"color:white;\" role=\"button\">Volunteer</a>\n              <a routerLink=\"/about\" class=\"btn btn-danger btn-sm\" style=\"color:white;\" role=\"button\">About Us</a>\n            </div>\n          </div>\n          <!-- <div class=\"navy\">\n            <ul>\n              <!-- Main menu\n              <li><a routerLink=\"/home\" class=\"btn btn-secondary btn-sm\" style=\"color:white;\" role=\"button\">Home</a></li>\n              <li><a routerLink=\"/news\" class=\"btn btn-success btn-sm\" style=\"color:white;\" role=\"button\">News</a></li>\n              <li><a routerLink=\"/event\" class=\"btn btn-danger btn-sm\" style=\"color:white;\" role=\"button\">Events</a></li>\n              <li><a routerLink=\"/sponsor\" class=\"btn btn-success btn-sm\" style=\"color:white;\" role=\"button\">Sponsors</a></li>\n              <li><a routerLink=\"/donate\" class=\"btn btn-secondary btn-sm\" style=\"color:white;\" role=\"button\">Donate Now</a></li>\n              <li><a routerLink=\"/designer\" class=\"btn btn-color btn-sm\" style=\"color:white;\" role=\"button\">Designer</a></li>\n              <li><a routerLink=\"/volunteer\" class=\"btn btn-warning btn-sm\" style=\"color:white;\" role=\"button\">Volunteer</a></li>\n              <li><a routerLink=\"/about\" class=\"btn btn-danger btn-sm\" style=\"color:white;\" role=\"button\">About Us</a></li>\n            </ul>\n          </div> -->\n          <!-- Navigation ends -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Header two ends -->\n</div>\n<div class=\"clearfix\"></div>\n<!-- Outer Ends -->\n<!-- Scroll to top -->\n<span class=\"totop\"><a href=\"#\"><i class=\"fa fa-angle-up bg-color\"></i></a></span>\n<!--TODO From heere -->\n<hr />\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n  <div class=\"push\"></div>\n</div>\n<footer>\n  <div class=\"container\">\n    <p class=\"pull-left\">Copyright &copy; 2014 - <a href=\"#\">Your Site</a></p>\n    <div class=\"clearfix\"></div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'assets/img/logo.png';
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this._router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_rave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-rave */ "./node_modules/angular-rave/fesm5/angular-rave.js");
/* harmony import */ var _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-modules/kitchen-sink/module */ "./src/app/demo-modules/kitchen-sink/module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _news_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./news/user-view/user-view.component */ "./src/app/news/user-view/user-view.component.ts");
/* harmony import */ var _event_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./event/user-view/user-view.component */ "./src/app/event/user-view/user-view.component.ts");
/* harmony import */ var _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _designer_designer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./designer/designer.component */ "./src/app/designer/designer.component.ts");
/* harmony import */ var _designer_index_index_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./designer/index/index.component */ "./src/app/designer/index/index.component.ts");
/* harmony import */ var _designer_edit_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./designer/edit/edit.component */ "./src/app/designer/edit/edit.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _designer_signup_signup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./designer/signup/signup.component */ "./src/app/designer/signup/signup.component.ts");
/* harmony import */ var _designer_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./designer/signup2/signup2.component */ "./src/app/designer/signup2/signup2.component.ts");
/* harmony import */ var _designer_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./designer/login/login.component */ "./src/app/designer/login/login.component.ts");
/* harmony import */ var _admin_index_index_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/index/index.component */ "./src/app/admin/index/index.component.ts");
/* harmony import */ var _admin_view_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/view/view.component */ "./src/app/admin/view/view.component.ts");
/* harmony import */ var _admin_calend_calend_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/calend/calend.component */ "./src/app/admin/calend/calend.component.ts");
/* harmony import */ var _admin_event_event_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/event/event.component */ "./src/app/admin/event/event.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calend_calend_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./calend/calend.component */ "./src/app/calend/calend.component.ts");
/* harmony import */ var _admin_news_index_news_index_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/news-index/news-index.component */ "./src/app/admin/news-index/news-index.component.ts");
/* harmony import */ var _admin_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/view-news/view-news.component */ "./src/app/admin/view-news/view-news.component.ts");
/* harmony import */ var _admin_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/add-news/add-news.component */ "./src/app/admin/add-news/add-news.component.ts");
/* harmony import */ var _designer_signup3_signup3_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./designer/signup3/signup3.component */ "./src/app/designer/signup3/signup3.component.ts");
/* harmony import */ var _designer_user_d_user_d_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./designer/user-d/user-d.component */ "./src/app/designer/user-d/user-d.component.ts");
/* harmony import */ var _admin_view_event_view_event_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/view-event/view-event.component */ "./src/app/admin/view-event/view-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_16__["NewsComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_17__["EventComponent"],
                _sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_20__["SponsorComponent"],
                _donate_donate_component__WEBPACK_IMPORTED_MODULE_21__["DonateComponent"],
                _designer_designer_component__WEBPACK_IMPORTED_MODULE_22__["DesignerComponent"],
                _designer_index_index_component__WEBPACK_IMPORTED_MODULE_23__["IndexDComponent"],
                _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_26__["VolunteerComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_27__["AboutComponent"],
                _designer_signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"],
                _designer_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _admin_index_index_component__WEBPACK_IMPORTED_MODULE_31__["IndexComponent"],
                _admin_view_view_component__WEBPACK_IMPORTED_MODULE_32__["ViewComponent"],
                _designer_edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_35__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
                _calend_calend_component__WEBPACK_IMPORTED_MODULE_37__["CalendComponent"],
                _admin_calend_calend_component__WEBPACK_IMPORTED_MODULE_33__["CalendAComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_25__["LogoutComponent"],
                _admin_news_index_news_index_component__WEBPACK_IMPORTED_MODULE_38__["NewsIndexComponent"],
                _admin_view_news_view_news_component__WEBPACK_IMPORTED_MODULE_39__["ViewNewsComponent"],
                _admin_event_event_component__WEBPACK_IMPORTED_MODULE_34__["EventAComponent"],
                _admin_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_40__["AddNewsComponent"],
                _designer_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_29__["Signup2Component"],
                _news_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_18__["UserViewComponent"],
                _event_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_19__["UserEventComponent"],
                _designer_signup3_signup3_component__WEBPACK_IMPORTED_MODULE_41__["Signup3Component"],
                _designer_user_d_user_d_component__WEBPACK_IMPORTED_MODULE_42__["UserDComponent"],
                _admin_view_event_view_event_component__WEBPACK_IMPORTED_MODULE_43__["ViewEventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_11__["DemoModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__["OwlModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"]
                }),
                angular_rave__WEBPACK_IMPORTED_MODULE_10__["AngularRaveModule"]
            ],
            providers: [ /*UserService */],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calend/calend.component.css":
/*!*********************************************!*\
  !*** ./src/app/calend/calend.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nh3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kL2NhbGVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kL2NhbGVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/calend/calend.component.html":
/*!**********************************************!*\
  !*** ./src/app/calend/calend.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n<!-- ACTUAL CALENDAR -->\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Month\"\n        [class.active]=\"view === CalendarView.Month\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Week\"\n        [class.active]=\"view === CalendarView.Week\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Day\"\n        [class.active]=\"view === CalendarView.Day\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"    \n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <!--  (eventClicked)=\"handleEvent('Clicked', $event.event)\"-->\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n<div *ngIf=\"admin\">\n  <h3>\n    Edit events\n    <button\n      class=\"btn btn-primary pull-right\"\n      (click)=\"addEvent()\">\n      Add new\n    </button>\n    <div class=\"clearfix\"></div>\n  </h3>\n\n  <table class=\"table table-bordered\">\n\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Primary color</th>\n        <th>Secondary color</th>\n        <th>Starts at</th>\n        <th>Ends at</th>\n        <th>Remove</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let event of events; let index = index\">\n        <td>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"event.title\"\n            (keyup)=\"refresh.next()\">\n        </td>\n        <td>\n          <input\n            type=\"color\"\n            [(ngModel)]=\"event.color.primary\"\n            (change)=\"refresh.next()\">\n        </td>\n        <td>\n          <input\n            type=\"color\"\n            [(ngModel)]=\"event.color.secondary\"\n            (change)=\"refresh.next()\">\n        </td>\n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.start\"\n            (ngModelChange)=\"refresh.next()\"\n            [altInput]=\"true\"\n            [convertModelValue]=\"true\"\n            [enableTime]=\"true\"\n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\">\n        </td>\n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.end\"\n            (ngModelChange)=\"refresh.next()\"\n            [altInput]=\"true\"\n            [convertModelValue]=\"true\"\n            [enableTime]=\"true\"\n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\">\n        </td>\n        <td>\n          <button\n            class=\"btn btn-danger\"\n            (click)=\"events.splice(index, 1); refresh.next(); deleteEvent(event.id)\">\n            Delete\n          </button>\n        </td>\n      </tr>\n    </tbody>\n\n  </table>\n  <button type=\"button\" name=\"button\" (click)=\"onSub()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/calend/calend.component.ts":
/*!********************************************!*\
  !*** ./src/app/calend/calend.component.ts ***!
  \********************************************/
/*! exports provided: CalendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendComponent", function() { return CalendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _services_calender_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/calender.service */ "./src/app/services/calender.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendComponent = /** @class */ (function () {
    function CalendComponent(modal, _calendar) {
        this.modal = modal;
        this._calendar = _calendar;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.returnedEventsId = [];
        this.loggedIn = false;
        this.actions = [
        // {
        //   label: '<i class="fa fa-fw fa-pencil"></i>',
        //   onClick: ({ event }: { event: CalendarEvent }): void => {
        //     this.handleEvent('Edited', event);
        //   }
        // }
        // },
        // {
        //   label: '<i class="fa fa-fw fa-times"></i>',
        //   onClick: ({ event }: { event: CalendarEvent }): void => {
        //     this.events = this.events.filter(iEvent => iEvent !== event);
        //     this.handleEvent('Deleted', event);
        //   }
        // }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [];
        this.eventArr = [];
        this.MyEvents = [];
        // events: CalendarEvent[] = [
        //   {
        //     start: subDays(startOfDay(new Date()), 1),
        //     end: addDays(new Date(), 1),
        //     title: 'A 3 day event',
        //     color: colors.red,
        //     actions: this.actions,
        //     allDay: true,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   },
        //   {
        //     start: startOfDay(new Date()),
        //     title: 'An event with no end date',
        //     color: colors.yellow,
        //     actions: this.actions
        //   },
        //   {
        //     start: subDays(endOfMonth(new Date()), 3),
        //     end: addDays(endOfMonth(new Date()), 3),
        //     title: 'A long event that spans 2 months',
        //     color: colors.blue,
        //     allDay: true
        //   },
        //   {
        //     start: addHours(startOfDay(new Date()), 2),
        //     end: new Date(),
        //     title: 'A draggable and resizable event',
        //     color: colors.yellow,
        //     actions: this.actions,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   }
        // ];
        this.activeDayIsOpen = true;
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.indexCalendar();
    }
    CalendComponent.prototype.indexCalendar = function () {
        var _this = this;
        this._calendar.indexCalendar()
            .subscribe(function (response) {
            //console.log(response);
            response.forEach(function (element) {
                _this.events.push({
                    id: element.id,
                    title: element.title,
                    start: new Date(element.start),
                    end: new Date(element.end),
                    color: { primary: element.color_primary, secondary: element.color_sec }
                });
                _this.MyEvents.push({
                    id: element.id,
                    title: element.title,
                    start: new Date(element.start),
                    end: new Date(element.end),
                    color: { primary: element.color_primary, secondary: element.color_sec }
                });
                _this.returnedEventsId.push(element.id);
            });
        });
    };
    CalendComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CalendComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
        });
        this.refresh.next();
    };
    CalendComponent.prototype.onSub = function () {
        var _this = this;
        //elements gotten from user submit button
        this.events.forEach(function (element) {
            if (_this.returnedEventsId.includes(element.id)) {
                //TODO exists in the database
                _this.MyEvents.forEach(function (myElement) {
                    //check if their are changes in title, start, end, color
                    if (element.id == myElement.id) {
                        if (myElement.title !== element.title) {
                            //title has changeD
                            console.log("title has changed");
                            _this._calendar.editCalendar({ 'title': element.title, 'id': element.id })
                                .subscribe(function (response) {
                                console.log(response);
                            });
                        }
                        if (myElement.start.getTime() !== element.start.getTime()) {
                            //start has changed
                            _this._calendar.editCalendar({ 'start': element.start, 'id': element.id })
                                .subscribe();
                            console.log("start has changed");
                        }
                        if (myElement.end.getTime() !== element.end.getTime()) {
                            //end has changed
                            _this._calendar.editCalendar({ 'end': element.end, 'id': element.id })
                                .subscribe();
                            console.log("end has changed");
                        }
                        if (myElement.color.primary !== element.color.primary || myElement.color.secondary !== element.color.secondary) {
                            //color has changed
                            _this._calendar.editCalendar({ 'color': element.color, 'id': element.id })
                                .subscribe();
                            console.log("color has changed");
                        }
                    }
                });
            }
            else {
                //TODO has not been added
                _this.eventArr.push(element);
            }
        });
        if (this.eventArr.length > 0) {
            this._calendar.addCalendar(this.eventArr)
                .subscribe(function (response) {
                console.log(response);
                _this.eventArr = [];
            });
        }
        window.location.reload();
    };
    CalendComponent.prototype.deleteEvent = function (id) {
        this._calendar.deleteCalendar({ 'id': id })
            .subscribe(function (response) {
            window.location.reload();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendComponent.prototype, "modalContent", void 0);
    CalendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calend',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./calend.component.html */ "./src/app/calend/calend.component.html"),
            styles: [__webpack_require__(/*! ./calend.component.css */ "./src/app/calend/calend.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_calender_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"]])
    ], CalendComponent);
    return CalendComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/component.ts ***!
  \********************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var DemoComponent = /** @class */ (function () {
    function DemoComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    DemoComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    DemoComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    DemoComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    DemoComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DemoComponent.prototype, "modalContent", void 0);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./styles.css */ "./src/app/demo-modules/kitchen-sink/styles.css")],
            template: __webpack_require__(/*! ./template.html */ "./src/app/demo-modules/kitchen-sink/template.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/module.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/module.ts ***!
  \*****************************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component */ "./src/app/demo-modules/kitchen-sink/component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
                })
            ],
            declarations: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]],
            exports: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/styles.css":
/*!******************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1tb2R1bGVzL2tpdGNoZW4tc2luay9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tbW9kdWxlcy9raXRjaGVuLXNpbmsvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Month\"\n        [class.active]=\"view === CalendarView.Month\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Week\"\n        [class.active]=\"view === CalendarView.Week\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Day\"\n        [class.active]=\"view === CalendarView.Day\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<h3>\n  Edit events\n  <button\n    class=\"btn btn-primary pull-right\"\n    (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.primary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.secondary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.start\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.end\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"events.splice(index, 1); refresh.next()\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n"

/***/ }),

/***/ "./src/app/designer/designer.component.css":
/*!*************************************************!*\
  !*** ./src/app/designer/designer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    border: 1px solid #ddd; /* Gray border */\n    border-radius: 4px;  /* Rounded border */\n    padding: 5px; /* Some padding */\n    width: 150px; /* Set a small width */\n}\n\n/* Add a hover effect (blue shadow) */\n\nimg:hover {\n    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\nul.horizontal-list {\nmin-width: 696px;\nlist-style: none;\npadding-top: 20px;\n}\n\nul.horizontal-list li {\n\tdisplay: inline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduZXIvZGVzaWduZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QixDQUFDLGlCQUFpQjtJQUN6QyxtQkFBbUIsRUFBRSxvQkFBb0I7SUFDekMsYUFBYSxDQUFDLGtCQUFrQjtJQUNoQyxhQUFhLENBQUMsdUJBQXVCO0NBQ3hDOztBQUVELHNDQUFzQzs7QUFDdEM7SUFDSSwrQ0FBK0M7Q0FDbEQ7O0FBRUQ7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtDQUNqQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL2Rlc2lnbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIEdyYXkgYm9yZGVyICovXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgLyogUm91bmRlZCBib3JkZXIgKi9cbiAgICBwYWRkaW5nOiA1cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xuICAgIHdpZHRoOiAxNTBweDsgLyogU2V0IGEgc21hbGwgd2lkdGggKi9cbn1cblxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IChibHVlIHNoYWRvdykgKi9cbmltZzpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcbn1cblxudWwuaG9yaXpvbnRhbC1saXN0IHtcbm1pbi13aWR0aDogNjk2cHg7XG5saXN0LXN0eWxlOiBub25lO1xucGFkZGluZy10b3A6IDIwcHg7XG59XG51bC5ob3Jpem9udGFsLWxpc3QgbGkge1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/designer/designer.component.html":
/*!**************************************************!*\
  !*** ./src/app/designer/designer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"left\">{{page_title}}</h3>\n  <div class=\"\" *ngIf=\"loggedIn\">\n    <a routerLink=\"#\" class=\"btn btn-secondary\">My profile</a>\n  </div>\n  <div class=\"\" *ngIf=\"admin\">\n    <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n  </div>\n  <div class=\"row\">\n    <p></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-7 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"mb-4 shadow-sm\">\n            <ul class=\"horizontal-list\"  style=\"list-style: none;padding:0;\"><li class=\"crop\"> <a href=\"/uploads/{{user.profile_pic}}\" target=\"_blank\"> <img src=\"/uploads/{{user.profile_pic}}\" class=\"img img-responsive\" alt=\"Profile Picture\"/></a> </li></ul>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">\n            NAME: {{user.name}}\n          </p>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">\n            ABOUT: {{user.about}}\n          </p>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">GALLERY:</p>\n          <a *ngFor=\"let url of urls\"  target=\"_blank\" style=\"display:inline;\" href=\"/uploads/{{url}}\">\n            <ul class=\"horizontal-list\"  style=\"list-style: none;padding:0;display:inline;\"><li class=\"\"> <img  src=\"/uploads/{{url}}\" class=\"img img-responsive\" alt=\"Gallery Picture\"/> </li></ul>\n          </a>\n        </div>\n      </div>\n    </div> <!--col-md-7 -->\n    <div class=\"col-md-3 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <a routerLink=\"/designer/edit/{{user.id}}\" class=\"btn btn-secondary btn-block\">Edit Profile</a>\n        </div>\n        <div class=\"col-md-6\">\n          <a routerLink=\"/logout\" class=\"btn btn-secondary btn-block\">Logout</a>\n        </div>\n      </div>\n    </div>\n  </div> <!--row-->\n</div> <!--container-->\n"

/***/ }),

/***/ "./src/app/designer/designer.component.ts":
/*!************************************************!*\
  !*** ./src/app/designer/designer.component.ts ***!
  \************************************************/
/*! exports provided: DesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerComponent", function() { return DesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.page_title = 'DESIGNERS';
        this.loggedIn = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    DesignerComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    DesignerComponent.prototype.showUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        sessionStorage.setItem('id', String(id));
        sessionStorage.setItem('loggedInValue', 'true');
        this.data = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.userService
            .showUser({ id: id })
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designer',
            template: __webpack_require__(/*! ./designer.component.html */ "./src/app/designer/designer.component.html"),
            styles: [__webpack_require__(/*! ./designer.component.css */ "./src/app/designer/designer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], DesignerComponent);
    return DesignerComponent;
}());



/***/ }),

/***/ "./src/app/designer/edit/edit.component.css":
/*!**************************************************!*\
  !*** ./src/app/designer/edit/edit.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/designer/edit/edit.component.html":
/*!***************************************************!*\
  !*** ./src/app/designer/edit/edit.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <form class=\"form\" (ngSubmit)=\"onSubmit()\" #edit=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"form-label\">Name:</label>\n            <input type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" required/> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"profile_pic\">Upload Your Profile Picture:</label>\n            <span style=\"color: #0D7C15;\">\n              <label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15\">\n                Upload Picture<input type=\"file\" name=\"file\" hidden (change)=\"onFileSelected($event)\">\n              </label>\n            </span>\n            <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"age\">Age:</label>\n            <input type=\"number\" class=\"form-control\" name=\"age\" id=\"age\" [(ngModel)]=\"user.age\" /> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\"\n            name=\"email\" class=\"form-control\"\n            [(ngModel)]=\"user.email\" id=\"email\" required/> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"about\">About Me:</label>\n            <textarea name=\"about\" class=\"form-control\" rows=\"8\" cols=\"50\" [(ngModel)]=\"user.about\" name=\"about\" required></textarea> <br />\n          </div>\n          <div  *ngFor=\"let url of urlsU\" >\n            <img src=\"/uploads/{{url}}\" class=\"rounded mb-3\" width=\"180\"> <button type=\"button\" class=\"btn btn-s btn-danger\" (click)=\"removePic(url)\" name=\"button\">Remove</button>\n          </div>\n          <h5>Upload New Gallery Pictures</h5>\n          <div  *ngFor=\"let url of urls\" >\n            <img [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n          </div>\n          <span style=\"color: #0D7C15;\">\n            <label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n              Upload file<input type=\"file\" name=\"image[]\" hidden multiple (change)=\"onGallerySelected($event)\">\n            </label>\n          </span>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUploadG()\">Upload</button>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!edit.form.valid\">Update Details</button>\n            </div>\n            <div class=\"col-md-6\">\n              <a routerLink=\"/designer/{{user.id}}\"  class=\"btn btn-lg btn-block btn-danger\">Cancel</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <form class=\"form\" (ngSubmit)=\"onSubmit()\" #edit=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"form-label\">Name:</label>\n            <input type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"user.name\" name=\"name\" id=\"name\" required/> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"profile_pic\">Upload Your Profile Picture:</label>\n\n              <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15\">\n                  Upload Picture<input type=\"file\" name=\"file\" hidden (change)=\"onFileSelected($event)\">\n              </label>\n              </span>\n              <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"age\">Age:</label>\n            <input type=\"number\" class=\"form-control\" name=\"age\" id=\"age\" [(ngModel)]=\"user.age\" /> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\"\n             name=\"email\" class=\"form-control\"\n            [(ngModel)]=\"user.email\" id=\"email\" required/> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"about\">About Me:</label>\n            <textarea name=\"about\" class=\"form-control\" rows=\"8\" cols=\"50\" [(ngModel)]=\"user.about\" name=\"about\" required></textarea> <br />\n          </div>\n\n\n          <h5>Remove Previously Updated Gallery Pictures</h5>\n          <div  *ngFor=\"let url of urlsU\" >\n            <img src=\"/uploads/{{url}}\" class=\"rounded mb-3\" width=\"180\">\n            <button type=\"button\" class=\"btn btn-s btn-danger\" (click)=\"removePic(url)\" name=\"button\">Remove</button>\n          </div>\n          <h5>Upload New Gallery Pictures</h5>\n          <div  *ngFor=\"let url of urls\" >\n            <img [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n          </div>\n          <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n              Upload file<input type=\"file\" name=\"image[]\" hidden multiple (change)=\"onGallerySelected($event)\">\n          </label>\n          </span>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUploadG()\">Upload</button>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!edit.form.valid\">Update Details</button>\n            </div>\n            <div class=\"col-md-6\">\n              <a routerLink=\"/designer/{{user.id}}\"  class=\"btn btn-lg btn-block btn-danger\">Cancel</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/designer/edit/edit.component.ts":
/*!*************************************************!*\
  !*** ./src/app/designer/edit/edit.component.ts ***!
  \*************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.selectedFile = null;
        this.returnedUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.urls = new Array();
        this.filesToUpload = [];
        this.id = +this.route.snapshot.paramMap.get('id');
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
                console.log("User not added");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/designer/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/designer/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/designer/index/index.component.css":
/*!****************************************************!*\
  !*** ./src/app/designer/index/index.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgL { border: 1px solid #ddd; display:inline-block; /* Gray border */ border-radius: 4px;  /* Rounded border */ padding: 5px; /* Some padding */ width: 300px; height: 300px;overflow:hidden; /* Set a small width */}/* Add a hover effect (blue shadow) */.imgL:hover {box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduZXIvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsY0FBYyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxzQ0FBc0MsYUFBYSwrQ0FBK0MsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nTCB7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyAvKiBHcmF5IGJvcmRlciAqLyBib3JkZXItcmFkaXVzOiA0cHg7ICAvKiBSb3VuZGVkIGJvcmRlciAqLyBwYWRkaW5nOiA1cHg7IC8qIFNvbWUgcGFkZGluZyAqLyB3aWR0aDogMzAwcHg7IGhlaWdodDogMzAwcHg7b3ZlcmZsb3c6aGlkZGVuOyAvKiBTZXQgYSBzbWFsbCB3aWR0aCAqL30vKiBBZGQgYSBob3ZlciBlZmZlY3QgKGJsdWUgc2hhZG93KSAqLy5pbWdMOmhvdmVyIHtib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/designer/index/index.component.html":
/*!*****************************************************!*\
  !*** ./src/app/designer/index/index.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row float-right\" *ngIf=\"loggedIn\">\n    <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n  </div>\n  <div class=\"row float-right\" *ngIf=\"admin\">\n    <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n  </div>\n  <div class=\"row\">\n    <p></p>\n  </div>\n  <div class=\"container\">\n    <div class=\"page-heading-two\">\n      <h2>{{page_title}}</h2>\n      <div class=\"clearfix\"></div>\n    </div>\n    <!--   Actual content for donation form -->\n    <div class=\"non-profit\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-sm-5 offset-md-1\">\n          <div class=\"np-donation\">\n            <img src=\"./../../assets/img/user/2.jpg\" class=\"img-responsive img-thumbnail\" alt=\"\"/>\n          </div>\n        </div>\n        <div class=\"col-md-5 col-sm-5\">\n          <p>Do you want more exposure? <br> Do you want incorporation with more international manufacturers?\n            <br>\n            Do you want to transfer your ideas into a reality? <br>Do you want your own personal advisor?\n          </p>\n          <div *ngIf=\"!admin && !loggedIn\">\n            <a routerLink=\"login\" class=\"btn btn-white\" >Login</a> &nbsp;\n            <a class=\"btn btn-color\"routerLink=\"signup\">Create my Page</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"divider-1\"></div>\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-md-4\">\n      <div class=\"card mb-4 shadow-sm\">\n        <ul class=\"horizontal-list\"  style=\"list-style: none;padding:0;display:inline;\">\n          <li class=\"\">\n            <a routerLink=\"/designer/view/{{user.id}}\">\n              <img src=\"/uploads/{{user.profile_pic}}\" alt=\"Profile Pic\" class=\"img imgL img-responsive\" />\n            </a>\n          </li>\n        </ul>\n        <div class=\"card-body\">\n          <a routerLink=\"/designer/view/{{user.id}}\">\n            <h4 class=\"card-text\">{{user.name}}</h4>\n          </a>\n          <h6>About User:</h6>\n          <p class=\"card-text\">{{user.about}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/designer/index/index.component.ts":
/*!***************************************************!*\
  !*** ./src/app/designer/index/index.component.ts ***!
  \***************************************************/
/*! exports provided: IndexDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDComponent", function() { return IndexDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexDComponent = /** @class */ (function () {
    function IndexDComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.page_title = "DESIGNERS";
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.index();
    }
    IndexDComponent.prototype.index = function () {
        var _this = this;
        this.userService.indexUsers()
            .subscribe(function (response) {
            _this.users = response;
        });
    };
    IndexDComponent.prototype.ngOnInit = function () {
    };
    IndexDComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/designer/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/designer/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], IndexDComponent);
    return IndexDComponent;
}());



/***/ }),

/***/ "./src/app/designer/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/designer/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/designer/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/designer/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div>\n        <div class=\"row float-right\">\n          <a routerLink=\"/designer/signup\" class=\"btn btn-white\" >Register</a> &nbsp;\n          <a class=\"btn btn-color\" routerLink=\"/designer\">Go Back</a>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div *ngIf=\"!returnedRes\" class=\"alert alert-warning\">\n          <p>{{returnedMess}}</p>\n        </div>\n        <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #login=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"user.email\" name=\"email\" id=\"email\" required #name=\"ngModel\"/> <br />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password:</label>\n            <input type=\"password\" class=\"form-control\"\n             name=\"password\"\n            [(ngModel)]=\"user.password\" id=\"password\" required/> <br />\n          </div>\n\n          <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!login.form.valid\">Login</button>\n        </form>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/designer/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/designer/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.returnedRes = true;
        this.returnedUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.user.email === 'admin') {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/designer/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/designer/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/designer/signup/signup.component.css":
/*!******************************************************!*\
  !*** ./src/app/designer/signup/signup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCLENBQUMsV0FBVztDQUM1Qzs7QUFFRDtFQUNFLCtCQUErQixDQUFDLFNBQVM7Q0FDMUMiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ25lci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/designer/signup/signup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/designer/signup/signup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div>\n        <div class=\"row float-right\">\n          <a routerLink=\"/designer/login\" class=\"btn btn-white\" >Login</a> &nbsp;\n          <a class=\"btn btn-color\" routerLink=\"/designer\">Go Back</a>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div *ngIf=\"!returnedRes\" class=\"alert alert-danger\">\n          <p>{{returnedMess}}</p>\n        </div>\n      <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #signup=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" class=\"form-control\"\n          [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" required #name=\"ngModel\"/> <br />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"age\">Age:</label>\n          <input type=\"number\" class=\"form-control\" name=\"age\" id=\"age\" [(ngModel)]=\"model.age\" /> <br />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"email\"\n           name=\"email\" class=\"form-control\"\n          [(ngModel)]=\"model.email\" id=\"email\" required/> <br />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input type=\"password\"\n           name=\"password\" class=\"form-control\"\n          [(ngModel)]=\"model.password\" id=\"password\" required/> <br />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"about\">About Me:</label>\n          <textarea name=\"about\" class=\"form-control\" rows=\"8\" cols=\"50\" [(ngModel)]=\"model.about\" name=\"about\" required></textarea> <br />\n        </div>\n        <button type=\"submit\"  class=\"btn btn-lg btn-block btn-success\" [disabled]=\"!signup.form.valid\"> Create my Account</button>\n      </form>\n    </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/designer/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/designer/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, _http) {
        this.router = router;
        this.userService = userService;
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"];
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.success = false;
        this.returnedRes = true;
        this.returnedUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
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
            }
            else {
                _this.returnedRes = response.success;
                _this.returnedMess = response.response;
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/designer/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/designer/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/designer/signup2/signup2.component.css":
/*!********************************************************!*\
  !*** ./src/app/designer/signup2/signup2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL3NpZ251cDIvc2lnbnVwMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/designer/signup2/signup2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/designer/signup2/signup2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div>\n        <div class=\"row float-right\">\n        <a class=\"btn btn-color\" routerLink=\"/designer\">Go Back</a>\n        </div>\n        <div class=\"row\">\n          <p></p>\n        </div>\n         <h3 class=\"text-primary\">Upload a Profile Picture <small> max size: 2MB</small></h3>\n        <form  #signupForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n              Upload Picture <input type=\"file\" name=\"file\" hidden (change)=\"onFileSelected($event)\">\n          </label>\n          </span>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUpload()\">Upload</button>\n        </form>\n    </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/designer/signup2/signup2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/designer/signup2/signup2.component.ts ***!
  \*******************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        console.log(this.selectedFile.name);
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
    };
    Signup2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup2',
            template: __webpack_require__(/*! ./signup2.component.html */ "./src/app/designer/signup2/signup2.component.html"),
            styles: [__webpack_require__(/*! ./signup2.component.css */ "./src/app/designer/signup2/signup2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], Signup2Component);
    return Signup2Component;
}());



/***/ }),

/***/ "./src/app/designer/signup3/signup3.component.css":
/*!********************************************************!*\
  !*** ./src/app/designer/signup3/signup3.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL3NpZ251cDMvc2lnbnVwMy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/designer/signup3/signup3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/designer/signup3/signup3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div>\n        <div class=\"row float-right\">\n        <a class=\"btn btn-color\" routerLink=\"/designer\">Go Back</a>\n        </div>\n        <div class=\"row\">\n          <p></p>\n        </div>\n         <h3 class=\"text-primary\">Upload Gallery Pictures <small>max of 9 | max size: 2MB</small> </h3>\n        <form  #signupForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div>\n            <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n        </div>\n          <span style=\"color: #0D7C15;\"><label class=\"btn btn-primary upload-btn\" style=\"background: #0D7C15;margin-right: 10px;\">\n              Upload file<input type=\"file\" name=\"image[]\" hidden multiple (change)=\"onFileSelected($event)\">\n          </label>\n          </span>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onUpload()\">Upload</button>\n        </form>\n    </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/designer/signup3/signup3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/designer/signup3/signup3.component.ts ***!
  \*******************************************************/
/*! exports provided: Signup3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup3Component", function() { return Signup3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        this.filesToUpload.push(event.target.files[0]);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup3',
            template: __webpack_require__(/*! ./signup3.component.html */ "./src/app/designer/signup3/signup3.component.html"),
            styles: [__webpack_require__(/*! ./signup3.component.css */ "./src/app/designer/signup3/signup3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], Signup3Component);
    return Signup3Component;
}());



/***/ }),

/***/ "./src/app/designer/user-d/user-d.component.css":
/*!******************************************************!*\
  !*** ./src/app/designer/user-d/user-d.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmVyL3VzZXItZC91c2VyLWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/designer/user-d/user-d.component.html":
/*!*******************************************************!*\
  !*** ./src/app/designer/user-d/user-d.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"left\">{{page_title}}</h3>\n  <div class=\"row\">\n    <div class=\"col-md-7 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"mb-4 shadow-sm\">\n            <ul class=\"horizontal-list\"  style=\"list-style: none;padding:0;\"><li class=\"crop\"> <a href=\"/uploads/{{user.profile_pic}}\" target=\"_blank\"> <img src=\"/uploads/{{user.profile_pic}}\" class=\"img img-responsive\" alt=\"Profile Picture\"/></a> </li></ul>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">\n            NAME: {{user.name}}\n          </p>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">\n            ABOUT: {{user.about}}\n          </p>\n        </div>\n        <div class=\"col-md-12\">\n          <p class=\"text-info\">GALLERY:</p>\n          <a *ngFor=\"let url of urls\"  target=\"_blank\" style=\"display:inline;\" href=\"/uploads/{{url}}\">\n            <ul class=\"horizontal-list\"  style=\"list-style: none;padding:0;display:inline;\"><li class=\"\"> <img  src=\"/uploads/{{url}}\" class=\"img img-responsive\" alt=\"Gallery Picture\"/> </li></ul>\n          </a>\n        </div>\n      </div>\n    </div> <!--col-md-7 -->\n  </div> <!--row-->\n</div> <!--container-->\n"

/***/ }),

/***/ "./src/app/designer/user-d/user-d.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/designer/user-d/user-d.component.ts ***!
  \*****************************************************/
/*! exports provided: UserDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDComponent", function() { return UserDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDComponent = /** @class */ (function () {
    function UserDComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.page_title = 'DESIGNERS';
        this.loggedIn = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    UserDComponent.prototype.ngOnInit = function () {
        this.showUser();
    };
    UserDComponent.prototype.showUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        sessionStorage.setItem('id', String(id));
        sessionStorage.setItem('loggedInValue', 'true');
        this.data = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.userService
            .showUser({ id: id })
            .subscribe(function (response) {
            _this.user = response;
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
    UserDComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-d',
            template: __webpack_require__(/*! ./user-d.component.html */ "./src/app/designer/user-d/user-d.component.html"),
            styles: [__webpack_require__(/*! ./user-d.component.css */ "./src/app/designer/user-d/user-d.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserDComponent);
    return UserDComponent;
}());



/***/ }),

/***/ "./src/app/donate/donate.component.css":
/*!*********************************************!*\
  !*** ./src/app/donate/donate.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/donate/donate.component.html":
/*!**********************************************!*\
  !*** ./src/app/donate/donate.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-heading-two\">\n    <h2>{{page_title}}</h2>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"\" *ngIf=\"loggedIn\">\n    <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n  </div>\n  <div class=\"\" *ngIf=\"admin\">\n    <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n  </div>\n  <div class=\"row\">\n    <p></p>\n  </div>\n  <div class=\"\">\n    <!--<angular-rave\n    [PBFPubKey] = \"'FLWPUBK-XXXXXXXXXXXX'\"\n    [customer_email] = \"'olayanju04@gmail.com'\"\n    [customer_phone] = \"'07066859921'\"\n    [amount]=\"5\"\n    [custom_title]=\"'Bill Payment'\"\n    [txref]=\"'USR1295950'\"\n    (callback)=\"paymentSuccess($event)\"\n    (close)=\"paymentFailure()\"\n  ></angular-rave>-->\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <!-- Actual content for donation form -->\n  <div class=\"non-profit\">\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-5\">\n        <!-- Donation sidebar -->\n        <div class=\"block-heading-two\">\n          <h3><span>Every $ Makes A Difference</span></h3>\n        </div>\n\n        <img src=\"./../../assets/img/magazine/small/2.jpg\" class=\"img-responsive img-thumbnail\" alt=\"\"/>\n\n\n      </div>\n      <div class=\"col-md-7 col-sm-7\">\n        <!-- Donation form -->\n        <div class=\"np-donation\">\n          <!-- heading -->\n          <div class=\"block-heading-two\">\n            <h3><span>Your Donation Helps</span></h3>\n          </div>\n          <p>Lorem ipsum dolor sit amet, conse ctetur adipi icing elit, sed do eiusmod tempor in ididunt ut labore et itation iquip ex ea commo it si ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, conse ctetur adipi icing elit, sed do eiusmod tempor in ididunt ut labore et itation  consequat.</p>\n\n          <a class=\"btn btn-sm btn-color\" href=\"https://rave.flutterwave.com/donate/c0zfynffcxfj\">Donate now</a> &nbsp;\n          <a routerLink=\"/about\" class=\"btn btn-white\">Contact Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/donate/donate.component.ts":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonateComponent = /** @class */ (function () {
    function DonateComponent() {
        this.page_title = 'DONATE';
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    DonateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donate',
            template: __webpack_require__(/*! ./donate.component.html */ "./src/app/donate/donate.component.html"),
            styles: [__webpack_require__(/*! ./donate.component.css */ "./src/app/donate/donate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DonateComponent);
    return DonateComponent;
}());



/***/ }),

/***/ "./src/app/event.ts":
/*!**************************!*\
  !*** ./src/app/event.ts ***!
  \**************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"left\">{{page_title}}</h3>\n  <div class=\"container\">\n    <div class=\"\" *ngIf=\"loggedIn\">\n      <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n    </div>\n    <div class=\"\" *ngIf=\"admin\">\n      <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n    </div>\n    <div class=\"row\">\n      <p></p>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let event of events\" class=\"col-md-4\">\n        <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-body\">\n            <ul class=\"products\"  style=\"list-style: none;padding:0;\">\n              <li class=\"crop\">\n                <img src=\"./../../uploads/event/{{event.image}}\" class=\"img-responsive\" />\n              </li>\n            </ul>\n            <div class=\"clearfix\"></div>\n            <h4 class=\"card-text\">{{event.title}}</h4>\n            <p class=\"card-text\">{{event.body}}</p>\n            <div class=\"d-flex justify-content-between align-items-center\">\n              <div class=\"btn-group\">\n                <a routerLink=\"/userevent/{{event.id}}\" class=\"btn btn-sm btn-outline-secondary\">View</a>\n              </div>\n              <small class=\"text-muted\">{{event.createdAt}}</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-calend></app-calend>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(eventService) {
        this.eventService = eventService;
        this.page_title = 'EVENT';
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.index();
    }
    EventComponent.prototype.index = function () {
        var _this = this;
        this.eventService.indexEvent()
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/event/user-view/user-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event/user-view/user-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/event/user-view/user-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event/user-view/user-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"event.title\">\n          <h3>{{event.title}}</h3>\n          <ul class=\"products\"  style=\"list-style: none;padding:0;\">\n            <li class=\"crop\">\n              <img src=\"./../../uploads/event/{{event.image}}\" class=\"img-responsive\" />\n            </li>\n          </ul>\n          <div class=\"clearfix\"></div>\n          <p class=\"text-primary\">{{event.body}}</p>\n          <p class=\"text-muted\">Created At: {{event.createdAt}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/event/user-view/user-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event/user-view/user-view.component.ts ***!
  \********************************************************/
/*! exports provided: UserEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventComponent", function() { return UserEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../event */ "./src/app/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEventComponent = /** @class */ (function () {
    function UserEventComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.event = new _event__WEBPACK_IMPORTED_MODULE_1__["Event"];
    }
    UserEventComponent.prototype.ngOnInit = function () {
        this.showEvent();
    };
    UserEventComponent.prototype.showEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventService
            .showEvent({ id: id })
            .subscribe(function (response) {
            _this.event = response;
        });
    };
    UserEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/event/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/event/user-view/user-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], UserEventComponent);
    return UserEventComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-block\">\n  <div class=\"quote-two\">\n    <div class=\"container\">\n      <div class=\"quote-two-content\">\n        <span>&#8220;</span>\n        <owl-carousel [options]=\"mySlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n          <div class=\"item\">\n            <h3>IDA - Your designers choice. <br /> <br /> <br /> <br />Great </h3>\n          </div>\n        </owl-carousel>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.mySlideOptions = { items: 1, dots: true, nav: false };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html{font-family:'Open sans', sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff !important}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000 !important}.label{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}}*{box-sizing:border-box}*:before,*:after{box-sizing:border-box}html{font-family: 'Open Sans', sans-serif;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Open sans\", sans-serif, \"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:13px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive,.thumbnail>img,.thumbnail a>img,.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:3px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:2px;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:18px;margin-bottom:18px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#777}h1,.h1,h2,.h2,h3,.h3{margin-top:18px;margin-bottom:9px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:9px;margin-bottom:9px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:33px}h2,.h2{font-size:27px}h3,.h3{font-size:23px}h4,.h4{font-size:17px}h5,.h5{font-size:13px}h6,.h6{font-size:12px}p{margin:0 0 9px}.lead{margin-bottom:18px;font-size:14px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:19.5px}}small,.small{font-size:92%}mark,.mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:8px;margin:36px 0 18px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:9px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:18px}dt,dd{line-height:1.42857143}dt{font-weight:bold}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:9px 18px;margin:0 0 18px;font-size:16.25px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\\00A0 \\2014'}address{margin-bottom:18px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:2px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:1px;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;font-weight:bold;box-shadow:none}pre{display:block;padding:8.5px;margin:0 0 9px;font-size:12px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:2px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:18px}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #ddd}.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=\"col-\"]{position:static;float:none;display:table-column}table td[class*=\"col-\"],table th[class*=\"col-\"]{position:static;float:none;display:table-cell}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background-color:#f5f5f5}.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{background-color:#e8e8e8}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background-color:#dff0d8}.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{background-color:#d0e9c6}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background-color:#d9edf7}.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{background-color:#c4e3f3}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background-color:#fcf8e3}.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{background-color:#faf2cc}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background-color:#f2dede}.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{background-color:#ebcccc}.table-responsive{overflow-x:auto;min-height:0.01%}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:13.5px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:18px;font-size:19.5px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type=\"search\"]{box-sizing:border-box}input[type=\"radio\"],input[type=\"checkbox\"]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=\"file\"]{display:block}input[type=\"range\"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=\"file\"]:focus,input[type=\"radio\"]:focus,input[type=\"checkbox\"]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:13px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:32px;padding:6px 12px;font-size:13px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:2px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.form-control:focus{border-color:#ccc;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(204, 204, 204, 0.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type=\"search\"]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=\"date\"],input[type=\"time\"],input[type=\"datetime-local\"],input[type=\"month\"]{line-height:32px}input[type=\"date\"].input-sm,input[type=\"time\"].input-sm,input[type=\"datetime-local\"].input-sm,input[type=\"month\"].input-sm,.input-group-sm input[type=\"date\"],.input-group-sm input[type=\"time\"],.input-group-sm input[type=\"datetime-local\"],.input-group-sm input[type=\"month\"]{line-height:30px}input[type=\"date\"].input-lg,input[type=\"time\"].input-lg,input[type=\"datetime-local\"].input-lg,input[type=\"month\"].input-lg,.input-group-lg input[type=\"date\"],.input-group-lg input[type=\"time\"],.input-group-lg input[type=\"datetime-local\"],.input-group-lg input[type=\"month\"]{line-height:45px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{min-height:18px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type=\"radio\"],.radio-inline input[type=\"radio\"],.checkbox input[type=\"checkbox\"],.checkbox-inline input[type=\"checkbox\"]{position:absolute;margin-left:-20px;margin-top:4px \\9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type=\"radio\"][disabled],input[type=\"checkbox\"][disabled],input[type=\"radio\"].disabled,input[type=\"checkbox\"].disabled,fieldset[disabled] input[type=\"radio\"],fieldset[disabled] input[type=\"checkbox\"]{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.form-group-sm .form-control{height:30px;line-height:30px}textarea.form-group-sm .form-control,select[multiple].form-group-sm .form-control{height:auto}.form-group-sm .form-control-static{height:30px;padding:5px 10px;font-size:12px;line-height:1.5}.input-lg{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.input-lg{height:45px;line-height:45px}textarea.input-lg,select[multiple].input-lg{height:auto}.form-group-lg .form-control{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.form-group-lg .form-control{height:45px;line-height:45px}textarea.form-group-lg .form-control,select[multiple].form-group-lg .form-control{height:auto}.form-group-lg .form-control-static{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:40px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:32px;height:32px;line-height:32px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback{width:45px;height:45px;line-height:45px}.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:23px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type=\"radio\"],.form-inline .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:25px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.333333px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px}}.btn{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:13px;line-height:1.42857143;border-radius:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#333;text-decoration:none}.btn:active,.btn.active{outline:0;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:hover,.btn-default:focus,.btn-default.focus,.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary:hover,.btn-primary:focus,.btn-primary.focus,.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:hover,.btn-success:focus,.btn-success.focus,.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:hover,.btn-info:focus,.btn-info.focus,.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:hover,.btn-warning:focus,.btn-warning.focus,.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:hover,.btn-danger:focus,.btn-danger.focus,.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#337ab7;font-weight:normal;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#777;text-decoration:none}.btn-lg,.btn-group-lg>.btn{padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}.btn-sm,.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}.btn-xs,.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:1px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none;visibility:hidden}.collapse.in{display:block;visibility:visible}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-property:height, visibility;transition-duration:.35s;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropup,.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);border-radius:2px;box-shadow:0 6px 12px rgba(0,0,0,0.175);-webkit-background-clip:padding-box;background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#777}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:2px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-bottom-left-radius:2px;border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=\"buttons\"]>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn input[type=\"checkbox\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=\"col-\"]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:45px;line-height:45px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:13px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:2px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:1px}.input-group-addon.input-lg{padding:10px 16px;font-size:17px;border-radius:3px}.input-group-addon input[type=\"radio\"],.input-group-addon input[type=\"checkbox\"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:2px 2px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:2px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:2px 2px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:2px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:2px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:2px 2px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none;visibility:hidden}.tab-content>.active{display:block;visibility:visible}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:18px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:2px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block !important;visibility:visible !important;height:auto !important;padding-bottom:0;overflow:visible !important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:16px 15px;font-size:17px;line-height:18px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:2px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:8px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:18px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:18px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:16px;padding-bottom:16px}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:9px;margin-bottom:9px}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}.navbar-form .radio input[type=\"radio\"],.navbar-form .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:2px;border-top-left-radius:2px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:9px;margin-bottom:9px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:16px;margin-bottom:16px}@media (min-width:768px){.navbar-text{float:left;margin-left:15px;margin-right:15px}}@media (min-width:768px){.navbar-left{float:left !important}.navbar-right{float:right !important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#e7e7e7;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#333}.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:focus{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#080808;color:#fff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#fff}.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:18px;list-style:none;background-color:#f5f5f5;border-radius:2px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:\"/\\00a0\";padding:0 5px;color:#ccc}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:18px 0;border-radius:2px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857143;text-decoration:none;color:#337ab7;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:2px;border-top-left-radius:2px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:2px;border-top-right-radius:2px}.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:17px}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:1px;border-top-left-radius:1px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:1px;border-top-right-radius:1px}.pager{padding-left:0;margin:18px 0;list-style:none;text-align:center}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:hover,a.label:focus{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:hover,.label-default[href]:focus{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;color:#fff;line-height:1;vertical-align:baseline;white-space:nowrap;text-align:center;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-xs .badge{top:0;padding:1px 5px}a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding:30px 15px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron h1,.jumbotron .h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:20px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{border-radius:3px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding:48px 0}.container .jumbotron,.container-fluid .jumbotron{padding-left:60px;padding-right:60px}.jumbotron h1,.jumbotron .h1{font-size:58.5px}}.thumbnail{display:block;padding:4px;margin-bottom:18px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:2px;transition:border .2s ease-in-out}.thumbnail>img,.thumbnail a>img{margin-left:auto;margin-right:auto}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:18px;border:1px solid transparent;border-radius:2px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:18px;margin-bottom:18px;background-color:#f5f5f5;border-radius:2px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress-bar{float:left;width:0%;height:100%;font-size:12px;line-height:18px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);transition:width .6s ease}.progress-striped .progress-bar,.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:40px 40px}.progress.active .progress-bar,.progress-bar.active{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{zoom:1;overflow:hidden}.media-body{width:10000px}.media-object{display:block}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-left,.media-right,.media-body{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:2px;border-top-left-radius:2px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:2px;border-bottom-left-radius:2px}a.list-group-item{color:#555}a.list-group-item .list-group-item-heading{color:#333}a.list-group-item:hover,a.list-group-item:focus{text-decoration:none;color:#555;background-color:#f5f5f5}.list-group-item.disabled,.list-group-item.disabled:hover,.list-group-item.disabled:focus{background-color:#eee;color:#777;cursor:not-allowed}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:hover,.list-group-item.active:focus{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>.small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:hover .list-group-item-text,.list-group-item.active:focus .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:hover,a.list-group-item-success:focus{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:hover,a.list-group-item-success.active:focus{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:hover,a.list-group-item-info:focus{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:hover,a.list-group-item-info.active:focus{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:hover,a.list-group-item-warning:focus{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:hover,a.list-group-item-danger:focus{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:18px;background-color:#fff;border:1px solid transparent;border-radius:2px;box-shadow:0 1px 1px rgba(0,0,0,0.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:1px;border-top-left-radius:1px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:15px;color:inherit}.panel-title>a,.panel-title>small,.panel-title>.small,.panel-title>small>a,.panel-title>.small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:1px;border-bottom-left-radius:1px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:1px;border-top-left-radius:1px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:1px;border-bottom-left-radius:1px}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{margin-bottom:0}.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{padding-left:15px;padding-right:15px}.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{border-top-right-radius:1px;border-top-left-radius:1px}.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{border-top-left-radius:1px;border-top-right-radius:1px}.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{border-top-left-radius:1px}.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{border-top-right-radius:1px}.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{border-bottom-right-radius:1px;border-bottom-left-radius:1px}.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:1px;border-bottom-right-radius:1px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:1px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:1px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{border-left:0}.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{border-right:0}.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:18px}.panel-group .panel{margin-bottom:0;border-radius:2px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:2px;box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-lg{padding:24px;border-radius:3px}.well-sm{padding:9px;border-radius:1px}.close{float:right;font-size:19.5px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0, -25%);transform:translate(0, -25%);transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:3px;box-shadow:0 3px 9px rgba(0,0,0,0.5);-webkit-background-clip:padding-box;background-clip:padding-box;outline:0}.modal-backdrop{position:absolute;top:0;right:0;left:0;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5;min-height:16.42857143px}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;visibility:visible;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-weight:normal;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:2px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:1.42857143;text-align:left;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:3px;box-shadow:0 5px 10px rgba(0,0,0,0.2);white-space:normal}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:13px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:2px 2px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:\"\"}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);bottom:-11px}.popover.top>.arrow:after{content:\" \";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}.popover.right>.arrow:after{content:\" \";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);top:-11px}.popover.bottom>.arrow:after{content:\" \";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}.popover.left>.arrow:after{content:\" \";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.carousel{position:relative}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{line-height:1}@media all and (transform-3d), (-webkit-transform-3d){.carousel-inner>.item{transition:-webkit-transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000}.carousel-inner>.item.next,.carousel-inner>.item.active.right{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);left:0}.carousel-inner>.item.prev,.carousel-inner>.item.active.left{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);left:0}.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right,.carousel-inner>.item.active{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);left:0}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}.carousel-control.left{background-image:linear-gradient(to right, rgba(0,0,0,0.5) 0, rgba(0,0,0,0.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:linear-gradient(to right, rgba(0,0,0,0.0001) 0, rgba(0,0,0,0.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:hover,.carousel-control:focus{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%;margin-left:-10px}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%;margin-right:-10px}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;margin-top:-10px;line-height:1;font-family:serif}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:#000 \\9;background-color:rgba(0,0,0,0)}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,0.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-15px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-15px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-15px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-footer:before,.modal-footer:after{content:\" \";display:table}.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important;visibility:hidden !important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width:767px){.visible-xs{display:block !important}table.visible-xs{display:table}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width:767px){.visible-xs-block{display:block !important}}@media (max-width:767px){.visible-xs-inline{display:inline !important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block !important}table.visible-sm{display:table}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block !important}table.visible-md{display:table}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width:1200px){.visible-lg{display:block !important}table.visible-lg{display:table}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width:1200px){.visible-lg-block{display:block !important}}@media (min-width:1200px){.visible-lg-inline{display:inline !important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width:767px){.hidden-xs{display:none !important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}}@media (min-width:1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssb0NBQW9DLDBCQUEwQiw2QkFBNkIsQ0FBQyxLQUFLLFFBQVEsQ0FBQywyRkFBMkYsYUFBYSxDQUFDLDRCQUE0QixxQkFBcUIsdUJBQXVCLENBQUMsc0JBQXNCLGFBQWEsUUFBUSxDQUFDLGtCQUFrQixZQUFZLENBQUMsRUFBRSw0QkFBNEIsQ0FBQyxpQkFBaUIsU0FBUyxDQUFDLFlBQVksd0JBQXdCLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsY0FBYyxlQUFlLENBQUMsS0FBSyxnQkFBZ0IsVUFBVSxDQUFDLE1BQU0sYUFBYSxDQUFDLFFBQVEsY0FBYyxjQUFjLGtCQUFrQix1QkFBdUIsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxHQUE4RCx1QkFBdUIsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLGtCQUFrQixpQ0FBaUMsYUFBYSxDQUFDLHNDQUFzQyxjQUFjLGFBQWEsUUFBUSxDQUFDLE9BQU8sZ0JBQWdCLENBQUMsY0FBYyxtQkFBbUIsQ0FBQywwRUFBMEUsMEJBQTBCLGNBQWMsQ0FBQyxzQ0FBc0MsY0FBYyxDQUFDLGlEQUFpRCxTQUFTLFNBQVMsQ0FBQyxNQUFNLGtCQUFrQixDQUFDLDJDQUFvRyxzQkFBc0IsU0FBUyxDQUFDLGdHQUFnRyxXQUFXLENBQUMscUJBQXFCLDZCQUE2QixBQUEyRCxzQkFBc0IsQ0FBQyxtR0FBbUcsdUJBQXVCLENBQUMsU0FBUyx5QkFBeUIsYUFBYSw2QkFBNkIsQ0FBQyxPQUFPLFNBQVMsU0FBUyxDQUFDLFNBQVMsYUFBYSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSx5QkFBeUIsZ0JBQWdCLENBQUMsTUFBTSxTQUFTLENBQUMscUZBQXFGLGFBQWEsbUJBQW1C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Qix3QkFBd0IsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHVCQUF1QixDQUFDLGlCQUFpQixhQUFhLENBQUMseUJBQXlCLHNJQUFzSSxVQUFVLENBQUMsV0FBVyxVQUFVLENBQUMsV0FBVyxrQkFBa0IsQ0FBQyxXQUFXLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLGdCQUFnQixVQUFVLENBQUMsZ0JBQWdCLGtCQUFrQixDQUFDLGdCQUFnQixrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxnQkFBZ0IsU0FBUyxDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsZ0JBQWdCLENBQUMsZUFBZSxTQUFTLENBQUMsa0JBQWtCLGdCQUFnQixDQUFDLGtCQUFrQix3QkFBd0IsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsdUJBQXVCLENBQUMsaUJBQWlCLGFBQWEsQ0FBQyxDQUFDLHlCQUF5QixzSUFBc0ksVUFBVSxDQUFDLFdBQVcsVUFBVSxDQUFDLFdBQVcsa0JBQWtCLENBQUMsV0FBVyxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxpQkFBaUIsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLGdCQUFnQixrQkFBa0IsQ0FBQyxnQkFBZ0Isa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxVQUFVLENBQUMsZ0JBQWdCLFNBQVMsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGdCQUFnQixDQUFDLGVBQWUsU0FBUyxDQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHVCQUF1QixDQUFDLGlCQUFpQixhQUFhLENBQUMsQ0FBQywwQkFBMEIsc0lBQXNJLFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxXQUFXLGtCQUFrQixDQUFDLFdBQVcsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsaUJBQWlCLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyxnQkFBZ0Isa0JBQWtCLENBQUMsZ0JBQWdCLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsVUFBVSxDQUFDLGdCQUFnQixTQUFTLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxnQkFBZ0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxrQkFBa0IsZ0JBQWdCLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGtCQUFrQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENB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QixDQUFDLDRCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFDLDBCQUEwQixrQkFBa0Isd0JBQXdCLENBQUMsQ0FBQywwQkFBMEIsbUJBQW1CLHlCQUF5QixDQUFDLENBQUMsMEJBQTBCLHlCQUF5QiwrQkFBK0IsQ0FBQyxDQUFDLHlCQUF5QixXQUFXLHVCQUF1QixDQUFDLENBQUMsK0NBQStDLFdBQVcsdUJBQXVCLENBQUMsQ0FBQyxnREFBZ0QsV0FBVyx1QkFBdUIsQ0FBQyxDQUFDLDBCQUEwQixXQUFXLHVCQUF1QixDQUFDLENBQUMsZUFBZSx1QkFBdUIsQ0FBQyxhQUFhLGVBQWUsd0JBQXdCLENBQUMsb0JBQW9CLGFBQWEsQ0FBQyxpQkFBaUIsNEJBQTRCLENBQUMsa0NBQWtDLDZCQUE2QixDQUFDLENBQUMscUJBQXFCLHVCQUF1QixDQUFDLGFBQWEscUJBQXFCLHdCQUF3QixDQUFDLENBQUMsc0JBQXNCLHVCQUF1QixDQUFDLGFBQWEsc0JBQXNCLHlCQUF5QixDQUFDLENBQUMsNEJBQTRCLHVCQUF1QixDQUFDLGFBQWEsNEJBQTRCLCtCQUErQixDQUFDLENBQUMsYUFBYSxjQUFjLHVCQUF1QixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7Zm9udC1mYW1pbHk6J09wZW4gc2FucycsIHNhbnMtc2VyaWY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfWFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG1lbnUsbmF2LHNlY3Rpb24sc3VtbWFyeXtkaXNwbGF5OmJsb2NrfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9YTphY3RpdmUsYTpob3ZlcntvdXRsaW5lOjB9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGR9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOjAuNjdlbSAwfW1hcmt7YmFja2dyb3VuZDojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdXB7dG9wOi0wLjVlbX1zdWJ7Ym90dG9tOi0wLjI1ZW19aW1ne2JvcmRlcjowfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhyey1tb3otYm94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MH1wcmV7b3ZlcmZsb3c6YXV0b31jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsIG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7bWFyZ2luOjB9YnV0dG9ue292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixodG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0saW5wdXRbdHlwZT1cInJlc2V0XCJdLGlucHV0W3R5cGU9XCJzdWJtaXRcIl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtjdXJzb3I6cG9pbnRlcn1idXR0b25bZGlzYWJsZWRdLGh0bWwgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDtwYWRkaW5nOjB9aW5wdXR7bGluZS1oZWlnaHQ6bm9ybWFsfWlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxpbnB1dFt0eXBlPVwicmFkaW9cIl17LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1cInNlYXJjaFwiXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkOy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveH1pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO21hcmdpbjowIDJweDtwYWRkaW5nOjAuMzVlbSAwLjYyNWVtIDAuNzVlbX1sZWdlbmR7Ym9yZGVyOjA7cGFkZGluZzowfXRleHRhcmVhe292ZXJmbG93OmF1dG99b3B0Z3JvdXB7Zm9udC13ZWlnaHQ6Ym9sZH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjB9LyohIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzcyAqL0BtZWRpYSBwcmludHsqLCo6YmVmb3JlLCo6YWZ0ZXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50O2NvbG9yOiMwMDAgIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUgIWltcG9ydGFudH1hLGE6dmlzaXRlZHt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWFbaHJlZl06YWZ0ZXJ7Y29udGVudDpcIiAoXCIgYXR0cihocmVmKSBcIilcIn1hYmJyW3RpdGxlXTphZnRlcntjb250ZW50OlwiIChcIiBhdHRyKHRpdGxlKSBcIilcIn1hW2hyZWZePVwiI1wiXTphZnRlcixhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXJ7Y29udGVudDpcIlwifXByZSxibG9ja3F1b3Rle2JvcmRlcjoxcHggc29saWQgIzk5OTtwYWdlLWJyZWFrLWluc2lkZTphdm9pZH10aGVhZHtkaXNwbGF5OnRhYmxlLWhlYWRlci1ncm91cH10cixpbWd7cGFnZS1icmVhay1pbnNpZGU6YXZvaWR9aW1ne21heC13aWR0aDoxMDAlICFpbXBvcnRhbnR9cCxoMixoM3tvcnBoYW5zOjM7d2lkb3dzOjN9aDIsaDN7cGFnZS1icmVhay1hZnRlcjphdm9pZH1zZWxlY3R7YmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnR9Lm5hdmJhcntkaXNwbGF5Om5vbmV9LmJ0bj4uY2FyZXQsLmRyb3B1cD4uYnRuPi5jYXJldHtib3JkZXItdG9wLWNvbG9yOiMwMDAgIWltcG9ydGFudH0ubGFiZWx7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS50YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2UgIWltcG9ydGFudH0udGFibGUgdGQsLnRhYmxlIHRoe2JhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50fS50YWJsZS1ib3JkZXJlZCB0aCwudGFibGUtYm9yZGVyZWQgdGR7Ym9yZGVyOjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnR9fSp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fSo6YmVmb3JlLCo6YWZ0ZXJ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWh0bWx7Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfWJvZHl7Zm9udC1mYW1pbHk6XCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9aW5wdXQsYnV0dG9uLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXR9YXtjb2xvcjojMzM3YWI3O3RleHQtZGVjb3JhdGlvbjpub25lfWE6aG92ZXIsYTpmb2N1c3tjb2xvcjojMjM1MjdjO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9YTpmb2N1c3tvdXRsaW5lOnRoaW4gZG90dGVkO291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO291dGxpbmUtb2Zmc2V0Oi0ycHh9ZmlndXJle21hcmdpbjowfWltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmltZy1yZXNwb25zaXZlLC50aHVtYm5haWw+aW1nLC50aHVtYm5haWwgYT5pbWcsLmNhcm91c2VsLWlubmVyPi5pdGVtPmltZywuY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30uaW1nLXJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LmltZy10aHVtYm5haWx7cGFkZGluZzo0cHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0MztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LmltZy1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCV9aHJ7bWFyZ2luLXRvcDoxOHB4O21hcmdpbi1ib3R0b206MThweDtib3JkZXI6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlfS5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO2JvcmRlcjowfS5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsLnNyLW9ubHktZm9jdXNhYmxlOmZvY3Vze3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDphdXRvO2hlaWdodDphdXRvO21hcmdpbjowO292ZXJmbG93OnZpc2libGU7Y2xpcDphdXRvfWgxLGgyLGgzLGg0LGg1LGg2LC5oMSwuaDIsLmgzLC5oNCwuaDUsLmg2e2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMTtjb2xvcjppbmhlcml0fWgxIHNtYWxsLGgyIHNtYWxsLGgzIHNtYWxsLGg0IHNtYWxsLGg1IHNtYWxsLGg2IHNtYWxsLC5oMSBzbWFsbCwuaDIgc21hbGwsLmgzIHNtYWxsLC5oNCBzbWFsbCwuaDUgc21hbGwsLmg2IHNtYWxsLGgxIC5zbWFsbCxoMiAuc21hbGwsaDMgLnNtYWxsLGg0IC5zbWFsbCxoNSAuc21hbGwsaDYgLnNtYWxsLC5oMSAuc21hbGwsLmgyIC5zbWFsbCwuaDMgLnNtYWxsLC5oNCAuc21hbGwsLmg1IC5zbWFsbCwuaDYgLnNtYWxse2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxO2NvbG9yOiM3Nzd9aDEsLmgxLGgyLC5oMixoMywuaDN7bWFyZ2luLXRvcDoxOHB4O21hcmdpbi1ib3R0b206OXB4fWgxIHNtYWxsLC5oMSBzbWFsbCxoMiBzbWFsbCwuaDIgc21hbGwsaDMgc21hbGwsLmgzIHNtYWxsLGgxIC5zbWFsbCwuaDEgLnNtYWxsLGgyIC5zbWFsbCwuaDIgLnNtYWxsLGgzIC5zbWFsbCwuaDMgLnNtYWxse2ZvbnQtc2l6ZTo2NSV9aDQsLmg0LGg1LC5oNSxoNiwuaDZ7bWFyZ2luLXRvcDo5cHg7bWFyZ2luLWJvdHRvbTo5cHh9aDQgc21hbGwsLmg0IHNtYWxsLGg1IHNtYWxsLC5oNSBzbWFsbCxoNiBzbWFsbCwuaDYgc21hbGwsaDQgLnNtYWxsLC5oNCAuc21hbGwsaDUgLnNtYWxsLC5oNSAuc21hbGwsaDYgLnNtYWxsLC5oNiAuc21hbGx7Zm9udC1zaXplOjc1JX1oMSwuaDF7Zm9udC1zaXplOjMzcHh9aDIsLmgye2ZvbnQtc2l6ZToyN3B4fWgzLC5oM3tmb250LXNpemU6MjNweH1oNCwuaDR7Zm9udC1zaXplOjE3cHh9aDUsLmg1e2ZvbnQtc2l6ZToxM3B4fWg2LC5oNntmb250LXNpemU6MTJweH1we21hcmdpbjowIDAgOXB4fS5sZWFke21hcmdpbi1ib3R0b206MThweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDozMDA7bGluZS1oZWlnaHQ6MS40fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubGVhZHtmb250LXNpemU6MTkuNXB4fX1zbWFsbCwuc21hbGx7Zm9udC1zaXplOjkyJX1tYXJrLC5tYXJre2JhY2tncm91bmQtY29sb3I6I2ZjZjhlMztwYWRkaW5nOi4yZW19LnRleHQtbGVmdHt0ZXh0LWFsaWduOmxlZnR9LnRleHQtcmlnaHR7dGV4dC1hbGlnbjpyaWdodH0udGV4dC1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnRleHQtanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9LnRleHQtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0udGV4dC1sb3dlcmNhc2V7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfS50ZXh0LXVwcGVyY2FzZXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnRleHQtY2FwaXRhbGl6ZXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS50ZXh0LW11dGVke2NvbG9yOiM3Nzd9LnRleHQtcHJpbWFyeXtjb2xvcjojMzM3YWI3fWEudGV4dC1wcmltYXJ5OmhvdmVye2NvbG9yOiMyODYwOTB9LnRleHQtc3VjY2Vzc3tjb2xvcjojM2M3NjNkfWEudGV4dC1zdWNjZXNzOmhvdmVye2NvbG9yOiMyYjU0MmN9LnRleHQtaW5mb3tjb2xvcjojMzE3MDhmfWEudGV4dC1pbmZvOmhvdmVye2NvbG9yOiMyNDUyNjl9LnRleHQtd2FybmluZ3tjb2xvcjojOGE2ZDNifWEudGV4dC13YXJuaW5nOmhvdmVye2NvbG9yOiM2NjUxMmN9LnRleHQtZGFuZ2Vye2NvbG9yOiNhOTQ0NDJ9YS50ZXh0LWRhbmdlcjpob3Zlcntjb2xvcjojODQzNTM0fS5iZy1wcmltYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3fWEuYmctcHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyODYwOTB9LmJnLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4fWEuYmctc3VjY2Vzczpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjMWUyYjN9LmJnLWluZm97YmFja2dyb3VuZC1jb2xvcjojZDllZGY3fWEuYmctaW5mbzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNhZmQ5ZWV9LmJnLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzfWEuYmctd2FybmluZzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmN2VjYjV9LmJnLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGV9YS5iZy1kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZTRiOWI5fS5wYWdlLWhlYWRlcntwYWRkaW5nLWJvdHRvbTo4cHg7bWFyZ2luOjM2cHggMCAxOHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWV9dWwsb2x7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206OXB4fXVsIHVsLG9sIHVsLHVsIG9sLG9sIG9se21hcmdpbi1ib3R0b206MH0ubGlzdC11bnN0eWxlZHtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlOm5vbmV9Lmxpc3QtaW5saW5le3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGU6bm9uZTttYXJnaW4tbGVmdDotNXB4fS5saXN0LWlubGluZT5saXtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6NXB4fWRse21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjE4cHh9ZHQsZGR7bGluZS1oZWlnaHQ6MS40Mjg1NzE0M31kdHtmb250LXdlaWdodDpib2xkfWRke21hcmdpbi1sZWZ0OjB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5kbC1ob3Jpem9udGFsIGR0e2Zsb2F0OmxlZnQ7d2lkdGg6MTYwcHg7Y2xlYXI6bGVmdDt0ZXh0LWFsaWduOnJpZ2h0O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uZGwtaG9yaXpvbnRhbCBkZHttYXJnaW4tbGVmdDoxODBweH19YWJiclt0aXRsZV0sYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXXtjdXJzb3I6aGVscDtib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgIzc3N30uaW5pdGlhbGlzbXtmb250LXNpemU6OTAlO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1ibG9ja3F1b3Rle3BhZGRpbmc6OXB4IDE4cHg7bWFyZ2luOjAgMCAxOHB4O2ZvbnQtc2l6ZToxNi4yNXB4O2JvcmRlci1sZWZ0OjVweCBzb2xpZCAjZWVlfWJsb2NrcXVvdGUgcDpsYXN0LWNoaWxkLGJsb2NrcXVvdGUgdWw6bGFzdC1jaGlsZCxibG9ja3F1b3RlIG9sOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfWJsb2NrcXVvdGUgZm9vdGVyLGJsb2NrcXVvdGUgc21hbGwsYmxvY2txdW90ZSAuc21hbGx7ZGlzcGxheTpibG9jaztmb250LXNpemU6ODAlO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7Y29sb3I6Izc3N31ibG9ja3F1b3RlIGZvb3RlcjpiZWZvcmUsYmxvY2txdW90ZSBzbWFsbDpiZWZvcmUsYmxvY2txdW90ZSAuc21hbGw6YmVmb3Jle2NvbnRlbnQ6J1xcMjAxNCBcXDAwQTAnfS5ibG9ja3F1b3RlLXJldmVyc2UsYmxvY2txdW90ZS5wdWxsLXJpZ2h0e3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLWxlZnQ6MDtib3JkZXItcmlnaHQ6NXB4IHNvbGlkICNlZWU7Ym9yZGVyLWxlZnQ6MDt0ZXh0LWFsaWduOnJpZ2h0fS5ibG9ja3F1b3RlLXJldmVyc2UgZm9vdGVyOmJlZm9yZSxibG9ja3F1b3RlLnB1bGwtcmlnaHQgZm9vdGVyOmJlZm9yZSwuYmxvY2txdW90ZS1yZXZlcnNlIHNtYWxsOmJlZm9yZSxibG9ja3F1b3RlLnB1bGwtcmlnaHQgc21hbGw6YmVmb3JlLC5ibG9ja3F1b3RlLXJldmVyc2UgLnNtYWxsOmJlZm9yZSxibG9ja3F1b3RlLnB1bGwtcmlnaHQgLnNtYWxsOmJlZm9yZXtjb250ZW50OicnfS5ibG9ja3F1b3RlLXJldmVyc2UgZm9vdGVyOmFmdGVyLGJsb2NrcXVvdGUucHVsbC1yaWdodCBmb290ZXI6YWZ0ZXIsLmJsb2NrcXVvdGUtcmV2ZXJzZSBzbWFsbDphZnRlcixibG9ja3F1b3RlLnB1bGwtcmlnaHQgc21hbGw6YWZ0ZXIsLmJsb2NrcXVvdGUtcmV2ZXJzZSAuc21hbGw6YWZ0ZXIsYmxvY2txdW90ZS5wdWxsLXJpZ2h0IC5zbWFsbDphZnRlcntjb250ZW50OidcXDAwQTAgXFwyMDE0J31hZGRyZXNze21hcmdpbi1ib3R0b206MThweDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjQyODU3MTQzfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Ok1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlfWNvZGV7cGFkZGluZzoycHggNHB4O2ZvbnQtc2l6ZTo5MCU7Y29sb3I6I2M3MjU0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmOWYyZjQ7Ym9yZGVyLXJhZGl1czoycHh9a2Jke3BhZGRpbmc6MnB4IDRweDtmb250LXNpemU6OTAlO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzMzO2JvcmRlci1yYWRpdXM6MXB4Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLDAuMjUpO2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwwLjI1KX1rYmQga2Jke3BhZGRpbmc6MDtmb250LXNpemU6MTAwJTtmb250LXdlaWdodDpib2xkOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX1wcmV7ZGlzcGxheTpibG9jaztwYWRkaW5nOjguNXB4O21hcmdpbjowIDAgOXB4O2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7d29yZC1icmVhazpicmVhay1hbGw7d29yZC13cmFwOmJyZWFrLXdvcmQ7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6MnB4fXByZSBjb2Rle3BhZGRpbmc6MDtmb250LXNpemU6aW5oZXJpdDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOnByZS13cmFwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czowfS5wcmUtc2Nyb2xsYWJsZXttYXgtaGVpZ2h0OjM0MHB4O292ZXJmbG93LXk6c2Nyb2xsfS5jb250YWluZXJ7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0bztwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjE1cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jb250YWluZXJ7d2lkdGg6NzUwcHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuY29udGFpbmVye3dpZHRoOjk3MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5jb250YWluZXJ7d2lkdGg6MTE3MHB4fX0uY29udGFpbmVyLWZsdWlke21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1sZWZ0OmF1dG87cGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4fS5yb3d7bWFyZ2luLWxlZnQ6LTE1cHg7bWFyZ2luLXJpZ2h0Oi0xNXB4fS5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTJ7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDoxcHg7cGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4fS5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTJ7ZmxvYXQ6bGVmdH0uY29sLXhzLTEye3dpZHRoOjEwMCV9LmNvbC14cy0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC14cy0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC14cy05e3dpZHRoOjc1JX0uY29sLXhzLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wteHMtN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC14cy02e3dpZHRoOjUwJX0uY29sLXhzLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wteHMtNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC14cy0ze3dpZHRoOjI1JX0uY29sLXhzLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wteHMtMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLXhzLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLXhzLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wteHMtcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wteHMtcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wteHMtcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wteHMtcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLXhzLXB1bGwtMHtyaWdodDphdXRvfS5jb2wteHMtcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC14cy1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wteHMtcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLXhzLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtNntsZWZ0OjUwJX0uY29sLXhzLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtM3tsZWZ0OjI1JX0uY29sLXhzLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wteHMtcHVzaC0we2xlZnQ6YXV0b30uY29sLXhzLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wteHMtb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLXhzLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC14cy1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC14cy1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC14cy1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLXhzLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTJ7ZmxvYXQ6bGVmdH0uY29sLXNtLTEye3dpZHRoOjEwMCV9LmNvbC1zbS0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC1zbS0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC1zbS05e3dpZHRoOjc1JX0uY29sLXNtLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtc20tN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC1zbS02e3dpZHRoOjUwJX0uY29sLXNtLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtc20tNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC1zbS0ze3dpZHRoOjI1JX0uY29sLXNtLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtc20tMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLXNtLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLXNtLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wtc20tcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC1zbS1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wtc20tcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLXNtLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC1zbS1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wtc20tcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLXNtLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC1zbS1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wtc20tcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLXNtLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLXNtLXB1bGwtMHtyaWdodDphdXRvfS5jb2wtc20tcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC1zbS1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wtc20tcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLXNtLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLXNtLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLXNtLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLXNtLXB1c2gtNntsZWZ0OjUwJX0uY29sLXNtLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLXNtLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLXNtLXB1c2gtM3tsZWZ0OjI1JX0uY29sLXNtLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLXNtLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wtc20tcHVzaC0we2xlZnQ6YXV0b30uY29sLXNtLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wtc20tb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLXNtLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC1zbS1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC1zbS1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1zbS1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1zbS1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC1zbS1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC1zbS1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC1zbS1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC1zbS1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC1zbS1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLXNtLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEye2Zsb2F0OmxlZnR9LmNvbC1tZC0xMnt3aWR0aDoxMDAlfS5jb2wtbWQtMTF7d2lkdGg6OTEuNjY2NjY2NjclfS5jb2wtbWQtMTB7d2lkdGg6ODMuMzMzMzMzMzMlfS5jb2wtbWQtOXt3aWR0aDo3NSV9LmNvbC1tZC04e3dpZHRoOjY2LjY2NjY2NjY3JX0uY29sLW1kLTd7d2lkdGg6NTguMzMzMzMzMzMlfS5jb2wtbWQtNnt3aWR0aDo1MCV9LmNvbC1tZC01e3dpZHRoOjQxLjY2NjY2NjY3JX0uY29sLW1kLTR7d2lkdGg6MzMuMzMzMzMzMzMlfS5jb2wtbWQtM3t3aWR0aDoyNSV9LmNvbC1tZC0ye3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLW1kLTF7d2lkdGg6OC4zMzMzMzMzMyV9LmNvbC1tZC1wdWxsLTEye3JpZ2h0OjEwMCV9LmNvbC1tZC1wdWxsLTExe3JpZ2h0OjkxLjY2NjY2NjY3JX0uY29sLW1kLXB1bGwtMTB7cmlnaHQ6ODMuMzMzMzMzMzMlfS5jb2wtbWQtcHVsbC05e3JpZ2h0Ojc1JX0uY29sLW1kLXB1bGwtOHtyaWdodDo2Ni42NjY2NjY2NyV9LmNvbC1tZC1wdWxsLTd7cmlnaHQ6NTguMzMzMzMzMzMlfS5jb2wtbWQtcHVsbC02e3JpZ2h0OjUwJX0uY29sLW1kLXB1bGwtNXtyaWdodDo0MS42NjY2NjY2NyV9LmNvbC1tZC1wdWxsLTR7cmlnaHQ6MzMuMzMzMzMzMzMlfS5jb2wtbWQtcHVsbC0ze3JpZ2h0OjI1JX0uY29sLW1kLXB1bGwtMntyaWdodDoxNi42NjY2NjY2NyV9LmNvbC1tZC1wdWxsLTF7cmlnaHQ6OC4zMzMzMzMzMyV9LmNvbC1tZC1wdWxsLTB7cmlnaHQ6YXV0b30uY29sLW1kLXB1c2gtMTJ7bGVmdDoxMDAlfS5jb2wtbWQtcHVzaC0xMXtsZWZ0OjkxLjY2NjY2NjY3JX0uY29sLW1kLXB1c2gtMTB7bGVmdDo4My4zMzMzMzMzMyV9LmNvbC1tZC1wdXNoLTl7bGVmdDo3NSV9LmNvbC1tZC1wdXNoLTh7bGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1tZC1wdXNoLTd7bGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1tZC1wdXNoLTZ7bGVmdDo1MCV9LmNvbC1tZC1wdXNoLTV7bGVmdDo0MS42NjY2NjY2NyV9LmNvbC1tZC1wdXNoLTR7bGVmdDozMy4zMzMzMzMzMyV9LmNvbC1tZC1wdXNoLTN7bGVmdDoyNSV9LmNvbC1tZC1wdXNoLTJ7bGVmdDoxNi42NjY2NjY2NyV9LmNvbC1tZC1wdXNoLTF7bGVmdDo4LjMzMzMzMzMzJX0uY29sLW1kLXB1c2gtMHtsZWZ0OmF1dG99LmNvbC1tZC1vZmZzZXQtMTJ7bWFyZ2luLWxlZnQ6MTAwJX0uY29sLW1kLW9mZnNldC0xMXttYXJnaW4tbGVmdDo5MS42NjY2NjY2NyV9LmNvbC1tZC1vZmZzZXQtMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlfS5jb2wtbWQtb2Zmc2V0LTl7bWFyZ2luLWxlZnQ6NzUlfS5jb2wtbWQtb2Zmc2V0LTh7bWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclfS5jb2wtbWQtb2Zmc2V0LTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlfS5jb2wtbWQtb2Zmc2V0LTZ7bWFyZ2luLWxlZnQ6NTAlfS5jb2wtbWQtb2Zmc2V0LTV7bWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclfS5jb2wtbWQtb2Zmc2V0LTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlfS5jb2wtbWQtb2Zmc2V0LTN7bWFyZ2luLWxlZnQ6MjUlfS5jb2wtbWQtb2Zmc2V0LTJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclfS5jb2wtbWQtb2Zmc2V0LTF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyV9LmNvbC1tZC1vZmZzZXQtMHttYXJnaW4tbGVmdDowfX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTJ7ZmxvYXQ6bGVmdH0uY29sLWxnLTEye3dpZHRoOjEwMCV9LmNvbC1sZy0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC1sZy0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC1sZy05e3dpZHRoOjc1JX0uY29sLWxnLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtbGctN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC1sZy02e3dpZHRoOjUwJX0uY29sLWxnLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtbGctNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC1sZy0ze3dpZHRoOjI1JX0uY29sLWxnLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtbGctMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLWxnLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLWxnLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wtbGctcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wtbGctcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wtbGctcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wtbGctcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLWxnLXB1bGwtMHtyaWdodDphdXRvfS5jb2wtbGctcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC1sZy1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wtbGctcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLWxnLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtNntsZWZ0OjUwJX0uY29sLWxnLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtM3tsZWZ0OjI1JX0uY29sLWxnLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wtbGctcHVzaC0we2xlZnQ6YXV0b30uY29sLWxnLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wtbGctb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLWxnLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC1sZy1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC1sZy1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC1sZy1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLWxnLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9fXRhYmxle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Y2FwdGlvbntwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2NvbG9yOiM3Nzc7dGV4dC1hbGlnbjpsZWZ0fXRoe3RleHQtYWxpZ246bGVmdH0udGFibGV7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjE4cHh9LnRhYmxlPnRoZWFkPnRyPnRoLC50YWJsZT50Ym9keT50cj50aCwudGFibGU+dGZvb3Q+dHI+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLC50YWJsZT50Ym9keT50cj50ZCwudGFibGU+dGZvb3Q+dHI+dGR7cGFkZGluZzo4cHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mzt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZH0udGFibGU+dGhlYWQ+dHI+dGh7dmVydGljYWwtYWxpZ246Ym90dG9tO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZGR9LnRhYmxlPmNhcHRpb24rdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGgsLnRhYmxlPmNvbGdyb3VwK3RoZWFkPnRyOmZpcnN0LWNoaWxkPnRoLC50YWJsZT50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZD50aCwudGFibGU+Y2FwdGlvbit0aGVhZD50cjpmaXJzdC1jaGlsZD50ZCwudGFibGU+Y29sZ3JvdXArdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnRhYmxlPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkPnRke2JvcmRlci10b3A6MH0udGFibGU+dGJvZHkrdGJvZHl7Ym9yZGVyLXRvcDoycHggc29saWQgI2RkZH0udGFibGUgLnRhYmxle2JhY2tncm91bmQtY29sb3I6I2ZmZn0udGFibGUtY29uZGVuc2VkPnRoZWFkPnRyPnRoLC50YWJsZS1jb25kZW5zZWQ+dGJvZHk+dHI+dGgsLnRhYmxlLWNvbmRlbnNlZD50Zm9vdD50cj50aCwudGFibGUtY29uZGVuc2VkPnRoZWFkPnRyPnRkLC50YWJsZS1jb25kZW5zZWQ+dGJvZHk+dHI+dGQsLnRhYmxlLWNvbmRlbnNlZD50Zm9vdD50cj50ZHtwYWRkaW5nOjVweH0udGFibGUtYm9yZGVyZWR7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfS50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aCwudGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoLC50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZCwudGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRke2JvcmRlcjoxcHggc29saWQgI2RkZH0udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRke2JvcmRlci1ib3R0b20td2lkdGg6MnB4fS50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1vZi10eXBlKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS50YWJsZS1ob3Zlcj50Ym9keT50cjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9dGFibGUgY29sW2NsYXNzKj1cImNvbC1cIl17cG9zaXRpb246c3RhdGljO2Zsb2F0Om5vbmU7ZGlzcGxheTp0YWJsZS1jb2x1bW59dGFibGUgdGRbY2xhc3MqPVwiY29sLVwiXSx0YWJsZSB0aFtjbGFzcyo9XCJjb2wtXCJde3Bvc2l0aW9uOnN0YXRpYztmbG9hdDpub25lO2Rpc3BsYXk6dGFibGUtY2VsbH0udGFibGU+dGhlYWQ+dHI+dGQuYWN0aXZlLC50YWJsZT50Ym9keT50cj50ZC5hY3RpdmUsLnRhYmxlPnRmb290PnRyPnRkLmFjdGl2ZSwudGFibGU+dGhlYWQ+dHI+dGguYWN0aXZlLC50YWJsZT50Ym9keT50cj50aC5hY3RpdmUsLnRhYmxlPnRmb290PnRyPnRoLmFjdGl2ZSwudGFibGU+dGhlYWQ+dHIuYWN0aXZlPnRkLC50YWJsZT50Ym9keT50ci5hY3RpdmU+dGQsLnRhYmxlPnRmb290PnRyLmFjdGl2ZT50ZCwudGFibGU+dGhlYWQ+dHIuYWN0aXZlPnRoLC50YWJsZT50Ym9keT50ci5hY3RpdmU+dGgsLnRhYmxlPnRmb290PnRyLmFjdGl2ZT50aHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnRhYmxlLWhvdmVyPnRib2R5PnRyPnRkLmFjdGl2ZTpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGguYWN0aXZlOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5hY3RpdmU6aG92ZXI+dGQsLnRhYmxlLWhvdmVyPnRib2R5PnRyOmhvdmVyPi5hY3RpdmUsLnRhYmxlLWhvdmVyPnRib2R5PnRyLmFjdGl2ZTpob3Zlcj50aHtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LnRhYmxlPnRoZWFkPnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRib2R5PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRib2R5PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGh7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4fS50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5zdWNjZXNzOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5zdWNjZXNzOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5zdWNjZXNzOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uc3VjY2VzcywudGFibGUtaG92ZXI+dGJvZHk+dHIuc3VjY2Vzczpob3Zlcj50aHtiYWNrZ3JvdW5kLWNvbG9yOiNkMGU5YzZ9LnRhYmxlPnRoZWFkPnRyPnRkLmluZm8sLnRhYmxlPnRib2R5PnRyPnRkLmluZm8sLnRhYmxlPnRmb290PnRyPnRkLmluZm8sLnRhYmxlPnRoZWFkPnRyPnRoLmluZm8sLnRhYmxlPnRib2R5PnRyPnRoLmluZm8sLnRhYmxlPnRmb290PnRyPnRoLmluZm8sLnRhYmxlPnRoZWFkPnRyLmluZm8+dGQsLnRhYmxlPnRib2R5PnRyLmluZm8+dGQsLnRhYmxlPnRmb290PnRyLmluZm8+dGQsLnRhYmxlPnRoZWFkPnRyLmluZm8+dGgsLnRhYmxlPnRib2R5PnRyLmluZm8+dGgsLnRhYmxlPnRmb290PnRyLmluZm8+dGh7YmFja2dyb3VuZC1jb2xvcjojZDllZGY3fS50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5pbmZvOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5pbmZvOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5pbmZvOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uaW5mbywudGFibGUtaG92ZXI+dGJvZHk+dHIuaW5mbzpob3Zlcj50aHtiYWNrZ3JvdW5kLWNvbG9yOiNjNGUzZjN9LnRhYmxlPnRoZWFkPnRyPnRkLndhcm5pbmcsLnRhYmxlPnRib2R5PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRmb290PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyPnRoLndhcm5pbmcsLnRhYmxlPnRib2R5PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRmb290PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGQsLnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGgsLnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGgsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGh7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzfS50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC53YXJuaW5nOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC53YXJuaW5nOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci53YXJuaW5nOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4ud2FybmluZywudGFibGUtaG92ZXI+dGJvZHk+dHIud2FybmluZzpob3Zlcj50aHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWYyY2N9LnRhYmxlPnRoZWFkPnRyPnRkLmRhbmdlciwudGFibGU+dGJvZHk+dHI+dGQuZGFuZ2VyLC50YWJsZT50Zm9vdD50cj50ZC5kYW5nZXIsLnRhYmxlPnRoZWFkPnRyPnRoLmRhbmdlciwudGFibGU+dGJvZHk+dHI+dGguZGFuZ2VyLC50YWJsZT50Zm9vdD50cj50aC5kYW5nZXIsLnRhYmxlPnRoZWFkPnRyLmRhbmdlcj50ZCwudGFibGU+dGJvZHk+dHIuZGFuZ2VyPnRkLC50YWJsZT50Zm9vdD50ci5kYW5nZXI+dGQsLnRhYmxlPnRoZWFkPnRyLmRhbmdlcj50aCwudGFibGU+dGJvZHk+dHIuZGFuZ2VyPnRoLC50YWJsZT50Zm9vdD50ci5kYW5nZXI+dGh7YmFja2dyb3VuZC1jb2xvcjojZjJkZWRlfS50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5kYW5nZXI6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLmRhbmdlcjpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHIuZGFuZ2VyOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uZGFuZ2VyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5kYW5nZXI6aG92ZXI+dGh7YmFja2dyb3VuZC1jb2xvcjojZWJjY2NjfS50YWJsZS1yZXNwb25zaXZle292ZXJmbG93LXg6YXV0bzttaW4taGVpZ2h0OjAuMDElfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpey50YWJsZS1yZXNwb25zaXZle3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxMy41cHg7b3ZlcmZsb3cteTpoaWRkZW47LW1zLW92ZXJmbG93LXN0eWxlOi1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtib3JkZXI6MXB4IHNvbGlkICNkZGR9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxle21hcmdpbi1ib3R0b206MH0udGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGhlYWQ+dHI+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRib2R5PnRyPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50Zm9vdD50cj50aCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGhlYWQ+dHI+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRib2R5PnRyPnRkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50Zm9vdD50cj50ZHt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVke2JvcmRlcjowfS50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0OjB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGR7Ym9yZGVyLWJvdHRvbTowfX1maWVsZHNldHtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7bWluLXdpZHRoOjB9bGVnZW5ke2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjA7bWFyZ2luLWJvdHRvbToxOHB4O2ZvbnQtc2l6ZToxOS41cHg7bGluZS1oZWlnaHQ6aW5oZXJpdDtjb2xvcjojMzMzO2JvcmRlcjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU1ZTV9bGFiZWx7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWF4LXdpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTo1cHg7Zm9udC13ZWlnaHQ6Ym9sZH1pbnB1dFt0eXBlPVwic2VhcmNoXCJdey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1pbnB1dFt0eXBlPVwicmFkaW9cIl0saW5wdXRbdHlwZT1cImNoZWNrYm94XCJde21hcmdpbjo0cHggMCAwO21hcmdpbi10b3A6MXB4IFxcOTtsaW5lLWhlaWdodDpub3JtYWx9aW5wdXRbdHlwZT1cImZpbGVcIl17ZGlzcGxheTpibG9ja31pbnB1dFt0eXBlPVwicmFuZ2VcIl17ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfXNlbGVjdFttdWx0aXBsZV0sc2VsZWN0W3NpemVde2hlaWdodDphdXRvfWlucHV0W3R5cGU9XCJmaWxlXCJdOmZvY3VzLGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyxpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXN7b3V0bGluZTp0aGluIGRvdHRlZDtvdXRsaW5lOjVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtvdXRsaW5lLW9mZnNldDotMnB4fW91dHB1dHtkaXNwbGF5OmJsb2NrO3BhZGRpbmctdG9wOjdweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiM1NTV9LmZvcm0tY29udHJvbHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjMycHg7cGFkZGluZzo2cHggMTJweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KTstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzOy1vLXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1czt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXN9LmZvcm0tY29udHJvbDpmb2N1c3tib3JkZXItY29sb3I6I2NjYztvdXRsaW5lOjA7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42KX0uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM5OTk7b3BhY2l0eToxfS5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiM5OTl9LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldLGZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9se2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7b3BhY2l0eToxfXRleHRhcmVhLmZvcm0tY29udHJvbHtoZWlnaHQ6YXV0b31pbnB1dFt0eXBlPVwic2VhcmNoXCJdey13ZWJraXQtYXBwZWFyYW5jZTpub25lfUBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCl7aW5wdXRbdHlwZT1cImRhdGVcIl0saW5wdXRbdHlwZT1cInRpbWVcIl0saW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLGlucHV0W3R5cGU9XCJtb250aFwiXXtsaW5lLWhlaWdodDozMnB4fWlucHV0W3R5cGU9XCJkYXRlXCJdLmlucHV0LXNtLGlucHV0W3R5cGU9XCJ0aW1lXCJdLmlucHV0LXNtLGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXS5pbnB1dC1zbSxpbnB1dFt0eXBlPVwibW9udGhcIl0uaW5wdXQtc20sLmlucHV0LWdyb3VwLXNtIGlucHV0W3R5cGU9XCJkYXRlXCJdLC5pbnB1dC1ncm91cC1zbSBpbnB1dFt0eXBlPVwidGltZVwiXSwuaW5wdXQtZ3JvdXAtc20gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLC5pbnB1dC1ncm91cC1zbSBpbnB1dFt0eXBlPVwibW9udGhcIl17bGluZS1oZWlnaHQ6MzBweH1pbnB1dFt0eXBlPVwiZGF0ZVwiXS5pbnB1dC1sZyxpbnB1dFt0eXBlPVwidGltZVwiXS5pbnB1dC1sZyxpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0uaW5wdXQtbGcsaW5wdXRbdHlwZT1cIm1vbnRoXCJdLmlucHV0LWxnLC5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSwuaW5wdXQtZ3JvdXAtbGcgaW5wdXRbdHlwZT1cInRpbWVcIl0sLmlucHV0LWdyb3VwLWxnIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSwuaW5wdXQtZ3JvdXAtbGcgaW5wdXRbdHlwZT1cIm1vbnRoXCJde2xpbmUtaGVpZ2h0OjQ1cHh9fS5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweH0ucmFkaW8sLmNoZWNrYm94e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweH0ucmFkaW8gbGFiZWwsLmNoZWNrYm94IGxhYmVse21pbi1oZWlnaHQ6MThweDtwYWRkaW5nLWxlZnQ6MjBweDttYXJnaW4tYm90dG9tOjA7Zm9udC13ZWlnaHQ6bm9ybWFsO2N1cnNvcjpwb2ludGVyfS5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sLnJhZGlvLWlubGluZSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwuY2hlY2tib3gtaW5saW5lIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDotMjBweDttYXJnaW4tdG9wOjRweCBcXDl9LnJhZGlvKy5yYWRpbywuY2hlY2tib3grLmNoZWNrYm94e21hcmdpbi10b3A6LTVweH0ucmFkaW8taW5saW5lLC5jaGVja2JveC1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0OjIwcHg7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtmb250LXdlaWdodDpub3JtYWw7Y3Vyc29yOnBvaW50ZXJ9LnJhZGlvLWlubGluZSsucmFkaW8taW5saW5lLC5jaGVja2JveC1pbmxpbmUrLmNoZWNrYm94LWlubGluZXttYXJnaW4tdG9wOjA7bWFyZ2luLWxlZnQ6MTBweH1pbnB1dFt0eXBlPVwicmFkaW9cIl1bZGlzYWJsZWRdLGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVtkaXNhYmxlZF0saW5wdXRbdHlwZT1cInJhZGlvXCJdLmRpc2FibGVkLGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5kaXNhYmxlZCxmaWVsZHNldFtkaXNhYmxlZF0gaW5wdXRbdHlwZT1cInJhZGlvXCJdLGZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17Y3Vyc29yOm5vdC1hbGxvd2VkfS5yYWRpby1pbmxpbmUuZGlzYWJsZWQsLmNoZWNrYm94LWlubGluZS5kaXNhYmxlZCxmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvLWlubGluZSxmaWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LWlubGluZXtjdXJzb3I6bm90LWFsbG93ZWR9LnJhZGlvLmRpc2FibGVkIGxhYmVsLC5jaGVja2JveC5kaXNhYmxlZCBsYWJlbCxmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvIGxhYmVsLGZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3ggbGFiZWx7Y3Vyc29yOm5vdC1hbGxvd2VkfS5mb3JtLWNvbnRyb2wtc3RhdGlje3BhZGRpbmctdG9wOjdweDtwYWRkaW5nLWJvdHRvbTo3cHg7bWFyZ2luLWJvdHRvbTowfS5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LWxnLC5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LXNte3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MH0uaW5wdXQtc217aGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czoxcHh9c2VsZWN0LmlucHV0LXNte2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHh9dGV4dGFyZWEuaW5wdXQtc20sc2VsZWN0W211bHRpcGxlXS5pbnB1dC1zbXtoZWlnaHQ6YXV0b30uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9se2hlaWdodDozMHB4O3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6MXB4fXNlbGVjdC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjMwcHg7bGluZS1oZWlnaHQ6MzBweH10ZXh0YXJlYS5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OmF1dG99LmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbC1zdGF0aWN7aGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjV9LmlucHV0LWxne2hlaWdodDo0NXB4O3BhZGRpbmc6MTBweCAxNnB4O2ZvbnQtc2l6ZToxN3B4O2xpbmUtaGVpZ2h0OjEuMzMzMzMzMztib3JkZXItcmFkaXVzOjNweH1zZWxlY3QuaW5wdXQtbGd7aGVpZ2h0OjQ1cHg7bGluZS1oZWlnaHQ6NDVweH10ZXh0YXJlYS5pbnB1dC1sZyxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWxne2hlaWdodDphdXRvfS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjQ1cHg7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzO2JvcmRlci1yYWRpdXM6M3B4fXNlbGVjdC5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjQ1cHg7bGluZS1oZWlnaHQ6NDVweH10ZXh0YXJlYS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OmF1dG99LmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbC1zdGF0aWN7aGVpZ2h0OjQ1cHg7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzfS5oYXMtZmVlZGJhY2t7cG9zaXRpb246cmVsYXRpdmV9Lmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9se3BhZGRpbmctcmlnaHQ6NDBweH0uZm9ybS1jb250cm9sLWZlZWRiYWNre3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7ei1pbmRleDoyO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtsaW5lLWhlaWdodDozMnB4O3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmV9LmlucHV0LWxnKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7d2lkdGg6NDVweDtoZWlnaHQ6NDVweDtsaW5lLWhlaWdodDo0NXB4fS5pbnB1dC1zbSsuZm9ybS1jb250cm9sLWZlZWRiYWNre3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bGluZS1oZWlnaHQ6MzBweH0uaGFzLXN1Y2Nlc3MgLmhlbHAtYmxvY2ssLmhhcy1zdWNjZXNzIC5jb250cm9sLWxhYmVsLC5oYXMtc3VjY2VzcyAucmFkaW8sLmhhcy1zdWNjZXNzIC5jaGVja2JveCwuaGFzLXN1Y2Nlc3MgLnJhZGlvLWlubGluZSwuaGFzLXN1Y2Nlc3MgLmNoZWNrYm94LWlubGluZSwuaGFzLXN1Y2Nlc3MucmFkaW8gbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94IGxhYmVsLC5oYXMtc3VjY2Vzcy5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94LWlubGluZSBsYWJlbHtjb2xvcjojM2M3NjNkfS5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9se2JvcmRlci1jb2xvcjojM2M3NjNkOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSl9Lmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2w6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMyYjU0MmM7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgNnB4ICM2N2IxNjg7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSksMCAwIDZweCAjNjdiMTY4fS5oYXMtc3VjY2VzcyAuaW5wdXQtZ3JvdXAtYWRkb257Y29sb3I6IzNjNzYzZDtib3JkZXItY29sb3I6IzNjNzYzZDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDh9Lmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7Y29sb3I6IzNjNzYzZH0uaGFzLXdhcm5pbmcgLmhlbHAtYmxvY2ssLmhhcy13YXJuaW5nIC5jb250cm9sLWxhYmVsLC5oYXMtd2FybmluZyAucmFkaW8sLmhhcy13YXJuaW5nIC5jaGVja2JveCwuaGFzLXdhcm5pbmcgLnJhZGlvLWlubGluZSwuaGFzLXdhcm5pbmcgLmNoZWNrYm94LWlubGluZSwuaGFzLXdhcm5pbmcucmFkaW8gbGFiZWwsLmhhcy13YXJuaW5nLmNoZWNrYm94IGxhYmVsLC5oYXMtd2FybmluZy5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy13YXJuaW5nLmNoZWNrYm94LWlubGluZSBsYWJlbHtjb2xvcjojOGE2ZDNifS5oYXMtd2FybmluZyAuZm9ybS1jb250cm9se2JvcmRlci1jb2xvcjojOGE2ZDNiOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSl9Lmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2w6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM2NjUxMmM7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgNnB4ICNjMGExNmI7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSksMCAwIDZweCAjYzBhMTZifS5oYXMtd2FybmluZyAuaW5wdXQtZ3JvdXAtYWRkb257Y29sb3I6IzhhNmQzYjtib3JkZXItY29sb3I6IzhhNmQzYjtiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTN9Lmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7Y29sb3I6IzhhNmQzYn0uaGFzLWVycm9yIC5oZWxwLWJsb2NrLC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWwsLmhhcy1lcnJvciAucmFkaW8sLmhhcy1lcnJvciAuY2hlY2tib3gsLmhhcy1lcnJvciAucmFkaW8taW5saW5lLC5oYXMtZXJyb3IgLmNoZWNrYm94LWlubGluZSwuaGFzLWVycm9yLnJhZGlvIGxhYmVsLC5oYXMtZXJyb3IuY2hlY2tib3ggbGFiZWwsLmhhcy1lcnJvci5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1lcnJvci5jaGVja2JveC1pbmxpbmUgbGFiZWx7Y29sb3I6I2E5NDQ0Mn0uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2x7Ym9yZGVyLWNvbG9yOiNhOTQ0NDI7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KX0uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM4NDM1MzQ7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgNnB4ICNjZTg0ODM7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSksMCAwIDZweCAjY2U4NDgzfS5oYXMtZXJyb3IgLmlucHV0LWdyb3VwLWFkZG9ue2NvbG9yOiNhOTQ0NDI7Ym9yZGVyLWNvbG9yOiNhOTQ0NDI7YmFja2dyb3VuZC1jb2xvcjojZjJkZWRlfS5oYXMtZXJyb3IgLmZvcm0tY29udHJvbC1mZWVkYmFja3tjb2xvcjojYTk0NDQyfS5oYXMtZmVlZGJhY2sgbGFiZWx+LmZvcm0tY29udHJvbC1mZWVkYmFja3t0b3A6MjNweH0uaGFzLWZlZWRiYWNrIGxhYmVsLnNyLW9ubHl+LmZvcm0tY29udHJvbC1mZWVkYmFja3t0b3A6MH0uaGVscC1ibG9ja3tkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6NXB4O21hcmdpbi1ib3R0b206MTBweDtjb2xvcjojNzM3MzczfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZm9ybS1pbmxpbmUgLmZvcm0tZ3JvdXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbC1zdGF0aWN7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmZvcm0taW5saW5lIC5pbnB1dC1ncm91cHtkaXNwbGF5OmlubGluZS10YWJsZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbHt3aWR0aDphdXRvfS5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbHt3aWR0aDoxMDAlfS5mb3JtLWlubGluZSAuY29udHJvbC1sYWJlbHttYXJnaW4tYm90dG9tOjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5mb3JtLWlubGluZSAucmFkaW8sLmZvcm0taW5saW5lIC5jaGVja2JveHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZm9ybS1pbmxpbmUgLnJhZGlvIGxhYmVsLC5mb3JtLWlubGluZSAuY2hlY2tib3ggbGFiZWx7cGFkZGluZy1sZWZ0OjB9LmZvcm0taW5saW5lIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sLmZvcm0taW5saW5lIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6MH0uZm9ybS1pbmxpbmUgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre3RvcDowfX0uZm9ybS1ob3Jpem9udGFsIC5yYWRpbywuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveCwuZm9ybS1ob3Jpem9udGFsIC5yYWRpby1pbmxpbmUsLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3gtaW5saW5le21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy10b3A6N3B4fS5mb3JtLWhvcml6b250YWwgLnJhZGlvLC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94e21pbi1oZWlnaHQ6MjVweH0uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe21hcmdpbi1sZWZ0Oi0xNXB4O21hcmdpbi1yaWdodDotMTVweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbHt0ZXh0LWFsaWduOnJpZ2h0O21hcmdpbi1ib3R0b206MDtwYWRkaW5nLXRvcDo3cHh9fS5mb3JtLWhvcml6b250YWwgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre3JpZ2h0OjE1cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtbGcgLmNvbnRyb2wtbGFiZWx7cGFkZGluZy10b3A6MTQuMzMzMzMzcHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLXNtIC5jb250cm9sLWxhYmVse3BhZGRpbmctdG9wOjZweH19LmJ0bntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOjA7Zm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjZweCAxMnB4O2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5idG46Zm9jdXMsLmJ0bjphY3RpdmU6Zm9jdXMsLmJ0bi5hY3RpdmU6Zm9jdXMsLmJ0bi5mb2N1cywuYnRuOmFjdGl2ZS5mb2N1cywuYnRuLmFjdGl2ZS5mb2N1c3tvdXRsaW5lOnRoaW4gZG90dGVkO291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO291dGxpbmUtb2Zmc2V0Oi0ycHh9LmJ0bjpob3ZlciwuYnRuOmZvY3VzLC5idG4uZm9jdXN7Y29sb3I6IzMzMzt0ZXh0LWRlY29yYXRpb246bm9uZX0uYnRuOmFjdGl2ZSwuYnRuLmFjdGl2ZXtvdXRsaW5lOjA7YmFja2dyb3VuZC1pbWFnZTpub25lOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSk7Ym94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSl9LmJ0bi5kaXNhYmxlZCwuYnRuW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bntjdXJzb3I6bm90LWFsbG93ZWQ7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi42NTtmaWx0ZXI6YWxwaGEob3BhY2l0eT02NSk7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idG4tZGVmYXVsdHtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2NjY30uYnRuLWRlZmF1bHQ6aG92ZXIsLmJ0bi1kZWZhdWx0OmZvY3VzLC5idG4tZGVmYXVsdC5mb2N1cywuYnRuLWRlZmF1bHQ6YWN0aXZlLC5idG4tZGVmYXVsdC5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdHtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2U2ZTZlNjtib3JkZXItY29sb3I6I2FkYWRhZH0uYnRuLWRlZmF1bHQ6YWN0aXZlLC5idG4tZGVmYXVsdC5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdHtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmJ0bi1kZWZhdWx0LmRpc2FibGVkLC5idG4tZGVmYXVsdFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdCwuYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0OmhvdmVyLC5idG4tZGVmYXVsdC5kaXNhYmxlZDpmb2N1cywuYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6Zm9jdXMsLmJ0bi1kZWZhdWx0LmRpc2FibGVkLmZvY3VzLC5idG4tZGVmYXVsdFtkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdC5mb2N1cywuYnRuLWRlZmF1bHQuZGlzYWJsZWQ6YWN0aXZlLC5idG4tZGVmYXVsdFtkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6YWN0aXZlLC5idG4tZGVmYXVsdC5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdC5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojY2NjfS5idG4tZGVmYXVsdCAuYmFkZ2V7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzN9LmJ0bi1wcmltYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O2JvcmRlci1jb2xvcjojMmU2ZGE0fS5idG4tcHJpbWFyeTpob3ZlciwuYnRuLXByaW1hcnk6Zm9jdXMsLmJ0bi1wcmltYXJ5LmZvY3VzLC5idG4tcHJpbWFyeTphY3RpdmUsLmJ0bi1wcmltYXJ5LmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjg2MDkwO2JvcmRlci1jb2xvcjojMjA0ZDc0fS5idG4tcHJpbWFyeTphY3RpdmUsLmJ0bi1wcmltYXJ5LmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5e2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYnRuLXByaW1hcnkuZGlzYWJsZWQsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5LC5idG4tcHJpbWFyeS5kaXNhYmxlZDpob3ZlciwuYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnk6aG92ZXIsLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLC5idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTpmb2N1cywuYnRuLXByaW1hcnkuZGlzYWJsZWQuZm9jdXMsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5LmZvY3VzLC5idG4tcHJpbWFyeS5kaXNhYmxlZDphY3RpdmUsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTphY3RpdmUsLmJ0bi1wcmltYXJ5LmRpc2FibGVkLmFjdGl2ZSwuYnRuLXByaW1hcnlbZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5LmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjc7Ym9yZGVyLWNvbG9yOiMyZTZkYTR9LmJ0bi1wcmltYXJ5IC5iYWRnZXtjb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYnRuLXN1Y2Nlc3N7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1Y2I4NWM7Ym9yZGVyLWNvbG9yOiM0Y2FlNGN9LmJ0bi1zdWNjZXNzOmhvdmVyLC5idG4tc3VjY2Vzczpmb2N1cywuYnRuLXN1Y2Nlc3MuZm9jdXMsLmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3N7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM0NDlkNDQ7Ym9yZGVyLWNvbG9yOiMzOTg0Mzl9LmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3N7YmFja2dyb3VuZC1pbWFnZTpub25lfS5idG4tc3VjY2Vzcy5kaXNhYmxlZCwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MsLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmhvdmVyLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzczpob3ZlciwuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmZvY3VzLC5idG4tc3VjY2Vzcy5kaXNhYmxlZC5mb2N1cywuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MuZm9jdXMsLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmFjdGl2ZSwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQuYWN0aXZlLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MuYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzVjYjg1Yztib3JkZXItY29sb3I6IzRjYWU0Y30uYnRuLXN1Y2Nlc3MgLmJhZGdle2NvbG9yOiM1Y2I4NWM7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5idG4taW5mb3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzViYzBkZTtib3JkZXItY29sb3I6IzQ2YjhkYX0uYnRuLWluZm86aG92ZXIsLmJ0bi1pbmZvOmZvY3VzLC5idG4taW5mby5mb2N1cywuYnRuLWluZm86YWN0aXZlLC5idG4taW5mby5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mb3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzMxYjBkNTtib3JkZXItY29sb3I6IzI2OWFiY30uYnRuLWluZm86YWN0aXZlLC5idG4taW5mby5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mb3tiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmJ0bi1pbmZvLmRpc2FibGVkLC5idG4taW5mb1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbywuYnRuLWluZm8uZGlzYWJsZWQ6aG92ZXIsLmJ0bi1pbmZvW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvOmhvdmVyLC5idG4taW5mby5kaXNhYmxlZDpmb2N1cywuYnRuLWluZm9bZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86Zm9jdXMsLmJ0bi1pbmZvLmRpc2FibGVkLmZvY3VzLC5idG4taW5mb1tkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mby5mb2N1cywuYnRuLWluZm8uZGlzYWJsZWQ6YWN0aXZlLC5idG4taW5mb1tkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86YWN0aXZlLC5idG4taW5mby5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1pbmZvW2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mby5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlO2JvcmRlci1jb2xvcjojNDZiOGRhfS5idG4taW5mbyAuYmFkZ2V7Y29sb3I6IzViYzBkZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmJ0bi13YXJuaW5ne2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZjBhZDRlO2JvcmRlci1jb2xvcjojZWVhMjM2fS5idG4td2FybmluZzpob3ZlciwuYnRuLXdhcm5pbmc6Zm9jdXMsLmJ0bi13YXJuaW5nLmZvY3VzLC5idG4td2FybmluZzphY3RpdmUsLmJ0bi13YXJuaW5nLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5ne2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZWM5NzFmO2JvcmRlci1jb2xvcjojZDU4NTEyfS5idG4td2FybmluZzphY3RpdmUsLmJ0bi13YXJuaW5nLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5ne2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYnRuLXdhcm5pbmcuZGlzYWJsZWQsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nLC5idG4td2FybmluZy5kaXNhYmxlZDpob3ZlciwuYnRuLXdhcm5pbmdbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmc6aG92ZXIsLmJ0bi13YXJuaW5nLmRpc2FibGVkOmZvY3VzLC5idG4td2FybmluZ1tkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZzpmb2N1cywuYnRuLXdhcm5pbmcuZGlzYWJsZWQuZm9jdXMsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nLmZvY3VzLC5idG4td2FybmluZy5kaXNhYmxlZDphY3RpdmUsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZzphY3RpdmUsLmJ0bi13YXJuaW5nLmRpc2FibGVkLmFjdGl2ZSwuYnRuLXdhcm5pbmdbZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGU7Ym9yZGVyLWNvbG9yOiNlZWEyMzZ9LmJ0bi13YXJuaW5nIC5iYWRnZXtjb2xvcjojZjBhZDRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYnRuLWRhbmdlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2Q5NTM0Zjtib3JkZXItY29sb3I6I2Q0M2YzYX0uYnRuLWRhbmdlcjpob3ZlciwuYnRuLWRhbmdlcjpmb2N1cywuYnRuLWRhbmdlci5mb2N1cywuYnRuLWRhbmdlcjphY3RpdmUsLmJ0bi1kYW5nZXIuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2M5MzAyYztib3JkZXItY29sb3I6I2FjMjkyNX0uYnRuLWRhbmdlcjphY3RpdmUsLmJ0bi1kYW5nZXIuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcntiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmJ0bi1kYW5nZXIuZGlzYWJsZWQsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlciwuYnRuLWRhbmdlci5kaXNhYmxlZDpob3ZlciwuYnRuLWRhbmdlcltkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmhvdmVyLC5idG4tZGFuZ2VyLmRpc2FibGVkOmZvY3VzLC5idG4tZGFuZ2VyW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6Zm9jdXMsLmJ0bi1kYW5nZXIuZGlzYWJsZWQuZm9jdXMsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5mb2N1cywuYnRuLWRhbmdlci5kaXNhYmxlZDphY3RpdmUsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6YWN0aXZlLC5idG4tZGFuZ2VyLmRpc2FibGVkLmFjdGl2ZSwuYnRuLWRhbmdlcltkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmO2JvcmRlci1jb2xvcjojZDQzZjNhfS5idG4tZGFuZ2VyIC5iYWRnZXtjb2xvcjojZDk1MzRmO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYnRuLWxpbmt7Y29sb3I6IzMzN2FiNztmb250LXdlaWdodDpub3JtYWw7Ym9yZGVyLXJhZGl1czowfS5idG4tbGluaywuYnRuLWxpbms6YWN0aXZlLC5idG4tbGluay5hY3RpdmUsLmJ0bi1saW5rW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5re2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idG4tbGluaywuYnRuLWxpbms6aG92ZXIsLmJ0bi1saW5rOmZvY3VzLC5idG4tbGluazphY3RpdmV7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5idG4tbGluazpob3ZlciwuYnRuLWxpbms6Zm9jdXN7Y29sb3I6IzIzNTI3Yzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmJ0bi1saW5rW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rOmhvdmVyLC5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGluazpmb2N1c3tjb2xvcjojNzc3O3RleHQtZGVjb3JhdGlvbjpub25lfS5idG4tbGcsLmJ0bi1ncm91cC1sZz4uYnRue3BhZGRpbmc6MTBweCAxNnB4O2ZvbnQtc2l6ZToxN3B4O2xpbmUtaGVpZ2h0OjEuMzMzMzMzMztib3JkZXItcmFkaXVzOjNweH0uYnRuLXNtLC5idG4tZ3JvdXAtc20+LmJ0bntwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEuNTtib3JkZXItcmFkaXVzOjFweH0uYnRuLXhzLC5idG4tZ3JvdXAteHM+LmJ0bntwYWRkaW5nOjFweCA1cHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6MXB4fS5idG4tYmxvY2t7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5idG4tYmxvY2srLmJ0bi1ibG9ja3ttYXJnaW4tdG9wOjVweH1pbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ0bi1ibG9jayxpbnB1dFt0eXBlPVwicmVzZXRcIl0uYnRuLWJsb2NrLGlucHV0W3R5cGU9XCJidXR0b25cIl0uYnRuLWJsb2Nre3dpZHRoOjEwMCV9LmZhZGV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBsaW5lYXJ9LmZhZGUuaW57b3BhY2l0eToxfS5jb2xsYXBzZXtkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW59LmNvbGxhcHNlLmlue2Rpc3BsYXk6YmxvY2s7dmlzaWJpbGl0eTp2aXNpYmxlfXRyLmNvbGxhcHNlLmlue2Rpc3BsYXk6dGFibGUtcm93fXRib2R5LmNvbGxhcHNlLmlue2Rpc3BsYXk6dGFibGUtcm93LWdyb3VwfS5jb2xsYXBzaW5ne3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LCB2aXNpYmlsaXR5Oy1vLXRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LCB2aXNpYmlsaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LCB2aXNpYmlsaXR5Oy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjouMzVzOy1vLXRyYW5zaXRpb24tZHVyYXRpb246LjM1czt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXM7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlOy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZX0uY2FyZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDttYXJnaW4tbGVmdDoycHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci10b3A6NHB4IHNvbGlkO2JvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50fS5kcm9wdXAsLmRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlfS5kcm9wZG93bi10b2dnbGU6Zm9jdXN7b3V0bGluZTowfS5kcm9wZG93bi1tZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMDAlO2xlZnQ6MDt6LWluZGV4OjEwMDA7ZGlzcGxheTpub25lO2Zsb2F0OmxlZnQ7bWluLXdpZHRoOjE2MHB4O3BhZGRpbmc6NXB4IDA7bWFyZ2luOjJweCAwIDA7bGlzdC1zdHlsZTpub25lO2ZvbnQtc2l6ZToxM3B4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtib3JkZXItcmFkaXVzOjJweDstd2Via2l0LWJveC1zaGFkb3c6MCA2cHggMTJweCByZ2JhKDAsMCwwLDAuMTc1KTtib3gtc2hhZG93OjAgNnB4IDEycHggcmdiYSgwLDAsMCwwLjE3NSk7LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kcm9wZG93bi1tZW51LnB1bGwtcmlnaHR7cmlnaHQ6MDtsZWZ0OmF1dG99LmRyb3Bkb3duLW1lbnUgLmRpdmlkZXJ7aGVpZ2h0OjFweDttYXJnaW46OHB4IDA7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6I2U1ZTVlNX0uZHJvcGRvd24tbWVudT5saT5he2Rpc3BsYXk6YmxvY2s7cGFkZGluZzozcHggMjBweDtjbGVhcjpib3RoO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiMzMzM7d2hpdGUtc3BhY2U6bm93cmFwfS5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMjYyNjI2O2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0uZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpmb2N1c3tjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO291dGxpbmU6MDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9LmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmEsLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6Zm9jdXN7Y29sb3I6Izc3N30uZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpob3ZlciwuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6bm9uZTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7Y3Vyc29yOm5vdC1hbGxvd2VkfS5vcGVuPi5kcm9wZG93bi1tZW51e2Rpc3BsYXk6YmxvY2t9Lm9wZW4+YXtvdXRsaW5lOjB9LmRyb3Bkb3duLW1lbnUtcmlnaHR7bGVmdDphdXRvO3JpZ2h0OjB9LmRyb3Bkb3duLW1lbnUtbGVmdHtsZWZ0OjA7cmlnaHQ6YXV0b30uZHJvcGRvd24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cGFkZGluZzozcHggMjBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiM3Nzc7d2hpdGUtc3BhY2U6bm93cmFwfS5kcm9wZG93bi1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt0b3A6MDt6LWluZGV4Ojk5MH0ucHVsbC1yaWdodD4uZHJvcGRvd24tbWVudXtyaWdodDowO2xlZnQ6YXV0b30uZHJvcHVwIC5jYXJldCwubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmNhcmV0e2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOjRweCBzb2xpZDtjb250ZW50OlwiXCJ9LmRyb3B1cCAuZHJvcGRvd24tbWVudSwubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7dG9wOmF1dG87Ym90dG9tOjEwMCU7bWFyZ2luLWJvdHRvbToycHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnV7bGVmdDphdXRvO3JpZ2h0OjB9Lm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudS1sZWZ0e2xlZnQ6MDtyaWdodDphdXRvfX0uYnRuLWdyb3VwLC5idG4tZ3JvdXAtdmVydGljYWx7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5idG4tZ3JvdXA+LmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG57cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bGVmdH0uYnRuLWdyb3VwPi5idG46aG92ZXIsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmhvdmVyLC5idG4tZ3JvdXA+LmJ0bjpmb2N1cywuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46Zm9jdXMsLmJ0bi1ncm91cD4uYnRuOmFjdGl2ZSwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46YWN0aXZlLC5idG4tZ3JvdXA+LmJ0bi5hY3RpdmUsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLmFjdGl2ZXt6LWluZGV4OjJ9LmJ0bi1ncm91cCAuYnRuKy5idG4sLmJ0bi1ncm91cCAuYnRuKy5idG4tZ3JvdXAsLmJ0bi1ncm91cCAuYnRuLWdyb3VwKy5idG4sLmJ0bi1ncm91cCAuYnRuLWdyb3VwKy5idG4tZ3JvdXB7bWFyZ2luLWxlZnQ6LTFweH0uYnRuLXRvb2xiYXJ7bWFyZ2luLWxlZnQ6LTVweH0uYnRuLXRvb2xiYXIgLmJ0bi1ncm91cCwuYnRuLXRvb2xiYXIgLmlucHV0LWdyb3Vwe2Zsb2F0OmxlZnR9LmJ0bi10b29sYmFyPi5idG4sLmJ0bi10b29sYmFyPi5idG4tZ3JvdXAsLmJ0bi10b29sYmFyPi5pbnB1dC1ncm91cHttYXJnaW4tbGVmdDo1cHh9LmJ0bi1ncm91cD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpe2JvcmRlci1yYWRpdXM6MH0uYnRuLWdyb3VwPi5idG46Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0uYnRuLWdyb3VwPi5idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSl7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5idG4tZ3JvdXA+LmJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLC5idG4tZ3JvdXA+LmRyb3Bkb3duLXRvZ2dsZTpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5idG4tZ3JvdXA+LmJ0bi1ncm91cHtmbG9hdDpsZWZ0fS5idG4tZ3JvdXA+LmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpPi5idG57Ym9yZGVyLXJhZGl1czowfS5idG4tZ3JvdXA+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5idG46bGFzdC1jaGlsZCwuYnRuLWdyb3VwPi5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKT4uZHJvcGRvd24tdG9nZ2xle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uYnRuLWdyb3VwPi5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKT4uYnRuOmZpcnN0LWNoaWxke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSwuYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZXtvdXRsaW5lOjB9LmJ0bi1ncm91cD4uYnRuKy5kcm9wZG93bi10b2dnbGV7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweH0uYnRuLWdyb3VwPi5idG4tbGcrLmRyb3Bkb3duLXRvZ2dsZXtwYWRkaW5nLWxlZnQ6MTJweDtwYWRkaW5nLXJpZ2h0OjEycHh9LmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGV7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLDAuMTI1KTtib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLDAuMTI1KX0uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tbGlua3std2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ0biAuY2FyZXR7bWFyZ2luLWxlZnQ6MH0uYnRuLWxnIC5jYXJldHtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci1ib3R0b20td2lkdGg6MH0uZHJvcHVwIC5idG4tbGcgLmNhcmV0e2JvcmRlci13aWR0aDowIDVweCA1cHh9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cCwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA+LmJ0bntkaXNwbGF5OmJsb2NrO2Zsb2F0Om5vbmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA+LmJ0bntmbG9hdDpub25lfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bisuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bisuYnRuLWdyb3VwLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cCsuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cCsuYnRuLWdyb3Vwe21hcmdpbi10b3A6LTFweDttYXJnaW4tbGVmdDowfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1yYWRpdXM6MH0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoycHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bntib3JkZXItcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bjpsYXN0LWNoaWxkLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5kcm9wZG93bi10b2dnbGV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmJ0bjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uYnRuLWdyb3VwLWp1c3RpZmllZHtkaXNwbGF5OnRhYmxlO3dpZHRoOjEwMCU7dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZX0uYnRuLWdyb3VwLWp1c3RpZmllZD4uYnRuLC5idG4tZ3JvdXAtanVzdGlmaWVkPi5idG4tZ3JvdXB7ZmxvYXQ6bm9uZTtkaXNwbGF5OnRhYmxlLWNlbGw7d2lkdGg6MSV9LmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cCAuYnRue3dpZHRoOjEwMCV9LmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudXtsZWZ0OmF1dG99W2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXT4uYnRuIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXT4uYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17cG9zaXRpb246YWJzb2x1dGU7Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3BvaW50ZXItZXZlbnRzOm5vbmV9LmlucHV0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6dGFibGU7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlfS5pbnB1dC1ncm91cFtjbGFzcyo9XCJjb2wtXCJde2Zsb2F0Om5vbmU7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9se3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTowfS5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntoZWlnaHQ6NDVweDtwYWRkaW5nOjEwcHggMTZweDtmb250LXNpemU6MTdweDtsaW5lLWhlaWdodDoxLjMzMzMzMzM7Ym9yZGVyLXJhZGl1czozcHh9c2VsZWN0LmlucHV0LWdyb3VwLWxnPi5mb3JtLWNvbnRyb2wsc2VsZWN0LmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3QuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWJ0bj4uYnRue2hlaWdodDo0NXB4O2xpbmUtaGVpZ2h0OjQ1cHh9dGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCx0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sdGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWJ0bj4uYnRuLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntoZWlnaHQ6YXV0b30uaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWFkZG9uLC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYnRuPi5idG57aGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czoxcHh9c2VsZWN0LmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsc2VsZWN0LmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3QuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWJ0bj4uYnRue2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHh9dGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCx0ZXh0YXJlYS5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sdGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWJ0bj4uYnRuLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bntoZWlnaHQ6YXV0b30uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWJ0biwuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbHtkaXNwbGF5OnRhYmxlLWNlbGx9LmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXJhZGl1czowfS5pbnB1dC1ncm91cC1hZGRvbiwuaW5wdXQtZ3JvdXAtYnRue3dpZHRoOjElO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmlucHV0LWdyb3VwLWFkZG9ue3BhZGRpbmc6NnB4IDEycHg7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2xpbmUtaGVpZ2h0OjE7Y29sb3I6IzU1NTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6MnB4fS5pbnB1dC1ncm91cC1hZGRvbi5pbnB1dC1zbXtwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZToxMnB4O2JvcmRlci1yYWRpdXM6MXB4fS5pbnB1dC1ncm91cC1hZGRvbi5pbnB1dC1sZ3twYWRkaW5nOjEwcHggMTZweDtmb250LXNpemU6MTdweDtib3JkZXItcmFkaXVzOjNweH0uaW5wdXQtZ3JvdXAtYWRkb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdLC5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17bWFyZ2luLXRvcDowfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLC5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLWdyb3VwPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uZHJvcGRvd24tdG9nZ2xlLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bntib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxke2JvcmRlci1yaWdodDowfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmxhc3QtY2hpbGQsLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmRyb3Bkb3duLXRvZ2dsZSwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG46bm90KDpmaXJzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpPi5idG57Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZHtib3JkZXItbGVmdDowfS5pbnB1dC1ncm91cC1idG57cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjA7d2hpdGUtc3BhY2U6bm93cmFwfS5pbnB1dC1ncm91cC1idG4+LmJ0bntwb3NpdGlvbjpyZWxhdGl2ZX0uaW5wdXQtZ3JvdXAtYnRuPi5idG4rLmJ0bnttYXJnaW4tbGVmdDotMXB4fS5pbnB1dC1ncm91cC1idG4+LmJ0bjpob3ZlciwuaW5wdXQtZ3JvdXAtYnRuPi5idG46Zm9jdXMsLmlucHV0LWdyb3VwLWJ0bj4uYnRuOmFjdGl2ZXt6LWluZGV4OjJ9LmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bi1ncm91cHttYXJnaW4tcmlnaHQ6LTFweH0uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0bi1ncm91cHttYXJnaW4tbGVmdDotMXB4fS5uYXZ7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGU6bm9uZX0ubmF2Pmxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Lm5hdj5saT5he3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMHB4IDE1cHh9Lm5hdj5saT5hOmhvdmVyLC5uYXY+bGk+YTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm5hdj5saS5kaXNhYmxlZD5he2NvbG9yOiM3Nzd9Lm5hdj5saS5kaXNhYmxlZD5hOmhvdmVyLC5uYXY+bGkuZGlzYWJsZWQ+YTpmb2N1c3tjb2xvcjojNzc3O3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOm5vdC1hbGxvd2VkfS5uYXYgLm9wZW4+YSwubmF2IC5vcGVuPmE6aG92ZXIsLm5hdiAub3Blbj5hOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2VlZTtib3JkZXItY29sb3I6IzMzN2FiN30ubmF2IC5uYXYtZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjo4cHggMDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZTVlNWU1fS5uYXY+bGk+YT5pbWd7bWF4LXdpZHRoOm5vbmV9Lm5hdi10YWJze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9Lm5hdi10YWJzPmxpe2Zsb2F0OmxlZnQ7bWFyZ2luLWJvdHRvbTotMXB4fS5uYXYtdGFicz5saT5he21hcmdpbi1yaWdodDoycHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mztib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDB9Lm5hdi10YWJzPmxpPmE6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNlZWUgI2VlZSAjZGRkfS5uYXYtdGFicz5saS5hY3RpdmU+YSwubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIsLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3Vze2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0fS5uYXYtdGFicy5uYXYtanVzdGlmaWVke3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTowfS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpe2Zsb2F0Om5vbmV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjVweH0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7dG9wOmF1dG87bGVmdDphdXRvfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saXtkaXNwbGF5OnRhYmxlLWNlbGw7d2lkdGg6MSV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXttYXJnaW4tYm90dG9tOjB9fS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czoycHh9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpob3ZlciwubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmE6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saT5he2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMH0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmhvdmVyLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpmb2N1c3tib3JkZXItYm90dG9tLWNvbG9yOiNmZmZ9fS5uYXYtcGlsbHM+bGl7ZmxvYXQ6bGVmdH0ubmF2LXBpbGxzPmxpPmF7Ym9yZGVyLXJhZGl1czoycHh9Lm5hdi1waWxscz5saStsaXttYXJnaW4tbGVmdDoycHh9Lm5hdi1waWxscz5saS5hY3RpdmU+YSwubmF2LXBpbGxzPmxpLmFjdGl2ZT5hOmhvdmVyLC5uYXYtcGlsbHM+bGkuYWN0aXZlPmE6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9Lm5hdi1zdGFja2VkPmxpe2Zsb2F0Om5vbmV9Lm5hdi1zdGFja2VkPmxpK2xpe21hcmdpbi10b3A6MnB4O21hcmdpbi1sZWZ0OjB9Lm5hdi1qdXN0aWZpZWR7d2lkdGg6MTAwJX0ubmF2LWp1c3RpZmllZD5saXtmbG9hdDpub25lfS5uYXYtanVzdGlmaWVkPmxpPmF7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTo1cHh9Lm5hdi1qdXN0aWZpZWQ+LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e3RvcDphdXRvO2xlZnQ6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdi1qdXN0aWZpZWQ+bGl7ZGlzcGxheTp0YWJsZS1jZWxsO3dpZHRoOjElfS5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLWJvdHRvbTowfX0ubmF2LXRhYnMtanVzdGlmaWVke2JvcmRlci1ib3R0b206MH0ubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czoycHh9Lm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6aG92ZXIsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjJweCAycHggMCAwfS5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmhvdmVyLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmZvY3Vze2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZn19LnRhYi1jb250ZW50Pi50YWItcGFuZXtkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW59LnRhYi1jb250ZW50Pi5hY3RpdmV7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGV9Lm5hdi10YWJzIC5kcm9wZG93bi1tZW51e21hcmdpbi10b3A6LTFweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0ubmF2YmFye3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NTBweDttYXJnaW4tYm90dG9tOjE4cHg7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhcntib3JkZXItcmFkaXVzOjJweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItaGVhZGVye2Zsb2F0OmxlZnR9fS5uYXZiYXItY29sbGFwc2V7b3ZlcmZsb3cteDp2aXNpYmxlO3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLWxlZnQ6MTVweDtib3JkZXItdG9wOjFweCBzb2xpZCB0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0ubmF2YmFyLWNvbGxhcHNlLmlue292ZXJmbG93LXk6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1jb2xsYXBzZXt3aWR0aDphdXRvO2JvcmRlci10b3A6MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Lm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZXtkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTowO292ZXJmbG93OnZpc2libGUgIWltcG9ydGFudH0ubmF2YmFyLWNvbGxhcHNlLmlue292ZXJmbG93LXk6dmlzaWJsZX0ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItc3RhdGljLXRvcCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItY29sbGFwc2V7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfX0ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItY29sbGFwc2V7bWF4LWhlaWdodDozNDBweH1AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6NDgwcHgpIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKXsubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItY29sbGFwc2V7bWF4LWhlaWdodDoyMDBweH19LmNvbnRhaW5lcj4ubmF2YmFyLWhlYWRlciwuY29udGFpbmVyLWZsdWlkPi5uYXZiYXItaGVhZGVyLC5jb250YWluZXI+Lm5hdmJhci1jb2xsYXBzZSwuY29udGFpbmVyLWZsdWlkPi5uYXZiYXItY29sbGFwc2V7bWFyZ2luLXJpZ2h0Oi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuY29udGFpbmVyPi5uYXZiYXItaGVhZGVyLC5jb250YWluZXItZmx1aWQ+Lm5hdmJhci1oZWFkZXIsLmNvbnRhaW5lcj4ubmF2YmFyLWNvbGxhcHNlLC5jb250YWluZXItZmx1aWQ+Lm5hdmJhci1jb2xsYXBzZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfX0ubmF2YmFyLXN0YXRpYy10b3B7ei1pbmRleDoxMDAwO2JvcmRlci13aWR0aDowIDAgMXB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLXN0YXRpYy10b3B7Ym9yZGVyLXJhZGl1czowfX0ubmF2YmFyLWZpeGVkLXRvcCwubmF2YmFyLWZpeGVkLWJvdHRvbXtwb3NpdGlvbjpmaXhlZDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjEwMzB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItZml4ZWQtdG9wLC5uYXZiYXItZml4ZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MH19Lm5hdmJhci1maXhlZC10b3B7dG9wOjA7Ym9yZGVyLXdpZHRoOjAgMCAxcHh9Lm5hdmJhci1maXhlZC1ib3R0b217Ym90dG9tOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci13aWR0aDoxcHggMCAwfS5uYXZiYXItYnJhbmR7ZmxvYXQ6bGVmdDtwYWRkaW5nOjE2cHggMTVweDtmb250LXNpemU6MTdweDtsaW5lLWhlaWdodDoxOHB4O2hlaWdodDo1MHB4fS5uYXZiYXItYnJhbmQ6aG92ZXIsLm5hdmJhci1icmFuZDpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZX0ubmF2YmFyLWJyYW5kPmltZ3tkaXNwbGF5OmJsb2NrfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCwubmF2YmFyPi5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZHttYXJnaW4tbGVmdDotMTVweH19Lm5hdmJhci10b2dnbGV7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjE1cHg7cGFkZGluZzo5cHggMTBweDttYXJnaW4tdG9wOjhweDttYXJnaW4tYm90dG9tOjhweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MnB4fS5uYXZiYXItdG9nZ2xlOmZvY3Vze291dGxpbmU6MH0ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4O2hlaWdodDoycHg7Ym9yZGVyLXJhZGl1czoxcHh9Lm5hdmJhci10b2dnbGUgLmljb24tYmFyKy5pY29uLWJhcnttYXJnaW4tdG9wOjRweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci10b2dnbGV7ZGlzcGxheTpub25lfX0ubmF2YmFyLW5hdnttYXJnaW46OHB4IC0xNXB4fS5uYXZiYXItbmF2PmxpPmF7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O2xpbmUtaGVpZ2h0OjE4cHh9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51e3Bvc2l0aW9uOnN0YXRpYztmbG9hdDpub25lO3dpZHRoOmF1dG87bWFyZ2luLXRvcDowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmEsLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlcntwYWRkaW5nOjVweCAxNXB4IDVweCAyNXB4fS5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmF7bGluZS1oZWlnaHQ6MThweH0ubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5hOmhvdmVyLC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXN7YmFja2dyb3VuZC1pbWFnZTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1uYXZ7ZmxvYXQ6bGVmdDttYXJnaW46MH0ubmF2YmFyLW5hdj5saXtmbG9hdDpsZWZ0fS5uYXZiYXItbmF2PmxpPmF7cGFkZGluZy10b3A6MTZweDtwYWRkaW5nLWJvdHRvbToxNnB4fX0ubmF2YmFyLWZvcm17bWFyZ2luLWxlZnQ6LTE1cHg7bWFyZ2luLXJpZ2h0Oi0xNXB4O3BhZGRpbmc6MTBweCAxNXB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSwwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjEpLDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO21hcmdpbi10b3A6OXB4O21hcmdpbi1ib3R0b206OXB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLWZvcm0gLmZvcm0tZ3JvdXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbC1zdGF0aWN7ZGlzcGxheTppbmxpbmUtYmxvY2t9Lm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cHtkaXNwbGF5OmlubGluZS10YWJsZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLC5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbHt3aWR0aDphdXRvfS5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbHt3aWR0aDoxMDAlfS5uYXZiYXItZm9ybSAuY29udHJvbC1sYWJlbHttYXJnaW4tYm90dG9tOjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5uYXZiYXItZm9ybSAucmFkaW8sLm5hdmJhci1mb3JtIC5jaGVja2JveHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubmF2YmFyLWZvcm0gLnJhZGlvIGxhYmVsLC5uYXZiYXItZm9ybSAuY2hlY2tib3ggbGFiZWx7cGFkZGluZy1sZWZ0OjB9Lm5hdmJhci1mb3JtIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sLm5hdmJhci1mb3JtIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6MH0ubmF2YmFyLWZvcm0gLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre3RvcDowfX1AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7Lm5hdmJhci1mb3JtIC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206NXB4fS5uYXZiYXItZm9ybSAuZm9ybS1ncm91cDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItZm9ybXt3aWR0aDphdXRvO2JvcmRlcjowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX19Lm5hdmJhci1uYXY+bGk+LmRyb3Bkb3duLW1lbnV7bWFyZ2luLXRvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItbmF2PmxpPi5kcm9wZG93bi1tZW51e21hcmdpbi1ib3R0b206MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoycHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5hdmJhci1idG57bWFyZ2luLXRvcDo5cHg7bWFyZ2luLWJvdHRvbTo5cHh9Lm5hdmJhci1idG4uYnRuLXNte21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHh9Lm5hdmJhci1idG4uYnRuLXhze21hcmdpbi10b3A6MTRweDttYXJnaW4tYm90dG9tOjE0cHh9Lm5hdmJhci10ZXh0e21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItdGV4dHtmbG9hdDpsZWZ0O21hcmdpbi1sZWZ0OjE1cHg7bWFyZ2luLXJpZ2h0OjE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLWxlZnR7ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5uYXZiYXItcmlnaHR7ZmxvYXQ6cmlnaHQgIWltcG9ydGFudDttYXJnaW4tcmlnaHQ6LTE1cHh9Lm5hdmJhci1yaWdodH4ubmF2YmFyLXJpZ2h0e21hcmdpbi1yaWdodDowfX0ubmF2YmFyLWRlZmF1bHR7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JvcmRlci1jb2xvcjojZTdlN2U3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5ke2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6Zm9jdXN7Y29sb3I6IzVlNWU1ZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRleHR7Y29sb3I6Izc3N30ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YXtjb2xvcjojNzc3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmhvdmVyLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmZvY3Vze2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmFjdGl2ZT5hLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj4uYWN0aXZlPmE6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpmb2N1c3tjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2U3ZTdlN30ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmRpc2FibGVkPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5kaXNhYmxlZD5hOmhvdmVyLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj4uZGlzYWJsZWQ+YTpmb2N1c3tjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xle2JvcmRlci1jb2xvcjojZGRkfS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciwubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZGRkfS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7YmFja2dyb3VuZC1jb2xvcjojODg4fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWZvcm17Ym9yZGVyLWNvbG9yOiNlN2U3ZTd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmE6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZTdlN2U3O2NvbG9yOiM1NTV9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5he2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXN7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpob3ZlciwubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmZvY3Vze2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZTdlN2U3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YSwubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmZvY3Vze2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH19Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbGlua3tjb2xvcjojNzc3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXJ7Y29sb3I6IzMzM30ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5re2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5idG4tbGluazpob3ZlciwubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rOmZvY3Vze2NvbG9yOiMzMzN9Lm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6aG92ZXIsLm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6Zm9jdXN7Y29sb3I6I2NjY30ubmF2YmFyLWludmVyc2V7YmFja2dyb3VuZC1jb2xvcjojMjIyO2JvcmRlci1jb2xvcjojMDgwODA4fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5ke2NvbG9yOiM5ZDlkOWR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6aG92ZXIsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRleHR7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGk+YXtjb2xvcjojOWQ5ZDlkfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj5saT5hOmhvdmVyLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj5saT5hOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+LmFjdGl2ZT5hLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj4uYWN0aXZlPmE6aG92ZXIsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzA4MDgwOH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+LmRpc2FibGVkPmEsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5kaXNhYmxlZD5hOmhvdmVyLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj4uZGlzYWJsZWQ+YTpmb2N1c3tjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xle2JvcmRlci1jb2xvcjojMzMzfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpob3ZlciwubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGU6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMzMzfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWZvcm17Ym9yZGVyLWNvbG9yOiMxMDEwMTB9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmEsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmE6aG92ZXIsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMDgwODA4O2NvbG9yOiNmZmZ9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZHJvcGRvd24taGVhZGVye2JvcmRlci1jb2xvcjojMDgwODA4fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSAuZGl2aWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmF7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlciwubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YSwubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVyLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpob3ZlciwubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6Zm9jdXN7Y29sb3I6IzQ0NDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1saW5re2NvbG9yOiM5ZDlkOWR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluazpob3Zlcntjb2xvcjojZmZmfS5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbmt7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rOmhvdmVyLC5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbms6Zm9jdXN7Y29sb3I6I2ZmZn0ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpob3ZlciwubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpmb2N1c3tjb2xvcjojNDQ0fS5icmVhZGNydW1ie3BhZGRpbmc6OHB4IDE1cHg7bWFyZ2luLWJvdHRvbToxOHB4O2xpc3Qtc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czoycHh9LmJyZWFkY3J1bWI+bGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmJyZWFkY3J1bWI+bGkrbGk6YmVmb3Jle2NvbnRlbnQ6XCIvXFwwMGEwXCI7cGFkZGluZzowIDVweDtjb2xvcjojY2NjfS5icmVhZGNydW1iPi5hY3RpdmV7Y29sb3I6Izc3N30ucGFnaW5hdGlvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MDttYXJnaW46MThweCAwO2JvcmRlci1yYWRpdXM6MnB4fS5wYWdpbmF0aW9uPmxpe2Rpc3BsYXk6aW5saW5lfS5wYWdpbmF0aW9uPmxpPmEsLnBhZ2luYXRpb24+bGk+c3Bhbntwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0O3BhZGRpbmc6NnB4IDEycHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mzt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7bWFyZ2luLWxlZnQ6LTFweH0ucGFnaW5hdGlvbj5saTpmaXJzdC1jaGlsZD5hLC5wYWdpbmF0aW9uPmxpOmZpcnN0LWNoaWxkPnNwYW57bWFyZ2luLWxlZnQ6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjJweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjJweH0ucGFnaW5hdGlvbj5saTpsYXN0LWNoaWxkPmEsLnBhZ2luYXRpb24+bGk6bGFzdC1jaGlsZD5zcGFue2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjJweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoycHh9LnBhZ2luYXRpb24+bGk+YTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuOmhvdmVyLC5wYWdpbmF0aW9uPmxpPmE6Zm9jdXMsLnBhZ2luYXRpb24+bGk+c3Bhbjpmb2N1c3tjb2xvcjojMjM1MjdjO2JhY2tncm91bmQtY29sb3I6I2VlZTtib3JkZXItY29sb3I6I2RkZH0ucGFnaW5hdGlvbj4uYWN0aXZlPmEsLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpob3ZlciwucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIsLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1c3t6LWluZGV4OjI7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjc7Ym9yZGVyLWNvbG9yOiMzMzdhYjc7Y3Vyc29yOmRlZmF1bHR9LnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW4sLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW46aG92ZXIsLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW46Zm9jdXMsLnBhZ2luYXRpb24+LmRpc2FibGVkPmEsLnBhZ2luYXRpb24+LmRpc2FibGVkPmE6aG92ZXIsLnBhZ2luYXRpb24+LmRpc2FibGVkPmE6Zm9jdXN7Y29sb3I6Izc3NztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkZGQ7Y3Vyc29yOm5vdC1hbGxvd2VkfS5wYWdpbmF0aW9uLWxnPmxpPmEsLnBhZ2luYXRpb24tbGc+bGk+c3BhbntwYWRkaW5nOjEwcHggMTZweDtmb250LXNpemU6MTdweH0ucGFnaW5hdGlvbi1sZz5saTpmaXJzdC1jaGlsZD5hLC5wYWdpbmF0aW9uLWxnPmxpOmZpcnN0LWNoaWxkPnNwYW57Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHh9LnBhZ2luYXRpb24tbGc+bGk6bGFzdC1jaGlsZD5hLC5wYWdpbmF0aW9uLWxnPmxpOmxhc3QtY2hpbGQ+c3Bhbntib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4fS5wYWdpbmF0aW9uLXNtPmxpPmEsLnBhZ2luYXRpb24tc20+bGk+c3BhbntwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZToxMnB4fS5wYWdpbmF0aW9uLXNtPmxpOmZpcnN0LWNoaWxkPmEsLnBhZ2luYXRpb24tc20+bGk6Zmlyc3QtY2hpbGQ+c3Bhbntib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjFweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjFweH0ucGFnaW5hdGlvbi1zbT5saTpsYXN0LWNoaWxkPmEsLnBhZ2luYXRpb24tc20+bGk6bGFzdC1jaGlsZD5zcGFue2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjFweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxcHh9LnBhZ2Vye3BhZGRpbmctbGVmdDowO21hcmdpbjoxOHB4IDA7bGlzdC1zdHlsZTpub25lO3RleHQtYWxpZ246Y2VudGVyfS5wYWdlciBsaXtkaXNwbGF5OmlubGluZX0ucGFnZXIgbGk+YSwucGFnZXIgbGk+c3BhbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjVweCAxNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czoxNXB4fS5wYWdlciBsaT5hOmhvdmVyLC5wYWdlciBsaT5hOmZvY3Vze3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6I2VlZX0ucGFnZXIgLm5leHQ+YSwucGFnZXIgLm5leHQ+c3BhbntmbG9hdDpyaWdodH0ucGFnZXIgLnByZXZpb3VzPmEsLnBhZ2VyIC5wcmV2aW91cz5zcGFue2Zsb2F0OmxlZnR9LnBhZ2VyIC5kaXNhYmxlZD5hLC5wYWdlciAuZGlzYWJsZWQ+YTpob3ZlciwucGFnZXIgLmRpc2FibGVkPmE6Zm9jdXMsLnBhZ2VyIC5kaXNhYmxlZD5zcGFue2NvbG9yOiM3Nzc7YmFja2dyb3VuZC1jb2xvcjojZmZmO2N1cnNvcjpub3QtYWxsb3dlZH0ubGFiZWx7ZGlzcGxheTppbmxpbmU7cGFkZGluZzouMmVtIC42ZW0gLjNlbTtmb250LXNpemU6NzUlO2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtib3JkZXItcmFkaXVzOi4yNWVtfWEubGFiZWw6aG92ZXIsYS5sYWJlbDpmb2N1c3tjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyfS5sYWJlbDplbXB0eXtkaXNwbGF5Om5vbmV9LmJ0biAubGFiZWx7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0xcHh9LmxhYmVsLWRlZmF1bHR7YmFja2dyb3VuZC1jb2xvcjojNzc3fS5sYWJlbC1kZWZhdWx0W2hyZWZdOmhvdmVyLC5sYWJlbC1kZWZhdWx0W2hyZWZdOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzVlNWU1ZX0ubGFiZWwtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9LmxhYmVsLXByaW1hcnlbaHJlZl06aG92ZXIsLmxhYmVsLXByaW1hcnlbaHJlZl06Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojMjg2MDkwfS5sYWJlbC1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzVjYjg1Y30ubGFiZWwtc3VjY2Vzc1tocmVmXTpob3ZlciwubGFiZWwtc3VjY2Vzc1tocmVmXTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiM0NDlkNDR9LmxhYmVsLWluZm97YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlfS5sYWJlbC1pbmZvW2hyZWZdOmhvdmVyLC5sYWJlbC1pbmZvW2hyZWZdOmZvY3Vze2JhY2tncm91bmQtY29sb3I6IzMxYjBkNX0ubGFiZWwtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGV9LmxhYmVsLXdhcm5pbmdbaHJlZl06aG92ZXIsLmxhYmVsLXdhcm5pbmdbaHJlZl06Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojZWM5NzFmfS5sYWJlbC1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmfS5sYWJlbC1kYW5nZXJbaHJlZl06aG92ZXIsLmxhYmVsLWRhbmdlcltocmVmXTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjOTMwMmN9LmJhZGdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDoxMHB4O3BhZGRpbmc6M3B4IDdweDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDpib2xkO2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojNzc3O2JvcmRlci1yYWRpdXM6MTBweH0uYmFkZ2U6ZW1wdHl7ZGlzcGxheTpub25lfS5idG4gLmJhZGdle3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4fS5idG4teHMgLmJhZGdle3RvcDowO3BhZGRpbmc6MXB4IDVweH1hLmJhZGdlOmhvdmVyLGEuYmFkZ2U6Zm9jdXN7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcn0ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZT4uYmFkZ2UsLm5hdi1waWxscz4uYWN0aXZlPmE+LmJhZGdle2NvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5saXN0LWdyb3VwLWl0ZW0+LmJhZGdle2Zsb2F0OnJpZ2h0fS5saXN0LWdyb3VwLWl0ZW0+LmJhZGdlKy5iYWRnZXttYXJnaW4tcmlnaHQ6NXB4fS5uYXYtcGlsbHM+bGk+YT4uYmFkZ2V7bWFyZ2luLWxlZnQ6M3B4fS5qdW1ib3Ryb257cGFkZGluZzozMHB4IDE1cHg7bWFyZ2luLWJvdHRvbTozMHB4O2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5qdW1ib3Ryb24gaDEsLmp1bWJvdHJvbiAuaDF7Y29sb3I6aW5oZXJpdH0uanVtYm90cm9uIHB7bWFyZ2luLWJvdHRvbToxNXB4O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjIwMH0uanVtYm90cm9uPmhye2JvcmRlci10b3AtY29sb3I6I2Q1ZDVkNX0uY29udGFpbmVyIC5qdW1ib3Ryb24sLmNvbnRhaW5lci1mbHVpZCAuanVtYm90cm9ue2JvcmRlci1yYWRpdXM6M3B4fS5qdW1ib3Ryb24gLmNvbnRhaW5lcnttYXgtd2lkdGg6MTAwJX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXsuanVtYm90cm9ue3BhZGRpbmc6NDhweCAwfS5jb250YWluZXIgLmp1bWJvdHJvbiwuY29udGFpbmVyLWZsdWlkIC5qdW1ib3Ryb257cGFkZGluZy1sZWZ0OjYwcHg7cGFkZGluZy1yaWdodDo2MHB4fS5qdW1ib3Ryb24gaDEsLmp1bWJvdHJvbiAuaDF7Zm9udC1zaXplOjU4LjVweH19LnRodW1ibmFpbHtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6NHB4O21hcmdpbi1ib3R0b206MThweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlciAuMnMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjpib3JkZXIgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246Ym9yZGVyIC4ycyBlYXNlLWluLW91dH0udGh1bWJuYWlsPmltZywudGh1bWJuYWlsIGE+aW1ne21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99YS50aHVtYm5haWw6aG92ZXIsYS50aHVtYm5haWw6Zm9jdXMsYS50aHVtYm5haWwuYWN0aXZle2JvcmRlci1jb2xvcjojMzM3YWI3fS50aHVtYm5haWwgLmNhcHRpb257cGFkZGluZzo5cHg7Y29sb3I6IzMzM30uYWxlcnR7cGFkZGluZzoxNXB4O21hcmdpbi1ib3R0b206MThweDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MnB4fS5hbGVydCBoNHttYXJnaW4tdG9wOjA7Y29sb3I6aW5oZXJpdH0uYWxlcnQgLmFsZXJ0LWxpbmt7Zm9udC13ZWlnaHQ6Ym9sZH0uYWxlcnQ+cCwuYWxlcnQ+dWx7bWFyZ2luLWJvdHRvbTowfS5hbGVydD5wK3B7bWFyZ2luLXRvcDo1cHh9LmFsZXJ0LWRpc21pc3NhYmxlLC5hbGVydC1kaXNtaXNzaWJsZXtwYWRkaW5nLXJpZ2h0OjM1cHh9LmFsZXJ0LWRpc21pc3NhYmxlIC5jbG9zZSwuYWxlcnQtZGlzbWlzc2libGUgLmNsb3Nle3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMnB4O3JpZ2h0Oi0yMXB4O2NvbG9yOmluaGVyaXR9LmFsZXJ0LXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4O2JvcmRlci1jb2xvcjojZDZlOWM2O2NvbG9yOiMzYzc2M2R9LmFsZXJ0LXN1Y2Nlc3MgaHJ7Ym9yZGVyLXRvcC1jb2xvcjojYzllMmIzfS5hbGVydC1zdWNjZXNzIC5hbGVydC1saW5re2NvbG9yOiMyYjU0MmN9LmFsZXJ0LWluZm97YmFja2dyb3VuZC1jb2xvcjojZDllZGY3O2JvcmRlci1jb2xvcjojYmNlOGYxO2NvbG9yOiMzMTcwOGZ9LmFsZXJ0LWluZm8gaHJ7Ym9yZGVyLXRvcC1jb2xvcjojYTZlMWVjfS5hbGVydC1pbmZvIC5hbGVydC1saW5re2NvbG9yOiMyNDUyNjl9LmFsZXJ0LXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzO2JvcmRlci1jb2xvcjojZmFlYmNjO2NvbG9yOiM4YTZkM2J9LmFsZXJ0LXdhcm5pbmcgaHJ7Ym9yZGVyLXRvcC1jb2xvcjojZjdlMWI1fS5hbGVydC13YXJuaW5nIC5hbGVydC1saW5re2NvbG9yOiM2NjUxMmN9LmFsZXJ0LWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7Ym9yZGVyLWNvbG9yOiNlYmNjZDE7Y29sb3I6I2E5NDQ0Mn0uYWxlcnQtZGFuZ2VyIGhye2JvcmRlci10b3AtY29sb3I6I2U0YjljMH0uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5re2NvbG9yOiM4NDM1MzR9QC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVze2Zyb217YmFja2dyb3VuZC1wb3NpdGlvbjo0MHB4IDB9dG97YmFja2dyb3VuZC1wb3NpdGlvbjowIDB9fUAtby1rZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXN7ZnJvbXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjQwcHggMH10b3tiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMH19QGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlc3tmcm9te2JhY2tncm91bmQtcG9zaXRpb246NDBweCAwfXRve2JhY2tncm91bmQtcG9zaXRpb246MCAwfX0ucHJvZ3Jlc3N7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxOHB4O21hcmdpbi1ib3R0b206MThweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpfS5wcm9ncmVzcy1iYXJ7ZmxvYXQ6bGVmdDt3aWR0aDowJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxOHB4O2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLDAuMTUpO2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwwLjE1KTstd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjZzIGVhc2U7LW8tdHJhbnNpdGlvbjp3aWR0aCAuNnMgZWFzZTt0cmFuc2l0aW9uOndpZHRoIC42cyBlYXNlfS5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXIsLnByb2dyZXNzLWJhci1zdHJpcGVke2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6NDBweCA0MHB4O2JhY2tncm91bmQtc2l6ZTo0MHB4IDQwcHh9LnByb2dyZXNzLmFjdGl2ZSAucHJvZ3Jlc3MtYmFyLC5wcm9ncmVzcy1iYXIuYWN0aXZley13ZWJraXQtYW5pbWF0aW9uOnByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZTstby1hbmltYXRpb246cHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGV9LnByb2dyZXNzLWJhci1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzVjYjg1Y30ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3N7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KX0ucHJvZ3Jlc3MtYmFyLWluZm97YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlfS5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXItaW5mb3tiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpfS5wcm9ncmVzcy1iYXItd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGV9LnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci13YXJuaW5ne2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCl9LnByb2dyZXNzLWJhci1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmfS5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXItZGFuZ2Vye2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCl9Lm1lZGlhe21hcmdpbi10b3A6MTVweH0ubWVkaWE6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDowfS5tZWRpYSwubWVkaWEtYm9keXt6b29tOjE7b3ZlcmZsb3c6aGlkZGVufS5tZWRpYS1ib2R5e3dpZHRoOjEwMDAwcHh9Lm1lZGlhLW9iamVjdHtkaXNwbGF5OmJsb2NrfS5tZWRpYS1yaWdodCwubWVkaWE+LnB1bGwtcmlnaHR7cGFkZGluZy1sZWZ0OjEwcHh9Lm1lZGlhLWxlZnQsLm1lZGlhPi5wdWxsLWxlZnR7cGFkZGluZy1yaWdodDoxMHB4fS5tZWRpYS1sZWZ0LC5tZWRpYS1yaWdodCwubWVkaWEtYm9keXtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246dG9wfS5tZWRpYS1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZWRpYS1ib3R0b217dmVydGljYWwtYWxpZ246Ym90dG9tfS5tZWRpYS1oZWFkaW5ne21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjVweH0ubWVkaWEtbGlzdHtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlOm5vbmV9Lmxpc3QtZ3JvdXB7bWFyZ2luLWJvdHRvbToyMHB4O3BhZGRpbmctbGVmdDowfS5saXN0LWdyb3VwLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEwcHggMTVweDttYXJnaW4tYm90dG9tOi0xcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZH0ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjJweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjJweH0ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjJweH1hLmxpc3QtZ3JvdXAtaXRlbXtjb2xvcjojNTU1fWEubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZ3tjb2xvcjojMzMzfWEubGlzdC1ncm91cC1pdGVtOmhvdmVyLGEubGlzdC1ncm91cC1pdGVtOmZvY3Vze3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQsLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciwubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjojNzc3O2N1cnNvcjpub3QtYWxsb3dlZH0ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZywubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZywubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZ3tjb2xvcjppbmhlcml0fS5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LC5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LC5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0e2NvbG9yOiM3Nzd9Lmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXN7ei1pbmRleDoyO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O2JvcmRlci1jb2xvcjojMzM3YWI3fS5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZywubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZz5zbWFsbCwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmc+c21hbGwsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nPnNtYWxsLC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZz4uc21hbGwsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nPi5zbWFsbCwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmc+LnNtYWxse2NvbG9yOmluaGVyaXR9Lmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLXRleHR7Y29sb3I6I2M3ZGRlZn0ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3N7Y29sb3I6IzNjNzYzZDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDh9YS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc3tjb2xvcjojM2M3NjNkfWEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOmluaGVyaXR9YS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpob3ZlcixhLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmZvY3Vze2NvbG9yOiMzYzc2M2Q7YmFja2dyb3VuZC1jb2xvcjojZDBlOWM2fWEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlLGEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmhvdmVyLGEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojM2M3NjNkO2JvcmRlci1jb2xvcjojM2M3NjNkfS5saXN0LWdyb3VwLWl0ZW0taW5mb3tjb2xvcjojMzE3MDhmO2JhY2tncm91bmQtY29sb3I6I2Q5ZWRmN31hLmxpc3QtZ3JvdXAtaXRlbS1pbmZve2NvbG9yOiMzMTcwOGZ9YS5saXN0LWdyb3VwLWl0ZW0taW5mbyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmd7Y29sb3I6aW5oZXJpdH1hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmhvdmVyLGEubGlzdC1ncm91cC1pdGVtLWluZm86Zm9jdXN7Y29sb3I6IzMxNzA4ZjtiYWNrZ3JvdW5kLWNvbG9yOiNjNGUzZjN9YS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmUsYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXIsYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMTcwOGY7Ym9yZGVyLWNvbG9yOiMzMTcwOGZ9Lmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5ne2NvbG9yOiM4YTZkM2I7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzfWEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmd7Y29sb3I6IzhhNmQzYn1hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZ3tjb2xvcjppbmhlcml0fWEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6aG92ZXIsYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpmb2N1c3tjb2xvcjojOGE2ZDNiO2JhY2tncm91bmQtY29sb3I6I2ZhZjJjY31hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZSxhLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZTpob3ZlcixhLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZTpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzhhNmQzYjtib3JkZXItY29sb3I6IzhhNmQzYn0ubGlzdC1ncm91cC1pdGVtLWRhbmdlcntjb2xvcjojYTk0NDQyO2JhY2tncm91bmQtY29sb3I6I2YyZGVkZX1hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXJ7Y29sb3I6I2E5NDQ0Mn1hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOmluaGVyaXR9YS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyOmhvdmVyLGEubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpmb2N1c3tjb2xvcjojYTk0NDQyO2JhY2tncm91bmQtY29sb3I6I2ViY2NjY31hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlLGEubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmU6aG92ZXIsYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2E5NDQ0Mjtib3JkZXItY29sb3I6I2E5NDQ0Mn0ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmd7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5saXN0LWdyb3VwLWl0ZW0tdGV4dHttYXJnaW4tYm90dG9tOjA7bGluZS1oZWlnaHQ6MS4zfS5wYW5lbHttYXJnaW4tYm90dG9tOjE4cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoycHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDUpO2JveC1zaGFkb3c6MCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNSl9LnBhbmVsLWJvZHl7cGFkZGluZzoxNXB4fS5wYW5lbC1oZWFkaW5ne3BhZGRpbmc6MTBweCAxNXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjFweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjFweH0ucGFuZWwtaGVhZGluZz4uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZXtjb2xvcjppbmhlcml0fS5wYW5lbC10aXRsZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOmluaGVyaXR9LnBhbmVsLXRpdGxlPmEsLnBhbmVsLXRpdGxlPnNtYWxsLC5wYW5lbC10aXRsZT4uc21hbGwsLnBhbmVsLXRpdGxlPnNtYWxsPmEsLnBhbmVsLXRpdGxlPi5zbWFsbD5he2NvbG9yOmluaGVyaXR9LnBhbmVsLWZvb3RlcntwYWRkaW5nOjEwcHggMTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxcHh9LnBhbmVsPi5saXN0LWdyb3VwLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXB7bWFyZ2luLWJvdHRvbTowfS5wYW5lbD4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbXtib3JkZXItd2lkdGg6MXB4IDA7Ym9yZGVyLXJhZGl1czowfS5wYW5lbD4ubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtib3JkZXItdG9wOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MXB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MXB4fS5wYW5lbD4ubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxke2JvcmRlci1ib3R0b206MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxcHh9LnBhbmVsLWhlYWRpbmcrLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXdpZHRoOjB9Lmxpc3QtZ3JvdXArLnBhbmVsLWZvb3Rlcntib3JkZXItdG9wLXdpZHRoOjB9LnBhbmVsPi50YWJsZSwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+LnRhYmxle21hcmdpbi1ib3R0b206MH0ucGFuZWw+LnRhYmxlIGNhcHRpb24sLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZSBjYXB0aW9uLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+LnRhYmxlIGNhcHRpb257cGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4fS5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxcHh9LnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjFweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxcHh9LnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MXB4fS5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MXB4fS5wYW5lbD4udGFibGU6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxcHh9LnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MXB4fS5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MXB4fS5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxcHh9LnBhbmVsPi5wYW5lbC1ib2R5Ky50YWJsZSwucGFuZWw+LnBhbmVsLWJvZHkrLnRhYmxlLXJlc3BvbnNpdmUsLnBhbmVsPi50YWJsZSsucGFuZWwtYm9keSwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmUrLnBhbmVsLWJvZHl7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZH0ucGFuZWw+LnRhYmxlPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoLC5wYW5lbD4udGFibGU+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGR7Ym9yZGVyLXRvcDowfS5wYW5lbD4udGFibGUtYm9yZGVyZWQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZHtib3JkZXI6MH0ucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZDpmaXJzdC1jaGlsZHtib3JkZXItbGVmdDowfS5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZDpsYXN0LWNoaWxke2JvcmRlci1yaWdodDowfS5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyOmZpcnN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpmaXJzdC1jaGlsZD50aHtib3JkZXItYm90dG9tOjB9LnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6bGFzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6bGFzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI6bGFzdC1jaGlsZD50aHtib3JkZXItYm90dG9tOjB9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZle2JvcmRlcjowO21hcmdpbi1ib3R0b206MH0ucGFuZWwtZ3JvdXB7bWFyZ2luLWJvdHRvbToxOHB4fS5wYW5lbC1ncm91cCAucGFuZWx7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MnB4fS5wYW5lbC1ncm91cCAucGFuZWwrLnBhbmVse21hcmdpbi10b3A6NXB4fS5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZ3tib3JkZXItYm90dG9tOjB9LnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keSwucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3Vwe2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGR9LnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXJ7Ym9yZGVyLXRvcDowfS5wYW5lbC1ncm91cCAucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkfS5wYW5lbC1kZWZhdWx0e2JvcmRlci1jb2xvcjojZGRkfS5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5ne2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZGRkfS5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItdG9wLWNvbG9yOiNkZGR9LnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgLmJhZGdle2NvbG9yOiNmNWY1ZjU7YmFja2dyb3VuZC1jb2xvcjojMzMzfS5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b20tY29sb3I6I2RkZH0ucGFuZWwtcHJpbWFyeXtib3JkZXItY29sb3I6IzMzN2FiN30ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZ3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzMzN2FiNztib3JkZXItY29sb3I6IzMzN2FiN30ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLXRvcC1jb2xvcjojMzM3YWI3fS5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtjb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2ZmZn0ucGFuZWwtcHJpbWFyeT4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItYm90dG9tLWNvbG9yOiMzMzdhYjd9LnBhbmVsLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNkNmU5YzZ9LnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWhlYWRpbmd7Y29sb3I6IzNjNzYzZDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDg7Ym9yZGVyLWNvbG9yOiNkNmU5YzZ9LnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci10b3AtY29sb3I6I2Q2ZTljNn0ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtaGVhZGluZyAuYmFkZ2V7Y29sb3I6I2RmZjBkODtiYWNrZ3JvdW5kLWNvbG9yOiMzYzc2M2R9LnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZDZlOWM2fS5wYW5lbC1pbmZve2JvcmRlci1jb2xvcjojYmNlOGYxfS5wYW5lbC1pbmZvPi5wYW5lbC1oZWFkaW5ne2NvbG9yOiMzMTcwOGY7YmFja2dyb3VuZC1jb2xvcjojZDllZGY3O2JvcmRlci1jb2xvcjojYmNlOGYxfS5wYW5lbC1pbmZvPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItdG9wLWNvbG9yOiNiY2U4ZjF9LnBhbmVsLWluZm8+LnBhbmVsLWhlYWRpbmcgLmJhZGdle2NvbG9yOiNkOWVkZjc7YmFja2dyb3VuZC1jb2xvcjojMzE3MDhmfS5wYW5lbC1pbmZvPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b20tY29sb3I6I2JjZThmMX0ucGFuZWwtd2FybmluZ3tib3JkZXItY29sb3I6I2ZhZWJjY30ucGFuZWwtd2FybmluZz4ucGFuZWwtaGVhZGluZ3tjb2xvcjojOGE2ZDNiO2JhY2tncm91bmQtY29sb3I6I2ZjZjhlMztib3JkZXItY29sb3I6I2ZhZWJjY30ucGFuZWwtd2FybmluZz4ucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLXRvcC1jb2xvcjojZmFlYmNjfS5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtjb2xvcjojZmNmOGUzO2JhY2tncm91bmQtY29sb3I6IzhhNmQzYn0ucGFuZWwtd2FybmluZz4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItYm90dG9tLWNvbG9yOiNmYWViY2N9LnBhbmVsLWRhbmdlcntib3JkZXItY29sb3I6I2ViY2NkMX0ucGFuZWwtZGFuZ2VyPi5wYW5lbC1oZWFkaW5ne2NvbG9yOiNhOTQ0NDI7YmFja2dyb3VuZC1jb2xvcjojZjJkZWRlO2JvcmRlci1jb2xvcjojZWJjY2QxfS5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci10b3AtY29sb3I6I2ViY2NkMX0ucGFuZWwtZGFuZ2VyPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtjb2xvcjojZjJkZWRlO2JhY2tncm91bmQtY29sb3I6I2E5NDQ0Mn0ucGFuZWwtZGFuZ2VyPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b20tY29sb3I6I2ViY2NkMX0uZW1iZWQtcmVzcG9uc2l2ZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2hlaWdodDowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59LmVtYmVkLXJlc3BvbnNpdmUgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSwuZW1iZWQtcmVzcG9uc2l2ZSBpZnJhbWUsLmVtYmVkLXJlc3BvbnNpdmUgZW1iZWQsLmVtYmVkLXJlc3BvbnNpdmUgb2JqZWN0LC5lbWJlZC1yZXNwb25zaXZlIHZpZGVve3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2JvcmRlcjowfS5lbWJlZC1yZXNwb25zaXZlLmVtYmVkLXJlc3BvbnNpdmUtMTZieTl7cGFkZGluZy1ib3R0b206NTYuMjUlfS5lbWJlZC1yZXNwb25zaXZlLmVtYmVkLXJlc3BvbnNpdmUtNGJ5M3twYWRkaW5nLWJvdHRvbTo3NSV9LndlbGx7bWluLWhlaWdodDoyMHB4O3BhZGRpbmc6MTlweDttYXJnaW4tYm90dG9tOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlcjoxcHggc29saWQgI2UzZTNlMztib3JkZXItcmFkaXVzOjJweDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA1KX0ud2VsbCBibG9ja3F1b3Rle2JvcmRlci1jb2xvcjojZGRkO2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLDAuMTUpfS53ZWxsLWxne3BhZGRpbmc6MjRweDtib3JkZXItcmFkaXVzOjNweH0ud2VsbC1zbXtwYWRkaW5nOjlweDtib3JkZXItcmFkaXVzOjFweH0uY2xvc2V7ZmxvYXQ6cmlnaHQ7Zm9udC1zaXplOjE5LjVweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE7Y29sb3I6IzAwMDt0ZXh0LXNoYWRvdzowIDFweCAwICNmZmY7b3BhY2l0eTouMjtmaWx0ZXI6YWxwaGEob3BhY2l0eT0yMCl9LmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1c3tjb2xvcjojMDAwO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6LjU7ZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApfWJ1dHRvbi5jbG9zZXtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX0ubW9kYWwtb3BlbntvdmVyZmxvdzpoaWRkZW59Lm1vZGFse2Rpc3BsYXk6bm9uZTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDQwOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO291dGxpbmU6MH0ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9ney13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMjUlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMjUlKTstby10cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0yNSUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTI1JSk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0fS5tb2RhbC5pbiAubW9kYWwtZGlhbG9ney13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKTstby10cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCl9Lm1vZGFsLW9wZW4gLm1vZGFse292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b30ubW9kYWwtZGlhbG9ne3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmF1dG87bWFyZ2luOjEwcHh9Lm1vZGFsLWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzk5OTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtib3JkZXItcmFkaXVzOjNweDstd2Via2l0LWJveC1zaGFkb3c6MCAzcHggOXB4IHJnYmEoMCwwLDAsMC41KTtib3gtc2hhZG93OjAgM3B4IDlweCByZ2JhKDAsMCwwLDAuNSk7LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O291dGxpbmU6MH0ubW9kYWwtYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tb2RhbC1iYWNrZHJvcC5mYWRle29wYWNpdHk6MDtmaWx0ZXI6YWxwaGEob3BhY2l0eT0wKX0ubW9kYWwtYmFja2Ryb3AuaW57b3BhY2l0eTouNTtmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCl9Lm1vZGFsLWhlYWRlcntwYWRkaW5nOjE1cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTVlNTttaW4taGVpZ2h0OjE2LjQyODU3MTQzcHh9Lm1vZGFsLWhlYWRlciAuY2xvc2V7bWFyZ2luLXRvcDotMnB4fS5tb2RhbC10aXRsZXttYXJnaW46MDtsaW5lLWhlaWdodDoxLjQyODU3MTQzfS5tb2RhbC1ib2R5e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTVweH0ubW9kYWwtZm9vdGVye3BhZGRpbmc6MTVweDt0ZXh0LWFsaWduOnJpZ2h0O2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTV9Lm1vZGFsLWZvb3RlciAuYnRuKy5idG57bWFyZ2luLWxlZnQ6NXB4O21hcmdpbi1ib3R0b206MH0ubW9kYWwtZm9vdGVyIC5idG4tZ3JvdXAgLmJ0bisuYnRue21hcmdpbi1sZWZ0Oi0xcHh9Lm1vZGFsLWZvb3RlciAuYnRuLWJsb2NrKy5idG4tYmxvY2t7bWFyZ2luLWxlZnQ6MH0ubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5tb2RhbC1kaWFsb2d7d2lkdGg6NjAwcHg7bWFyZ2luOjMwcHggYXV0b30ubW9kYWwtY29udGVudHstd2Via2l0LWJveC1zaGFkb3c6MCA1cHggMTVweCByZ2JhKDAsMCwwLDAuNSk7Ym94LXNoYWRvdzowIDVweCAxNXB4IHJnYmEoMCwwLDAsMC41KX0ubW9kYWwtc217d2lkdGg6MzAwcHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsubW9kYWwtbGd7d2lkdGg6OTAwcHh9fS50b29sdGlwe3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTA3MDtkaXNwbGF5OmJsb2NrO3Zpc2liaWxpdHk6dmlzaWJsZTtmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuNDtvcGFjaXR5OjA7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MCl9LnRvb2x0aXAuaW57b3BhY2l0eTouOTtmaWx0ZXI6YWxwaGEob3BhY2l0eT05MCl9LnRvb2x0aXAudG9we21hcmdpbi10b3A6LTNweDtwYWRkaW5nOjVweCAwfS50b29sdGlwLnJpZ2h0e21hcmdpbi1sZWZ0OjNweDtwYWRkaW5nOjAgNXB4fS50b29sdGlwLmJvdHRvbXttYXJnaW4tdG9wOjNweDtwYWRkaW5nOjVweCAwfS50b29sdGlwLmxlZnR7bWFyZ2luLWxlZnQ6LTNweDtwYWRkaW5nOjAgNXB4fS50b29sdGlwLWlubmVye21heC13aWR0aDoyMDBweDtwYWRkaW5nOjNweCA4cHg7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyLXJhZGl1czoycHh9LnRvb2x0aXAtYXJyb3d7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkfS50b29sdGlwLnRvcCAudG9vbHRpcC1hcnJvd3tib3R0b206MDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNXB4O2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLXRvcC1jb2xvcjojMDAwfS50b29sdGlwLnRvcC1sZWZ0IC50b29sdGlwLWFycm93e2JvdHRvbTowO3JpZ2h0OjVweDttYXJnaW4tYm90dG9tOi01cHg7Ym9yZGVyLXdpZHRoOjVweCA1cHggMDtib3JkZXItdG9wLWNvbG9yOiMwMDB9LnRvb2x0aXAudG9wLXJpZ2h0IC50b29sdGlwLWFycm93e2JvdHRvbTowO2xlZnQ6NXB4O21hcmdpbi1ib3R0b206LTVweDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci10b3AtY29sb3I6IzAwMH0udG9vbHRpcC5yaWdodCAudG9vbHRpcC1hcnJvd3t0b3A6NTAlO2xlZnQ6MDttYXJnaW4tdG9wOi01cHg7Ym9yZGVyLXdpZHRoOjVweCA1cHggNXB4IDA7Ym9yZGVyLXJpZ2h0LWNvbG9yOiMwMDB9LnRvb2x0aXAubGVmdCAudG9vbHRpcC1hcnJvd3t0b3A6NTAlO3JpZ2h0OjA7bWFyZ2luLXRvcDotNXB4O2JvcmRlci13aWR0aDo1cHggMCA1cHggNXB4O2JvcmRlci1sZWZ0LWNvbG9yOiMwMDB9LnRvb2x0aXAuYm90dG9tIC50b29sdGlwLWFycm93e3RvcDowO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi01cHg7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweDtib3JkZXItYm90dG9tLWNvbG9yOiMwMDB9LnRvb2x0aXAuYm90dG9tLWxlZnQgLnRvb2x0aXAtYXJyb3d7dG9wOjA7cmlnaHQ6NXB4O21hcmdpbi10b3A6LTVweDtib3JkZXItd2lkdGg6MCA1cHggNXB4O2JvcmRlci1ib3R0b20tY29sb3I6IzAwMH0udG9vbHRpcC5ib3R0b20tcmlnaHQgLnRvb2x0aXAtYXJyb3d7dG9wOjA7bGVmdDo1cHg7bWFyZ2luLXRvcDotNXB4O2JvcmRlci13aWR0aDowIDVweCA1cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMDAwfS5wb3BvdmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwNjA7ZGlzcGxheTpub25lO21heC13aWR0aDoyNzZweDtwYWRkaW5nOjFweDtmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzowIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtib3gtc2hhZG93OjAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO3doaXRlLXNwYWNlOm5vcm1hbH0ucG9wb3Zlci50b3B7bWFyZ2luLXRvcDotMTBweH0ucG9wb3Zlci5yaWdodHttYXJnaW4tbGVmdDoxMHB4fS5wb3BvdmVyLmJvdHRvbXttYXJnaW4tdG9wOjEwcHh9LnBvcG92ZXIubGVmdHttYXJnaW4tbGVmdDotMTBweH0ucG9wb3Zlci10aXRsZXttYXJnaW46MDtwYWRkaW5nOjhweCAxNHB4O2ZvbnQtc2l6ZToxM3B4O2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJlYmViO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDB9LnBvcG92ZXItY29udGVudHtwYWRkaW5nOjlweCAxNHB4fS5wb3BvdmVyPi5hcnJvdywucG9wb3Zlcj4uYXJyb3c6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt3aWR0aDowO2hlaWdodDowO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWR9LnBvcG92ZXI+LmFycm93e2JvcmRlci13aWR0aDoxMXB4fS5wb3BvdmVyPi5hcnJvdzphZnRlcntib3JkZXItd2lkdGg6MTBweDtjb250ZW50OlwiXCJ9LnBvcG92ZXIudG9wPi5hcnJvd3tsZWZ0OjUwJTttYXJnaW4tbGVmdDotMTFweDtib3JkZXItYm90dG9tLXdpZHRoOjA7Ym9yZGVyLXRvcC1jb2xvcjojOTk5O2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwwLjI1KTtib3R0b206LTExcHh9LnBvcG92ZXIudG9wPi5hcnJvdzphZnRlcntjb250ZW50OlwiIFwiO2JvdHRvbToxcHg7bWFyZ2luLWxlZnQ6LTEwcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDowO2JvcmRlci10b3AtY29sb3I6I2ZmZn0ucG9wb3Zlci5yaWdodD4uYXJyb3d7dG9wOjUwJTtsZWZ0Oi0xMXB4O21hcmdpbi10b3A6LTExcHg7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItcmlnaHQtY29sb3I6Izk5OTtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwwLjI1KX0ucG9wb3Zlci5yaWdodD4uYXJyb3c6YWZ0ZXJ7Y29udGVudDpcIiBcIjtsZWZ0OjFweDtib3R0b206LTEwcHg7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItcmlnaHQtY29sb3I6I2ZmZn0ucG9wb3Zlci5ib3R0b20+LmFycm93e2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0xMXB4O2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItYm90dG9tLWNvbG9yOiM5OTk7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLDAuMjUpO3RvcDotMTFweH0ucG9wb3Zlci5ib3R0b20+LmFycm93OmFmdGVye2NvbnRlbnQ6XCIgXCI7dG9wOjFweDttYXJnaW4tbGVmdDotMTBweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZmZmfS5wb3BvdmVyLmxlZnQ+LmFycm93e3RvcDo1MCU7cmlnaHQ6LTExcHg7bWFyZ2luLXRvcDotMTFweDtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC1jb2xvcjojOTk5O2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMCwwLDAsMC4yNSl9LnBvcG92ZXIubGVmdD4uYXJyb3c6YWZ0ZXJ7Y29udGVudDpcIiBcIjtyaWdodDoxcHg7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtY29sb3I6I2ZmZjtib3R0b206LTEwcHh9LmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJvdXNlbC1pbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJX0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW17ZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjouNnMgZWFzZS1pbi1vdXQgbGVmdDstby10cmFuc2l0aW9uOi42cyBlYXNlLWluLW91dCBsZWZ0O3RyYW5zaXRpb246LjZzIGVhc2UtaW4tb3V0IGxlZnR9LmNhcm91c2VsLWlubmVyPi5pdGVtPmltZywuY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWd7bGluZS1oZWlnaHQ6MX1AbWVkaWEgYWxsIGFuZCAodHJhbnNmb3JtLTNkKSwoLXdlYmtpdC10cmFuc2Zvcm0tM2Qpey5jYXJvdXNlbC1pbm5lcj4uaXRlbXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXBlcnNwZWN0aXZlOjEwMDA7cGVyc3BlY3RpdmU6MTAwMH0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0ubmV4dCwuY2Fyb3VzZWwtaW5uZXI+Lml0ZW0uYWN0aXZlLnJpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtsZWZ0OjB9LmNhcm91c2VsLWlubmVyPi5pdGVtLnByZXYsLmNhcm91c2VsLWlubmVyPi5pdGVtLmFjdGl2ZS5sZWZ0ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO2xlZnQ6MH0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0ubmV4dC5sZWZ0LC5jYXJvdXNlbC1pbm5lcj4uaXRlbS5wcmV2LnJpZ2h0LC5jYXJvdXNlbC1pbm5lcj4uaXRlbS5hY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO2xlZnQ6MH19LmNhcm91c2VsLWlubmVyPi5hY3RpdmUsLmNhcm91c2VsLWlubmVyPi5uZXh0LC5jYXJvdXNlbC1pbm5lcj4ucHJldntkaXNwbGF5OmJsb2NrfS5jYXJvdXNlbC1pbm5lcj4uYWN0aXZle2xlZnQ6MH0uY2Fyb3VzZWwtaW5uZXI+Lm5leHQsLmNhcm91c2VsLWlubmVyPi5wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCV9LmNhcm91c2VsLWlubmVyPi5uZXh0e2xlZnQ6MTAwJX0uY2Fyb3VzZWwtaW5uZXI+LnByZXZ7bGVmdDotMTAwJX0uY2Fyb3VzZWwtaW5uZXI+Lm5leHQubGVmdCwuY2Fyb3VzZWwtaW5uZXI+LnByZXYucmlnaHR7bGVmdDowfS5jYXJvdXNlbC1pbm5lcj4uYWN0aXZlLmxlZnR7bGVmdDotMTAwJX0uY2Fyb3VzZWwtaW5uZXI+LmFjdGl2ZS5yaWdodHtsZWZ0OjEwMCV9LmNhcm91c2VsLWNvbnRyb2x7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2JvdHRvbTowO3dpZHRoOjE1JTtvcGFjaXR5Oi41O2ZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtmb250LXNpemU6MjBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3RleHQtc2hhZG93OjAgMXB4IDJweCByZ2JhKDAsMCwwLDAuNil9LmNhcm91c2VsLWNvbnRyb2wubGVmdHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwwLDAsMC41KSAwLCByZ2JhKDAsMCwwLDAuMDAwMSkgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLDAsMCwwLjUpIDAsIHJnYmEoMCwwLDAsMC4wMDAxKSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwwLDAsMC41KSksIHRvKHJnYmEoMCwwLDAsMC4wMDAxKSkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDAuNSkgMCwgcmdiYSgwLDAsMCwwLjAwMDEpIDEwMCUpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzgwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKX0uY2Fyb3VzZWwtY29udHJvbC5yaWdodHtsZWZ0OmF1dG87cmlnaHQ6MDtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwwLDAsMC4wMDAxKSAwLCByZ2JhKDAsMCwwLDAuNSkgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLDAsMCwwLjAwMDEpIDAsIHJnYmEoMCwwLDAsMC41KSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwwLDAsMC4wMDAxKSksIHRvKHJnYmEoMCwwLDAsMC41KSkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDAuMDAwMSkgMCwgcmdiYSgwLDAsMCwwLjUpIDEwMCUpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyM4MDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKX0uY2Fyb3VzZWwtY29udHJvbDpob3ZlciwuY2Fyb3VzZWwtY29udHJvbDpmb2N1c3tvdXRsaW5lOjA7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtvcGFjaXR5Oi45O2ZpbHRlcjphbHBoYShvcGFjaXR5PTkwKX0uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQsLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7ei1pbmRleDo1O2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnR7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTEwcHh9LmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCwuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHR7cmlnaHQ6NTAlO21hcmdpbi1yaWdodDotMTBweH0uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHR7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDttYXJnaW4tdG9wOi0xMHB4O2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6c2VyaWZ9LmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldjpiZWZvcmV7Y29udGVudDonXFwyMDM5J30uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0OmJlZm9yZXtjb250ZW50OidcXDIwM2EnfS5jYXJvdXNlbC1pbmRpY2F0b3Jze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxMHB4O2xlZnQ6NTAlO3otaW5kZXg6MTU7d2lkdGg6NjAlO21hcmdpbi1sZWZ0Oi0zMCU7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lO3RleHQtYWxpZ246Y2VudGVyfS5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOjFweDt0ZXh0LWluZGVudDotOTk5cHg7Ym9yZGVyOjFweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MTBweDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDAgXFw5O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKX0uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZle21hcmdpbjowO3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5jYXJvdXNlbC1jYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTUlO3JpZ2h0OjE1JTtib3R0b206MjBweDt6LWluZGV4OjEwO3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3RleHQtc2hhZG93OjAgMXB4IDJweCByZ2JhKDAsMCwwLDAuNil9LmNhcm91c2VsLWNhcHRpb24gLmJ0bnt0ZXh0LXNoYWRvdzpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpey5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LC5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCwuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHR7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDttYXJnaW4tdG9wOi0xNXB4O2ZvbnQtc2l6ZTozMHB4fS5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LC5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXZ7bWFyZ2luLWxlZnQ6LTE1cHh9LmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHR7bWFyZ2luLXJpZ2h0Oi0xNXB4fS5jYXJvdXNlbC1jYXB0aW9ue2xlZnQ6MjAlO3JpZ2h0OjIwJTtwYWRkaW5nLWJvdHRvbTozMHB4fS5jYXJvdXNlbC1pbmRpY2F0b3Jze2JvdHRvbToyMHB4fX0uY2xlYXJmaXg6YmVmb3JlLC5jbGVhcmZpeDphZnRlciwuZGwtaG9yaXpvbnRhbCBkZDpiZWZvcmUsLmRsLWhvcml6b250YWwgZGQ6YWZ0ZXIsLmNvbnRhaW5lcjpiZWZvcmUsLmNvbnRhaW5lcjphZnRlciwuY29udGFpbmVyLWZsdWlkOmJlZm9yZSwuY29udGFpbmVyLWZsdWlkOmFmdGVyLC5yb3c6YmVmb3JlLC5yb3c6YWZ0ZXIsLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDpiZWZvcmUsLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlciwuYnRuLXRvb2xiYXI6YmVmb3JlLC5idG4tdG9vbGJhcjphZnRlciwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6YmVmb3JlLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDphZnRlciwubmF2OmJlZm9yZSwubmF2OmFmdGVyLC5uYXZiYXI6YmVmb3JlLC5uYXZiYXI6YWZ0ZXIsLm5hdmJhci1oZWFkZXI6YmVmb3JlLC5uYXZiYXItaGVhZGVyOmFmdGVyLC5uYXZiYXItY29sbGFwc2U6YmVmb3JlLC5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsLnBhZ2VyOmJlZm9yZSwucGFnZXI6YWZ0ZXIsLnBhbmVsLWJvZHk6YmVmb3JlLC5wYW5lbC1ib2R5OmFmdGVyLC5tb2RhbC1mb290ZXI6YmVmb3JlLC5tb2RhbC1mb290ZXI6YWZ0ZXJ7Y29udGVudDpcIiBcIjtkaXNwbGF5OnRhYmxlfS5jbGVhcmZpeDphZnRlciwuZGwtaG9yaXpvbnRhbCBkZDphZnRlciwuY29udGFpbmVyOmFmdGVyLC5jb250YWluZXItZmx1aWQ6YWZ0ZXIsLnJvdzphZnRlciwuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyLC5idG4tdG9vbGJhcjphZnRlciwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6YWZ0ZXIsLm5hdjphZnRlciwubmF2YmFyOmFmdGVyLC5uYXZiYXItaGVhZGVyOmFmdGVyLC5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsLnBhZ2VyOmFmdGVyLC5wYW5lbC1ib2R5OmFmdGVyLC5tb2RhbC1mb290ZXI6YWZ0ZXJ7Y2xlYXI6Ym90aH0uY2VudGVyLWJsb2Nre2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30ucHVsbC1yaWdodHtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5wdWxsLWxlZnR7ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fS5zaG93e2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH0uaW52aXNpYmxle3Zpc2liaWxpdHk6aGlkZGVufS50ZXh0LWhpZGV7Zm9udDowLzAgYTtjb2xvcjp0cmFuc3BhcmVudDt0ZXh0LXNoYWRvdzpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjB9LmhpZGRlbntkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50fS5hZmZpeHtwb3NpdGlvbjpmaXhlZH1ALW1zLXZpZXdwb3J0e3dpZHRoOmRldmljZS13aWR0aH0udmlzaWJsZS14cywudmlzaWJsZS1zbSwudmlzaWJsZS1tZCwudmlzaWJsZS1sZ3tkaXNwbGF5Om5vbmUgIWltcG9ydGFudH0udmlzaWJsZS14cy1ibG9jaywudmlzaWJsZS14cy1pbmxpbmUsLnZpc2libGUteHMtaW5saW5lLWJsb2NrLC52aXNpYmxlLXNtLWJsb2NrLC52aXNpYmxlLXNtLWlubGluZSwudmlzaWJsZS1zbS1pbmxpbmUtYmxvY2ssLnZpc2libGUtbWQtYmxvY2ssLnZpc2libGUtbWQtaW5saW5lLC52aXNpYmxlLW1kLWlubGluZS1ibG9jaywudmlzaWJsZS1sZy1ibG9jaywudmlzaWJsZS1sZy1pbmxpbmUsLnZpc2libGUtbGctaW5saW5lLWJsb2Nre2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsudmlzaWJsZS14c3tkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9dGFibGUudmlzaWJsZS14c3tkaXNwbGF5OnRhYmxlfXRyLnZpc2libGUteHN7ZGlzcGxheTp0YWJsZS1yb3cgIWltcG9ydGFudH10aC52aXNpYmxlLXhzLHRkLnZpc2libGUteHN7ZGlzcGxheTp0YWJsZS1jZWxsICFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsudmlzaWJsZS14cy1ibG9ja3tkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsudmlzaWJsZS14cy1pbmxpbmV7ZGlzcGxheTppbmxpbmUgIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey52aXNpYmxlLXhzLWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpey52aXNpYmxlLXNte2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH10YWJsZS52aXNpYmxlLXNte2Rpc3BsYXk6dGFibGV9dHIudmlzaWJsZS1zbXtkaXNwbGF5OnRhYmxlLXJvdyAhaW1wb3J0YW50fXRoLnZpc2libGUtc20sdGQudmlzaWJsZS1zbXtkaXNwbGF5OnRhYmxlLWNlbGwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KXsudmlzaWJsZS1zbS1ibG9ja3tkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7LnZpc2libGUtc20taW5saW5le2Rpc3BsYXk6aW5saW5lICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7LnZpc2libGUtc20taW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSBhbmQgKG1heC13aWR0aDoxMTk5cHgpey52aXNpYmxlLW1ke2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH10YWJsZS52aXNpYmxlLW1ke2Rpc3BsYXk6dGFibGV9dHIudmlzaWJsZS1tZHtkaXNwbGF5OnRhYmxlLXJvdyAhaW1wb3J0YW50fXRoLnZpc2libGUtbWQsdGQudmlzaWJsZS1tZHtkaXNwbGF5OnRhYmxlLWNlbGwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7LnZpc2libGUtbWQtYmxvY2t7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkgYW5kIChtYXgtd2lkdGg6MTE5OXB4KXsudmlzaWJsZS1tZC1pbmxpbmV7ZGlzcGxheTppbmxpbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7LnZpc2libGUtbWQtaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LnZpc2libGUtbGd7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fXRhYmxlLnZpc2libGUtbGd7ZGlzcGxheTp0YWJsZX10ci52aXNpYmxlLWxne2Rpc3BsYXk6dGFibGUtcm93ICFpbXBvcnRhbnR9dGgudmlzaWJsZS1sZyx0ZC52aXNpYmxlLWxne2Rpc3BsYXk6dGFibGUtY2VsbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey52aXNpYmxlLWxnLWJsb2Nre2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsudmlzaWJsZS1sZy1pbmxpbmV7ZGlzcGxheTppbmxpbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsudmlzaWJsZS1sZy1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2sgIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5oaWRkZW4teHN7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7LmhpZGRlbi1zbXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7LmhpZGRlbi1tZHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuaGlkZGVuLWxne2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fX0udmlzaWJsZS1wcmludHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1AbWVkaWEgcHJpbnR7LnZpc2libGUtcHJpbnR7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fXRhYmxlLnZpc2libGUtcHJpbnR7ZGlzcGxheTp0YWJsZX10ci52aXNpYmxlLXByaW50e2Rpc3BsYXk6dGFibGUtcm93ICFpbXBvcnRhbnR9dGgudmlzaWJsZS1wcmludCx0ZC52aXNpYmxlLXByaW50e2Rpc3BsYXk6dGFibGUtY2VsbCAhaW1wb3J0YW50fX0udmlzaWJsZS1wcmludC1ibG9ja3tkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1AbWVkaWEgcHJpbnR7LnZpc2libGUtcHJpbnQtYmxvY2t7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50fX0udmlzaWJsZS1wcmludC1pbmxpbmV7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9QG1lZGlhIHByaW50ey52aXNpYmxlLXByaW50LWlubGluZXtkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50fX0udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2t7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9QG1lZGlhIHByaW50ey52aXNpYmxlLXByaW50LWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50fX1AbWVkaWEgcHJpbnR7LmhpZGRlbi1wcmludHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"text-center\">\n    <h3>The<span class=\"color\"> Designer's</span> Website</h3>\n    <p>Looking for a designer? <br /> Look No Further. </p>\n  </div>\n  <div class=\"divider-1\"></div>\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Latest News</span></h3>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let news of news\" class=\"col-md-6\">\n      <div class=\"card mb-6 shadow-sm\">\n        <div class=\"card-body\" style=\"height:400px;overflow:hidden;\" >\n          <img src=\"./../../uploads/news/{{news.image}}\" class=\"img img-responsive\"/> <h3 class=\"card-text\">{{news.title}} <a routerLink=\"/userview/{{news.id}}\" class=\"btn btn-sm btn-color\">View</a></h3>\n          <p class=\"card-text\">{{news.body}}</p>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n  <!--SECOND NEWS-->\n  <div class=\"row\">\n    <div *ngFor=\"let news of news\" class=\"col-md-6\">\n      <div class=\"card mb-6 shadow-sm\">\n        <div class=\"card-body\" style=\"height:400px;overflow:hidden;\" >\n          <img src=\"./../../uploads/news/{{news.image}}\" class=\"img img-responsive\"/><h3 class=\"card-text\">{{news.title}} <a routerLink=\"/userview/{{news.id}}\" class=\"btn btn-sm btn-color\">View</a></h3>\n          <p class=\"card-text\">{{news.body}}</p>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n  <div class=\"divider-1\"></div>\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Hottest Events</span></h3>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let event of events\" class=\"col-md-6\">\n      <div class=\"card mb-6 shadow-sm\">\n        <div class=\"card-body\" style=\"height:400px;overflow:hidden;\">\n          <!--  <img src=\"./../../uploads/event/{{event.image}}\" class=\"img img-responsive\"/>-->\n          <h3 class=\"card-text\">{{event.title}} <a routerLink=\"/userevent/{{event.id}}\" class=\"btn btn-sm btn-color\">View</a></h3>\n          <p class=\"card-text\">{{event.body}}</p>          \n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n  <div class=\"row\"><img src=\"./../../assets/img/large.png\" class=\"img  img-responsive\" /></div>\n\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Upcoming Events</span></h3>\n  </div>\n  <app-calend></app-calend>\n\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Subscribe to our newsletters</span></h3>\n  </div>\n  <div class=\"col-md-8 offset-md-2\">\n    <div class=\"card bg-warning\">\n      <div class=\"card-body\">\n        <h3><span>The latest design news, jobs, & events.</span> </h3>\n        <h4>Straight to your every other week</h4>\n        <p>Join over 300,000 designers to stay up-to-date with the core77 newsletter...</p>\n        <div class=\"subscribe-box\">\n          <h5 class=\"bold\">Subscribe :</h5>\n          <!-- Form -->\n          <form role=\"form\">\n            <!-- Input Group -->\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email Id\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-color\" type=\"button\">Subscribe</button>\n              </span>\n            </div>\n            <br />\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" style=\"display:inline;width:200px;margin-right:10px;\" placeholder=\"Name\">\n              <input type=\"text\" class=\"form-control\" style=\"display:inline;width:200px;margin-right:10px;\" placeholder=\"Title\">\n              <input type=\"text\" class=\"form-control\" style=\"display:inline;width:200px;\" placeholder=\"Company\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n  <div class=\"divider-1\"></div>\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Strategic Partners</span></h3>\n  </div>\n  <!-- Client One Starts -->\n  <br />\n  <div class=\"client-one\">\n    <owl-carousel [options]=\"myCarouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\n      <div class=\"cl-item\" *ngFor=\"let image of myCarouselImages;let i = index\">\n        <a href=\"#\"><img src=\"{{image}}\" alt=\"\"  class=\"img-responsive\" /></a>\n      </div>\n    </owl-carousel>\n    <!-- <div class=\"owl-carousel\" data-items=\"5\" data-auto-play=\"true\" data-pagination=\"false\" data-single-item=\"false\">\n    <div class=\"c1-item\">\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-2.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Repetition</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-3.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Pleasure</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-4.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Molestiae</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-5.png\" alt=\"\"  class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Extremely</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-6.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Annoying</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-2.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Doloribus</a></h5>\n    </div>\n    <div class=\"c1-item\">\n    <a href=\"#\"><img src=\"./../../assets/img/clients/c1-3.png\" alt=\"\" class=\"img-responsive\" /></a>\n    <div class=\"img-hover\"></div>\n    <h5><a href=\"#\">Repellat</a></h5>\n    </div>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(newsService, eventService) {
        this.newsService = newsService;
        this.eventService = eventService;
        this.myCarouselImages = ["./../../assets/img/clients/c1-1.png", "./../../assets/img/clients/c1-2.png",
            "./../../assets/img/clients/c1-3.png", "./../../assets/img/clients/c1-4.png",
            "./../../assets/img/clients/c1-5.png", "./../../assets/img/clients/c1-6.png",
            "./../../assets/img/clients/c1-3.png"];
        this.myCarouselOptions = { items: 7, dots: true, nav: true };
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.indexNews();
        this.indexEvent();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.indexNews = function () {
        var _this = this;
        this.newsService.indexNews()
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    HomeComponent.prototype.indexEvent = function () {
        var _this = this;
        this.eventService.indexEvent()
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/news.ts":
/*!*************************!*\
  !*** ./src/app/news.ts ***!
  \*************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"left\">{{page_title}}</h3>\n  <div class=\"container\">\n    <div class=\"\" *ngIf=\"loggedIn\">\n      <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n    </div>\n    <div class=\"\" *ngIf=\"admin\">\n      <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n    </div>\n    <div class=\"row\">\n      <p></p>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let news of news\" class=\"col-md-4\">\n        <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-body\">\n            <img src=\"./../../uploads/news/{{news.image}}\" class=\"img-responsive\" />\n            <div class=\"clearfix\"></div>\n            <h4 class=\"card-text\">{{news.title}}</h4>\n            <p class=\"card-text\">{{news.body}}</p>\n            <div class=\"d-flex justify-content-between align-items-center\">\n              <div class=\"btn-group\">\n                <a routerLink=\"/userview/{{news.id}}\" class=\"btn btn-sm btn-outline-secondary\">View</a>\n              </div>\n              <small class=\"text-muted\">{{news.createdAt}}</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
        this.page_title = 'NEWS';
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
        this.index();
    }
    NewsComponent.prototype.index = function () {
        var _this = this;
        this.newsService.indexNews()
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/news/user-view/user-view.component.css":
/*!********************************************************!*\
  !*** ./src/app/news/user-view/user-view.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.crop {\n height: 300px;\n width: 400px;\n overflow: hidden;\n}\n.crop img {\n height: auto;\n width: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy91c2VyLXZpZXcvdXNlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsY0FBYztDQUNkLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9uZXdzL3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNyb3Age1xuIGhlaWdodDogMzAwcHg7XG4gd2lkdGg6IDQwMHB4O1xuIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3JvcCBpbWcge1xuIGhlaWdodDogYXV0bztcbiB3aWR0aDogNDAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/news/user-view/user-view.component.html":
/*!*********************************************************!*\
  !*** ./src/app/news/user-view/user-view.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"news.title\">\n          <h3>{{news.title}}</h3>\n          <img src=\"./../../uploads/news/{{news.image}}\" class=\"img-responsive\" />\n          <p class=\"text-primary\">{{news.body}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/user-view/user-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/news/user-view/user-view.component.ts ***!
  \*******************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../news */ "./src/app/news.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(route, router, newsService) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.news = new _news__WEBPACK_IMPORTED_MODULE_1__["News"];
    }
    UserViewComponent.prototype.ngOnInit = function () {
        this.showNews();
    };
    UserViewComponent.prototype.showNews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.newsService
            .showNews({ id: id })
            .subscribe(function (response) {
            _this.news = response;
        });
    };
    UserViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/news/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/news/user-view/user-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/services/calender.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/calender.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarService = /** @class */ (function () {
    function CalendarService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        //Local LARAVEL server
        //server = 'http://babawandemovies.com/back/';
        this.server = 'http://localhost:8000/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"];
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    CalendarService.prototype.indexCalendar = function () {
        return this._http.post(this.server + 'indexCalendar', null, this.options).map(function (res) { return res.json(); });
    };
    CalendarService.prototype.addCalendar = function (info) {
        return this._http.post(this.server + 'addCalendar', info, this.options).map(function (res) { return res.json(); });
    };
    CalendarService.prototype.editCalendar = function (info) {
        return this._http.post(this.server + 'updateCalendar', info, this.options).map(function (res) { return res.json(); });
    };
    CalendarService.prototype.deleteCalendar = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyCalendar', data, this.options).map(function (res) { return res.json(); });
    };
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = /** @class */ (function () {
    function EventService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        //Local LARAVEL server
        //server = 'http://babawandemovies.com/back/';
        this.server = 'http://localhost:8000/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"];
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    EventService.prototype.indexEvent = function () {
        return this._http.post(this.server + 'indexEvent', null, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.addEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.showEvent = function (info) {
        var data = info;
        return this._http.post(this.server + 'showEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.getEvent = function (info) {
        var data = info;
        return this._http.post(this.server + 'getEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.editEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.deleteEvent = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyEvent', data, this.options).map(function (res) { return res.json(); });
    };
    EventService.prototype.sendFile = function (formData) {
        var url = this.server + 'addEventPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsService = /** @class */ (function () {
    function NewsService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        //Local LARAVEL server
        //server = 'http://babawandemovies.com/back/';
        this.server = 'http://localhost:8000/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"];
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    NewsService.prototype.indexNews = function () {
        return this._http.post(this.server + 'indexNews', null, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.addNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.showNews = function (info) {
        var data = info;
        return this._http.post(this.server + 'showNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.getNews = function (info) {
        var data = info;
        return this._http.post(this.server + 'getNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.editNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.deleteNews = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyNews', data, this.options).map(function (res) { return res.json(); });
    };
    NewsService.prototype.sendFile = function (formData) {
        var url = this.server + 'addNewsPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        //Local LARAVEL server
        //server = 'http://babawandemovies.com/back/';
        this.server = 'http://localhost:8000/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"];
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.indexUsers = function () {
        return this._http.post(this.server + 'indexUser', null, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'addUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.sendFile = function (formData) {
        var url = this.server + 'addUserPicture';
        return this.httpClient.post(url, formData /*, {responseType: 'text'}*/);
    };
    UserService.prototype.sendGallery = function (formData) {
        var url = this.server + 'addUserGallery';
        return this.httpClient.post(url, formData, { responseType: 'text' });
    };
    UserService.prototype.addUserPicture = function (info) {
        var data = info;
        return this._http.post(this.server + 'addUserPicture', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.showUser = function (info) {
        var data = info;
        return this._http.post(this.server + 'showUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (info) {
        var data = info;
        return this._http.post(this.server + 'getUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'updateUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (info) {
        var data = JSON.stringify(info);
        return this._http.post(this.server + 'destroyUser', data, this.options).map(function (res) { return res.json(); });
    };
    UserService.prototype.removePic = function (info) {
        var data = info;
        var url = this.server + 'removePic';
        return this.httpClient.post(url, data /*, {responseType: 'text'}*/);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sponsor/sponsor.component.css":
/*!***********************************************!*\
  !*** ./src/app/sponsor/sponsor.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3Ivc3BvbnNvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sponsor/sponsor.component.html":
/*!************************************************!*\
  !*** ./src/app/sponsor/sponsor.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"left\">{{page_title}}</h3>\n  <div class=\"\" *ngIf=\"loggedIn\">\n    <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n  </div>\n  <div class=\"\" *ngIf=\"admin\">\n    <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n  </div>\n  <div class=\"row\">\n    <p></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card mb-4 shadow-sm\">\n\n        <div class=\"card-body\">\n          <h4 class=\"card-text\">Sponsor</h4>\n          <p>Sponsorship Letters</p>\n          <p>Sponsorship Levels</p>\n          <p>Sponsorship Agreements</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card mb-4 shadow-sm\">\n\n        <div class=\"card-body\">\n          <h4 class=\"card-text\">Media Cooperation</h4>\n          <p>We welcome all kinds of media to contact us</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"divider-1\"></div>\n  <div class=\"block-heading-two text-center\">\n    <h3><span>Strategic Partners</span></h3>\n  </div>\n  <!-- Client One Starts -->\n  <br />\n\n  <div class=\"client-one\">\n\n    <owl-carousel [options]=\"myCarouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\n      <div class=\"cl-item\" *ngFor=\"let image of myCarouselImages;let i = index\">\n        <a href=\"#\"><img src=\"{{image}}\" alt=\"\"  class=\"img-responsive\" /></a>\n       </div>\n    </owl-carousel>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sponsor/sponsor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sponsor/sponsor.component.ts ***!
  \**********************************************/
/*! exports provided: SponsorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorComponent", function() { return SponsorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorComponent = /** @class */ (function () {
    function SponsorComponent() {
        this.myCarouselImages = ["./../../assets/img/clients/c1-1.png", "./../../assets/img/clients/c1-2.png",
            "./../../assets/img/clients/c1-3.png", "./../../assets/img/clients/c1-4.png",
            "./../../assets/img/clients/c1-5.png", "./../../assets/img/clients/c1-6.png",
            "./../../assets/img/clients/c1-3.png"];
        this.myCarouselOptions = { items: 7, dots: true, nav: true };
        this.page_title = 'SPONSORS';
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
    }
    SponsorComponent.prototype.ngOnInit = function () {
    };
    SponsorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsor',
            template: __webpack_require__(/*! ./sponsor.component.html */ "./src/app/sponsor/sponsor.component.html"),
            styles: [__webpack_require__(/*! ./sponsor.component.css */ "./src/app/sponsor/sponsor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorComponent);
    return SponsorComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/volunteer/volunteer.component.css":
/*!***************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/*!****************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row float-right\" *ngIf=\"loggedIn\">\n    <a routerLink=\"/designer/{{id}}\" class=\"btn btn-secondary\">My profile</a>\n  </div>\n  <div class=\"row float-right\" *ngIf=\"admin\">\n    <a routerLink=\"/admin/index\" class=\"btn btn-secondary\">Admin profile</a>\n  </div>\n  <div class=\"row\">\n    <p></p>\n  </div>\n  <h3 class=\"left\">{{page_title}}  </h3>\n  <app-header></app-header>\n  <div class=\"container\">\n    <br>\n\n    <p>We organize fashion events to build a communication channel for designers, manufacturers, marketing specialist, media specialist.\n    <br>\n    We help our members to lounge their brand and increase market exposure and new business.\n    <br> We provide our members and partners with opportunities for business development through inclusion on Find-a-Designer and specific matchmaking events.\n    </p>\n\n    <p>If you specialize in or are interested in graphic design, computer, marketing, event planning, media lighting, stge installation, DJ, photographer, video/audio proction... Please contact us now\n    </p>\n\n    <p>If you are a student, internship is available</p>\n    <div class=\"col-md-6\">\n      <div class=\"card mb-6 shadow-sm\">\n        <div class=\"card-body\">\n        <p>  1. Lawyer</p>\n          <small>Job Description</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card mb-6 shadow-sm\">\n        <div class=\"card-body\">\n        <p>2. Event Photographer</p>\n          <small>Job Description</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.ts ***!
  \**************************************************/
/*! exports provided: VolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function() { return VolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent(router) {
        this.router = router;
        this.page_title = "VOLUNTEER";
        this.img_url = "./../../assets/img/placeholders/358x244.jpg";
        this.loggedIn = false;
        this.id = +sessionStorage.getItem('id');
        this.loggedInValue = sessionStorage.getItem('loggedInValue');
        if (this.loggedInValue === 'true') {
            this.loggedIn = true;
        }
        this.adminValue = sessionStorage.getItem('admin');
        if (this.adminValue === 'true') {
            this.admin = true;
        }
    }
    VolunteerComponent.prototype.ngOnInit = function () {
    };
    VolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteer',
            template: __webpack_require__(/*! ./volunteer.component.html */ "./src/app/volunteer/volunteer.component.html"),
            styles: [__webpack_require__(/*! ./volunteer.component.css */ "./src/app/volunteer/volunteer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VolunteerComponent);
    return VolunteerComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



// if (environment.production) {
//   enableProdMode();
// }
if (!/localhost/.test(document.location.host)) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ola_kolade/Projects/FIDA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map