import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CalendModule } from './calend/calend.module';
import { AngularRaveModule } from 'angular-rave';
import { DemoModule as DefaultDemoModule } from './demo-modules/kitchen-sink/module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';

import { UserService } from './services/user.service';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { UserViewComponent } from './news/user-view/user-view.component';
import { UserEventComponent } from './event/user-view/user-view.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { IndexDComponent } from './designer/index/index.component';
import { EditComponent } from './designer/edit/edit.component';
import { LogoutComponent } from './logout/logout.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './designer/signup/signup.component';
import { Signup2Component } from './designer/signup2/signup2.component';
import { LoginComponent } from './designer/login/login.component';
import { IndexComponent } from './admin/index/index.component';
import { ViewComponent } from './admin/view/view.component';
import { CalendAComponent } from './admin/calend/calend.component';
import { EventAComponent } from './admin/event/event.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CalendComponent } from './calend/calend.component';
import { NewsIndexComponent } from './admin/news-index/news-index.component';
import { ViewNewsComponent } from './admin/view-news/view-news.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';
import { Signup3Component } from './designer/signup3/signup3.component';
import { UserDComponent } from './designer/user-d/user-d.component';
import { ViewEventComponent } from './admin/view-event/view-event.component';
import { ResetComponent } from './designer/reset/reset.component';
import { PassComponent } from './designer/reset/pass/pass.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EventComponent,
    SponsorComponent,
    DonateComponent,
    DesignerComponent,
    IndexDComponent,
    VolunteerComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    IndexComponent,
    ViewComponent,
    EditComponent,
    HeaderComponent,
    HomeComponent,
    CalendComponent,
    CalendAComponent,
    LogoutComponent,
    NewsIndexComponent,
    ViewNewsComponent,
    EventAComponent,
    AddNewsComponent,
    Signup2Component,
    UserViewComponent,
    UserEventComponent,
    Signup3Component,
    UserDComponent,
    ViewEventComponent,
    ResetComponent,
    PassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultDemoModule,
    NgbModalModule,
    OwlModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AngularRaveModule
  ],
  providers: [ /*UserService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
