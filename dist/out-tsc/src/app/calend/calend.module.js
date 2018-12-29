var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendComponent } from './calend.component';
import { DemoModule as DefaultDemoModule } from './../demo-modules/kitchen-sink/module';
var CalendModule = /** @class */ (function () {
    function CalendModule() {
    }
    CalendModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                DefaultDemoModule,
                NgbModalModule,
                FlatpickrModule.forRoot(),
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                })
            ],
            declarations: [CalendComponent],
            exports: [CalendComponent]
        })
    ], CalendModule);
    return CalendModule;
}());
export { CalendModule };
//# sourceMappingURL=calend.module.js.map