import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.page.html',
  styleUrls: ['./select-role.page.scss'],
})
export class SelectRolePage extends BasePage implements OnInit {

  loading = false;
  role = null;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.checkUserRole();
  }

  async checkUserRole(){
    const res = await this.users.checkRole();
    console.log(res);

    if(res){

    }
  }

  async setUserRole(type: string){
    const res = await this.users.setRole({role: type});
    console.log(res);
    if(res){
      this.nav.navigateTo(type);
    }

  }

}
