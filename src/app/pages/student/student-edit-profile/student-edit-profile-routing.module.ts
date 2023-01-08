import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentEditProfilePage } from './student-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: StudentEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEditProfilePageRoutingModule {}
