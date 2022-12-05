import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { WelcomeBoxComponent } from './welcome-box/welcome-box.component';
import { DashboardDateBoxComponent } from './dashboard-date-box/dashboard-date-box.component';
import { DashboardQuoteBoxComponent } from './dashboard-quote-box/dashboard-quote-box.component';
import { DashboardWeeklytaskBoxComponent } from './dashboard-weeklytask-box/dashboard-weeklytask-box.component';
import { DashboardWorkbookBoxComponent } from './dashboard-workbook-box/dashboard-workbook-box.component';
import { DashboardMyprofileBoxComponent } from './dashboard-myprofile-box/dashboard-myprofile-box.component';
import { DashboardFindTherapistBoxComponent } from './dashboard-find-therapist-box/dashboard-find-therapist-box.component';
import { DashboardShopBoxComponent } from './dashboard-shop-box/dashboard-shop-box.component';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [
    DashboardPage,
    WelcomeBoxComponent,
    DashboardDateBoxComponent,
    DashboardQuoteBoxComponent,
    DashboardWeeklytaskBoxComponent,
    DashboardWorkbookBoxComponent,
    DashboardMyprofileBoxComponent,
    DashboardFindTherapistBoxComponent,
    DashboardShopBoxComponent,
  ],
})
export class DashboardPageModule {}
