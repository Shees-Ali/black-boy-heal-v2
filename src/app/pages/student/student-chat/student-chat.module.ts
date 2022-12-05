import { MessagePersonModule } from './message-person/message-person.module';
import { MessagesRoomModule } from './messages-room/messages-room.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentChatPageRoutingModule } from './student-chat-routing.module';

import { StudentChatPage } from './student-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentChatPageRoutingModule,
    MessagesRoomModule,
    MessagePersonModule,
  ],
  declarations: [StudentChatPage],
})
export class StudentChatPageModule {}
