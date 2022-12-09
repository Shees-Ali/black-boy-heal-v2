import { RouterModule } from '@angular/router';
import { MessagePersonModule } from '../message-person/message-person.module';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoomComponent } from './messages-room.component';
import { MessagesRoomRoutingModule } from './messages-room-routing.module';

@NgModule({
  declarations: [MessagesRoomComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    MessagePersonModule,
    RouterModule,
    MessagesRoomRoutingModule,
  ],
  exports: [MessagesRoomComponent],
})
export class MessagesRoomModule {}
