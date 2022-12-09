import { MessagesRoomComponent } from './messages-room/messages-room.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentChatPage } from './student-chat.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messages-room',
  },
  {
    path: '',
    component: StudentChatPage,
    children: [
      {
        path: 'chat-box',
        loadChildren: () =>
          import('./chat-box/chat-box.module').then((m) => m.ChatBoxModule),
      },
      {
        path: 'messages-room',
        loadChildren: () =>
          import('./messages-room/messages-room.module').then(
            (m) => m.MessagesRoomModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentChatPageRoutingModule {}
