import { ChatBoxComponent } from './chat-box.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxRoutingModule } from './chat-box-routing.module';

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [CommonModule, RouterModule, ChatBoxRoutingModule],
  exports: [ChatBoxComponent],
})
export class ChatBoxModule {}
