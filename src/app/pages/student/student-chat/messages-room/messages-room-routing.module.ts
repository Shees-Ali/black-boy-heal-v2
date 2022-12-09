import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesRoomComponent } from './messages-room.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoomRoutingModule {}
