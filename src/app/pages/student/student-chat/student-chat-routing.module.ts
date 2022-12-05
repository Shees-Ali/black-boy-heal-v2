import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentChatPage } from './student-chat.page';

const routes: Routes = [
  {
    path: '',
    component: StudentChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentChatPageRoutingModule {}
