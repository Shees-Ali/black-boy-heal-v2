import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome-slide.component.html',
  styleUrls: ['./welcome-slide.component.scss'],
})
export class WelcomeSlideComponent implements OnInit {
  loading = false;
  @Output('slideNext') slideNext: EventEmitter<any> = new EventEmitter();
  constructor(private network: NetworkService, private nav: NavService) {}

  ngOnInit() {
    this.checkIfUserLoggedIn();
  }

  async checkIfUserLoggedIn(){

    this.loading = true;
    const res = await this.network.isUserLoggedIn();
    console.log(res);
    this.loading = false;
    if(res['bool'] == true){
      this.nav.push('select-role')
    }
  }

  moveNext(){



    console.log("next");
    this.slideNext.emit({v: 1})
  }
}
