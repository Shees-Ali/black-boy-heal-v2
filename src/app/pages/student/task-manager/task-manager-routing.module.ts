import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskManagerPage } from './task-manager.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: '',
    component: TaskManagerPage,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./main/main.module').then((m) => m.MainPageModule),
      },
      {
        path: 'create-task',
        loadChildren: () =>
          import('./create-task/create-task.module').then(
            (m) => m.CreateTaskPageModule
          ),
      },
      {
        path: 'task-calender',
        loadChildren: () =>
          import('./task-calender/task-calender.module').then(
            (m) => m.TaskCalenderPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagerPageRoutingModule {}
