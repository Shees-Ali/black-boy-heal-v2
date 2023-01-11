import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private network: NetworkService) {}

  login(data) {
    return new Promise(async (resolve) => {
      const res = await this.network.login(data);
      console.log(res);

      if (res && res.token) {
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('token', res.token);
        resolve(res);
      } else {
        resolve(false);
      }
    });
  }

  register(data) {
    return new Promise(async (resolve) => {
      const res = await this.network.register(data);
      console.log(res);

      if (res.token) {
        localStorage.setItem('token', res.token);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  checkRole() {
    let token = localStorage.getItem('token');
    return new Promise(async (resolve) => {
      if (!token) {
        resolve(null);
        return;
      }

      const res = await this.network.checkUserRole();

      if (res == 'student' || res == 'therapist') {
        resolve(res);
        return;
      }
      if (!res || res == 'user') {
        resolve(null);
      }
    });
  }

  setRole(data) {
    return new Promise(async (resolve) => {
      const res = await this.network.setUserRole(data);
      resolve(res);
    });
  }

  updateUserProfile(data) {
    return new Promise(async (resolve) => {
      const res = await this.network.updateUserProfile(data);
      console.log(res);
      if (res) {
        // localStorage.setItem('token', res.token)
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  getUserProfile() {
    return new Promise(async (resolve) => {
      const res = await this.network.getUserData();
      console.log(res);
      if (res) {
        // localStorage.setItem('token', res.token)
        resolve(res);
      } else {
        resolve(false);
      }
    });
  }
  getAllUsers() {
    return new Promise(async (resolve) => {
      const res = await this.network.getAllUsers();
      console.log(res);
      if (res) {
        resolve(res);
      } else {
        resolve(false);
      }
    });
  }
  getMyFriendequest() {
    return new Promise(async (resolve) => {
      const res = await this.network.getMyFriendRequest();
      console.log(res);
      if (res) {
        resolve(res);
      } else {
        resolve(false);
      }
    });
  }
  getMyFriend() {
    return new Promise(async (resolve) => {
      const res = await this.network.getMyFriend();
      console.log(res);
      if (res) {
        resolve(res);
      } else {
        resolve(false);
      }
    });
  }
}
