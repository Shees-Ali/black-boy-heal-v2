import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistMeetingPage } from './therapist-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistMeetingPageRoutingModule {}
