import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskOverviewComponent } from './task-overview.component';

@NgModule({
  declarations: [TaskOverviewComponent],
  imports: [CommonModule, IonicModule],
  exports: [TaskOverviewComponent],
})
export class TaskOverviewModule {}
