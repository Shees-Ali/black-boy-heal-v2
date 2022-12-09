import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistPage } from './therapist.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'therapist-home',
  },
  {
    path: '',
    component: TherapistPage,
    children: [
      {
        path: 'therapist-home',
        loadChildren: () =>
          import('./therapist-home/therapist-home.module').then(
            (m) => m.TherapistHomeModule
          ),
      },
      {
        path: 'student-profiles',
        loadChildren: () =>
          import('./student-profiles/student-profiles.module').then(
            (m) => m.StudentProfilesPageModule
          ),
      },

      {
        path: 'therapist-profile',
        loadChildren: () =>
          import('./therapist-profile/therapist-profile.module').then(
            (m) => m.TherapistProfilePageModule
          ),
      },
      {
        path: 'therapist-meeting',
        loadChildren: () =>
          import('./therapist-meeting/therapist-meeting.module').then(
            (m) => m.TherapistMeetingPageModule
          ),
      },
      {
        path: 'therapist-stats',
        loadChildren: () =>
          import('./therapist-stats/therapist-stats.module').then(
            (m) => m.TherapistStatsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistPageRoutingModule {}
