var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarView } from 'angular-calendar';
import { CalendarService } from './../services/calender.service';
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
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
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
        this.refresh = new Subject();
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
        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
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
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
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
        ViewChild('modalContent'),
        __metadata("design:type", TemplateRef)
    ], CalendComponent.prototype, "modalContent", void 0);
    CalendComponent = __decorate([
        Component({
            selector: 'app-calend',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: './calend.component.html',
            styleUrls: ['./calend.component.css']
        }),
        __metadata("design:paramtypes", [NgbModal, CalendarService])
    ], CalendComponent);
    return CalendComponent;
}());
export { CalendComponent };
//# sourceMappingURL=calend.component.js.map