import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-role',
    pathMatch: 'full',


  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentPageModule),
  },
  {
    path: 'therapist',
    loadChildren: () =>
      import('./therapist/therapist.module').then((m) => m.TherapistPageModule),
  },
  {
    path: 'select-role',
    canActivate: [AuthGuard],
    loadChildren: () => import('./select-role/select-role.module').then( m => m.SelectRolePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PagesRoutingModule {}
