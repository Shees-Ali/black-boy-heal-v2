import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TherapistHomeComponent } from './therapist-home.component';

const routes: Routes = [
  {
    path: '',
    component: TherapistHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistHomeRoutingModule {}
