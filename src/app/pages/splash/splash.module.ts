import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';
import { SwiperModule } from 'swiper/angular';
import { WelcomeSlideComponent } from './welcome-slide/welcome-slide.component';
import { CareSlideComponent } from './care-slide/care-slide.component';
import { RepsSlideComponent } from './reps-slide/reps-slide.component';
import { ReachSlideComponent } from './reach-slide/reach-slide.component';
import { JoinSlideComponent } from './join-slide/join-slide.component';
import { OptionSlideComponent } from './option-slide/option-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashPageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    SplashPage,
    WelcomeSlideComponent,
    CareSlideComponent,
    RepsSlideComponent,
    ReachSlideComponent,
    JoinSlideComponent,
    OptionSlideComponent,
  ],
})
export class SplashPageModule {}
