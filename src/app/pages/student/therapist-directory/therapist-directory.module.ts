import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { TherapistDirectoryPageRoutingModule } from './therapist-directory-routing.module';

import { TherapistDirectoryPage } from './therapist-directory.page';
import { SharedModule } from 'src/app/components/shared.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistDirectoryPageRoutingModule,
    SharedModule,
    SwiperModule,
  ],
  declarations: [TherapistDirectoryPage],
})
export class TherapistDirectoryPageModule {}
