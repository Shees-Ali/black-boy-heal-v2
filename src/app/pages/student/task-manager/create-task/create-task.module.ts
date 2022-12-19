import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTaskPageRoutingModule } from './create-task-routing.module';

import { CreateTaskPage } from './create-task.page';
import { TaskOverviewModule } from './task-overview/task-overview.module';
import { TaskActivityModule } from './task-activity/task-activity.module';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTaskPageRoutingModule,
    TaskOverviewModule,
    TaskActivityModule,
    SharedModule
  ],
  declarations: [CreateTaskPage],
})
export class CreateTaskPageModule {}
