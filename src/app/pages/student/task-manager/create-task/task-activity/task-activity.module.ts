import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskActivityComponent } from './task-activity.component';

@NgModule({
  declarations: [TaskActivityComponent],
  imports: [CommonModule, IonicModule],
  exports: [TaskActivityComponent],
})
export class TaskActivityModule {}
