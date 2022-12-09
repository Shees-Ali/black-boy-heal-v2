import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProfilesPage } from './student-profiles.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProfilesPageRoutingModule {}
