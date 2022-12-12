import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: StudentPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: 'task-manager',
        loadChildren: () =>
          import('./task-manager/task-manager.module').then(
            (m) => m.TaskManagerPageModule
          ),
      },

      {
        path: 'student-chat',
        loadChildren: () =>
          import('./student-chat/student-chat.module').then(
            (m) => m.StudentChatPageModule
          ),
      },
      {
        path: 'student-profile',
        loadChildren: () =>
          import('./student-profile/student-profile.module').then(
            (m) => m.StudentProfilePageModule
          ),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./shop-lays/shop-lays.module').then(
            (m) => m.ShopLaysPageModule
          ),
      },
      {
        path: 'therapist-directory',
        loadChildren: () =>
          import('./therapist-directory/therapist-directory.module').then(
            (m) => m.TherapistDirectoryPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
