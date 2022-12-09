import { ChatBoxComponent } from './chat-box.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [ChatBoxComponent],
})
export class ChatBoxModule {}
