import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapistStatsPageRoutingModule } from './therapist-stats-routing.module';

import { TherapistStatsPage } from './therapist-stats.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapistStatsPageRoutingModule,
    SharedModule
  ],
  declarations: [TherapistStatsPage]
})
export class TherapistStatsPageModule {}
