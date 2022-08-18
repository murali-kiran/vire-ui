import { CommunityService } from './../service/community-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from '../service/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { FirmAccountsComponent } from './firm-accounts/firm-accounts.component';
import { ChannelsComponent } from './channels/channels.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';
import { ReportsComponent } from './reports/reports.component';
import { BlocklistComponent } from './blocklist/blocklist.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AppRestrictionComponent } from './app-restriction/app-restriction.component';
import { AdminCommunitiesComponent } from './admin-communities/admin-communities.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { CommunitiesComponent } from './communities/communities.component';
import { MasterItemComponent } from './master-data/master-item/master-item/master-item.component';
import { AdminMessageItemComponent } from './admin-message/admin-message-item/admin-message-item.component';
import { ReportItemComponent } from './reports/report-item/report-item.component';
import { FeedItemComponent } from './feeds/feed-item/feed-item.component';
import { SocialItemComponent } from './social/social-item/social-item.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    UsersComponent,
    FirmAccountsComponent,
    ChannelsComponent,
    FeedsComponent,
    ExperienceComponent,
    SocialComponent,
    ReportsComponent,
    BlocklistComponent,
    MasterDataComponent,
    AppRestrictionComponent,
    AdminCommunitiesComponent,
    AdminMessageComponent,
    CommunitiesComponent,
    MasterItemComponent,
    AdminMessageItemComponent,
    ReportItemComponent,
    FeedItemComponent,
    SocialItemComponent,
    ExperienceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [UserService,CommunityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
