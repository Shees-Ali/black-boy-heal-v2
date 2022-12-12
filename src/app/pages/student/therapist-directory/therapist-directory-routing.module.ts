import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistDirectoryPage } from './therapist-directory.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistDirectoryPage,
  },
  {
    path: 'therapist-details',
    loadChildren: () =>
      import('./therapist-details/therapist-details.module').then(
        (m) => m.TherapistDetailsPageModule
      ),
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (m) => m.AppointmentsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistDirectoryPageRoutingModule {}
