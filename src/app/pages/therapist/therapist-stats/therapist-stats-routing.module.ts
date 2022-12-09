import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistStatsPage } from './therapist-stats.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistStatsPageRoutingModule {}
