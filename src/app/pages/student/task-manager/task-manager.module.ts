import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskManagerPageRoutingModule } from './task-manager-routing.module';

import { TaskManagerPage } from './task-manager.page';
import { MyTaskComponent } from './my-task/my-task.component';
import { TaskBoxComponent } from './task-box/task-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskManagerPageRoutingModule,
  ],
  declarations: [TaskManagerPage, TaskBoxComponent, MyTaskComponent],
})
export class TaskManagerPageModule {}
