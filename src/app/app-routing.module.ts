import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { EditComponent } from './designer/edit/edit.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SignupComponent } from './volunteer/signup/signup.component';
import { LoginComponent } from './volunteer/login/login.component';
import { AboutComponent } from './about/about.component';

import { IndexComponent } from './admin/index/index.component';
import { ViewComponent } from './admin/view/view.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent },
  {path: 'event', component: EventComponent },
  {path: 'sponsor', component: SponsorComponent },
  {path: 'donate', component: DonateComponent },
  {path: 'designer/:id', component: DesignerComponent },
  {path: 'designer/edit/:id', component: EditComponent },
  {path: 'volunteer', component: VolunteerComponent },
  {path: 'volunteer/signup', component: SignupComponent },
  {path: 'volunteer/login', component: LoginComponent },
  {path: 'about', component: AboutComponent },

  {path: 'admin/index', component: IndexComponent },
  {path: 'admin', redirectTo: '/admin/index', pathMatch: 'full'  },
  {path: 'admin/view/:id', component: ViewComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
