import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  confirmationResult!: firebase.auth.ConfirmationResult;

  constructor(private fireAuth: AngularFireAuth) {}

  public signInWithPhoneNumber(recaptchaVerifier: any, phoneNumber: any) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult: any) => {
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
        })
        .catch((error: any) => {
          console.log(error);
          reject('SMS not sent');
        });
    });
  }
  public async enterVerificationCode(code: any) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult
        .confirm(code)
        .then(async (result: any) => {
          console.log(result);
          const user = result.user;
          resolve(user);
        })
        .catch((error: any) => {
          reject(error.message);
        });
    });
  }
}
