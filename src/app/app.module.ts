import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    EventComponent,
    SponsorComponent,
    DonateComponent,
    DesignerComponent,
    VolunteerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
