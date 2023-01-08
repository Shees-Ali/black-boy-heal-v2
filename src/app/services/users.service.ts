import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private network: NetworkService ) { }

  login(data){

    return new Promise( async resolve => {
      const res = await this.network.login(data);
      console.log(res);

      if(res && res.token){
        localStorage.setItem('user', JSON.stringify(res))
        localStorage.setItem('token', res.token)
        resolve(res);
      } else {
        resolve(false);
      }


    })


  }

  register(data){

    return new Promise( async (resolve) => {
      const res = await this.network.register(data);
      console.log(res);

      if(res.token){
        localStorage.setItem('token', res.token)
        resolve(true);
      } else {
        resolve(false);
      }


    })


  }

  checkRole(){
    let token = localStorage.getItem('token')
    return new Promise( async resolve => {

      if(!token){
        resolve(null);
        return;
      }

      const res = await this.network.checkUserRole();
      if(!res || res == 'user'){
        console.log("need to set role")
      }

    })
  }

  setRole(data){

    return new Promise( async resolve => {

      const res = await this.network.setUserRole(data);
      resolve(res);

    })
  }

  updateUserProfile(data){
    return new Promise(async (resolve)=>{
      const res = await this.network.updateUserProfile(data);
      console.log(res);
      if(res){
        // localStorage.setItem('token', res.token)
        resolve(true);
      } else {
        resolve(false);
      }
    })
  }

  getUserProfile(){
    return new Promise(async (resolve)=>{
      const res = await this.network.getUserData();
      console.log(res);
      if(res){
        // localStorage.setItem('token', res.token)
        resolve(res);
      } else {
        resolve(false);
      }
    })
  }
}
