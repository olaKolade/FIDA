import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent },
  {path: 'event', component: EventComponent },
  {path: 'sponsor', component: SponsorComponent },
  {path: 'donate', component: DonateComponent },
  {path: 'designer', component: DesignerComponent },
  {path: 'volunteer', component: VolunteerComponent },
  {path: 'about', component: AboutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
