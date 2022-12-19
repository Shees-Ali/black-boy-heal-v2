import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskCalenderPage } from './task-calender.page';

const routes: Routes = [
  {
    path: '',
    component: TaskCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskCalenderPageRoutingModule {}
