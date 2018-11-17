import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AngularRaveModule } from 'angular-rave';
import { ImageUploadModule } from 'angular2-image-upload';

//import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { EditComponent } from './designer/edit/edit.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './volunteer/signup/signup.component';
import { LoginComponent } from './volunteer/login/login.component';
import { IndexComponent } from './admin/index/index.component';
import { ViewComponent } from './admin/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EventComponent,
    SponsorComponent,
    DonateComponent,
    DesignerComponent,
    VolunteerComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    IndexComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularRaveModule,
    ImageUploadModule.forRoot()
  ],
  providers: [//UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
