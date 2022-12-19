import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { MyTaskComponent } from './my-task/my-task.component';
import { TaskBoxComponent } from './task-box/task-box.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainPageRoutingModule],
  declarations: [MainPage, TaskBoxComponent, MyTaskComponent],
})
export class MainPageModule {}
