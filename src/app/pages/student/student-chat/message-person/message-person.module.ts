// import { MessagePersonComponent } from './../../../message-person/message-person.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePersonComponent } from './message-person.component';

@NgModule({
  declarations: [MessagePersonComponent],
  imports: [CommonModule],
  exports: [MessagePersonComponent],
})
export class MessagePersonModule {}
