import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistDetailsPage } from './therapist-details.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistDetailsPageRoutingModule {}
