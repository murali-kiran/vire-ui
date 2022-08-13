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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'firmAccounts',
    component: FirmAccountsComponent
  },
  {
    path: 'channels',
    component: ChannelsComponent
  },
  {
    path: 'feeds',
    component: FeedsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'blockList',
    component: BlocklistComponent
  },
  {
    path: 'masterData',
    component: MasterDataComponent
  },
  {
    path: 'appRestriction',
    component: AppRestrictionComponent
  },
  {
    path: 'adminCommunities',
    component: AdminCommunitiesComponent
  },
  {
    path: 'communities',
    component: CommunitiesComponent
  },
  {
    path: 'adminMessage',
    component: AdminMessageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
