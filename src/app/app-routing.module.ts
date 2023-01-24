import { AuthComponent } from './auth/auth.component';
import { CommunitiesComponent } from './communities/communities.component';
import { AdminCommunitiesComponent } from './admin-communities/admin-communities.component';
import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { FirmAccountsComponent } from './firm-accounts/firm-accounts.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';
import { ReportsComponent } from './reports/reports.component';
import { BlocklistComponent } from './blocklist/blocklist.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AppRestrictionComponent } from './app-restriction/app-restriction.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    //pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersComponent
  },
  {
    path: 'firmAccounts',
    canActivate: [AuthGuard],
    component: FirmAccountsComponent
  },
  {
    path: 'channels',
    canActivate: [AuthGuard],
    component: ChannelsComponent
  },
  {
    path: 'feeds',
    canActivate: [AuthGuard],
    component: FeedsComponent
  },
  {
    path: 'experience',
    canActivate: [AuthGuard],
    component: ExperienceComponent
  },
  {
    path: 'social',
    canActivate: [AuthGuard],
    component: SocialComponent
  },
  {
    path: 'reports',
    canActivate: [AuthGuard],
    component: ReportsComponent
  },
  {
    path: 'blockList',
    canActivate: [AuthGuard],
    component: BlocklistComponent
  },
  {
    path: 'masterData',
    canActivate: [AuthGuard],
    component: MasterDataComponent
  },
  {
    path: 'appRestriction',
    canActivate: [AuthGuard],
    component: AppRestrictionComponent
  },
  {
    path: 'adminCommunities',
    canActivate: [AuthGuard],
    component: AdminCommunitiesComponent
  },
  {
    path: 'communities',
    canActivate: [AuthGuard],
    component: CommunitiesComponent
  },
  {
    path: 'adminMessage',
    canActivate: [AuthGuard],
    component: AdminMessageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
