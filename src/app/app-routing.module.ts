import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { UserViewComponent } from './news/user-view/user-view.component';
import { EventComponent } from './event/event.component';
import { UserEventComponent } from './event/user-view/user-view.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LogoutComponent } from './logout/logout.component';
import { DonateComponent } from './donate/donate.component';
import { DesignerComponent } from './designer/designer.component';
import { IndexDComponent } from './designer/index/index.component';
import { EditComponent } from './designer/edit/edit.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SignupComponent } from './designer/signup/signup.component';
import { Signup2Component } from './designer/signup2/signup2.component';
import { Signup3Component } from './designer/signup3/signup3.component';
import { LoginComponent } from './designer/login/login.component';
import { UserDComponent } from './designer/user-d/user-d.component';
import { ResetComponent } from './designer/reset/reset.component';
import { AboutComponent } from './about/about.component';

import { IndexComponent } from './admin/index/index.component';
import { ViewComponent } from './admin/view/view.component';
import { EventAComponent } from './admin/event/event.component';
import { CalendAComponent } from './admin/calend/calend.component';
import { NewsIndexComponent } from './admin/news-index/news-index.component';
import { ViewNewsComponent } from './admin/view-news/view-news.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';
import { ViewEventComponent } from './admin/view-event/view-event.component';


const routes: Routes = [

  {path: 'news', component: NewsComponent },
  {path: 'userview/:id', component: UserViewComponent },
  {path: 'home', component: HomeComponent },
  {path: 'event', component: EventComponent },
  {path: 'userevent/:id', component: UserEventComponent },
  {path: 'sponsor', component: SponsorComponent },
  {path: 'donate', component: DonateComponent },
  {path: 'volunteer', component: VolunteerComponent },
  {path: 'about', component: AboutComponent },
  {path: 'logout', component: LogoutComponent },

  {path: 'designer', component: IndexDComponent },
  {path: 'designer/login', component: LoginComponent },
  {path: 'designer/signup', component: SignupComponent },
  {path: 'designer/reset', component: ResetComponent },
  {path: 'designer/:id', component: DesignerComponent },
  {path: 'designer/edit/:id', component: EditComponent },
  {path: 'designer/view/:id', component: UserDComponent },
  {path: 'designer/signup-2/:id', component: Signup2Component },
  {path: 'designer/signup-3/:id', component: Signup3Component },

  {path: 'admin/index', component: IndexComponent },
  {path: 'admin/calendar', component: CalendAComponent },
  {path: 'admin/newsIndex', component: NewsIndexComponent },
  {path: 'admin/addNews', component: AddNewsComponent },
  {path: 'admin/viewNews/:id', component: ViewNewsComponent },
  {path: 'admin/viewEvent/:id', component: ViewEventComponent },
  {path: 'admin/event', component: EventAComponent },
  {path: 'admin', redirectTo: '/admin/index', pathMatch: 'full'  },
  {path: 'admin/view/:id', component: ViewComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
