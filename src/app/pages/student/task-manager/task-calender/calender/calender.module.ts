import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';

@NgModule({
  declarations: [CalenderComponent],
  imports: [CommonModule, IonicModule],
  exports: [CalenderComponent],
})
export class CalenderModule {}
