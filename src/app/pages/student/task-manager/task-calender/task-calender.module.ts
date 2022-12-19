import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskCalenderPageRoutingModule } from './task-calender-routing.module';

import { TaskCalenderPage } from './task-calender.page';
import { CalenderModule } from './calender/calender.module';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskCalenderPageRoutingModule,
    CalenderModule,
    SharedModule
  ],
  declarations: [TaskCalenderPage],
})
export class TaskCalenderPageModule {}
