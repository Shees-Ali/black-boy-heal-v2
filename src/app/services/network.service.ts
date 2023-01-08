import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    public utility: UtilityService,
    public api: ApiService,
    public router: Router,
  ) {
    // console.log('Hello NetworkProvider Provider');
  }

  serialize = (obj) => {
    const str: any[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        let f: string = encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]);
        str.push(f);
      }
    }
    return str.join('&');
  };

  login(data) {
    return this.httpPostResponse('auth/login', data, null, true);
  }

  updateUserProfile(data){
    return this.httpPostResponse('auth/update-user-profile', data, null, true);
  }

  register(data) {
    return this.httpPostResponse('auth/register', data, null, true);
  }

  checkUserRole() {
    return this.httpGetResponse('auth/user-role', null, false, false);
  }

  setUserRole(data){
    return this.httpPostResponse('auth/user-role', data, null, false, true);
  }

  getUserData(){
    return this.httpGetResponse('auth/get-user-profile', null, false, true);
  }



  httpPostResponse(
    key,
    data,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'post',
      key,
      data,
      id,
      showloader,
      showError,
      contenttype
    );
  }

  httpGetResponse(
    key,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'get',
      key,
      {},
      id,
      showloader,
      showError,
      contenttype
    );
  }

  httpPutResponse(key, data, id = null) {
    return new Promise((resolve, reject) => {
      const url = key + (id ? `/${id}` : '');

      this.api.put(key, data).subscribe((res: any) => {
        // if (showloader === true) {
        this.utility.hideLoader();
        // }
        resolve(res);
        // if (res.bool !== true) {
        //   if (showError) {
        //     this.utility.presentSuccessToast(res.message);
        //   }
        //   reject(null);
        // } else {
        //   resolve(res);
        // }
      });
    });
  }

  httpPatchResponse(key, data, id = null) {
    return new Promise<any>((resolve, reject) => {
      const url = key + (id ? `/${id}` : '');

      this.api.patch(key, data).subscribe((res: any) => {
        // if (showloader === true) {
        this.utility.hideLoader();
        //}
        resolve(res);
        // if (res.bool !== true) {
        //   if (showError) {
        //     this.utility.presentSuccessToast(res.message);
        //   }
        //   reject(null);
        // } else {
        //   resolve(res);
        // }
      });
    });
  }

  httpDeleteResponse(key) {
    return new Promise<any>((resolve, reject) => {
      this.api.delete(key).subscribe((res: any) => {
        console.log(res);
        //if (showloader === true) {
        this.utility.hideLoader();
        //}
        resolve(res);

        // if (res.bool !== true) {
        //   if (showError) {
        //     this.utility.presentSuccessToast(res.message);
        //   }
        //   reject(null);
        // } else {
        //   resolve(res);
        // }
      });
    });
  }

  // default 'Content-Type': 'application/json',
  httpResponse(
    type = 'get',
    key,
    data,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (showloader === true) this.utility.showLoader();

      const url = key + (id ? '/' + id : '');

      const seq =
        type === 'get' ? this.api.get(url, {}) : this.api.post(url, data);

      seq.subscribe(
        (res: any) => {

          if (showloader === true) {
            this.utility.hideLoader();
          }

          if (res.bool !== true) {
            if (showError) {
              this.utility.presentSuccessToast(res.message);
            }
            reject(null);
          } else {
            resolve(res.data);
          }
        },
        (err) => {

          console.log('err', err);

          this.utility.hideLoader();
          if (showError) {

            if(err.error){
              this.utility.presentFailureToast(err.error.message);
            } else {
              this.utility.presentFailureToast(err.message);
            }

            reject(null);
          }

        }
      );
    }).catch( err => {
      console.log(err)
    });
  }

  showFailure(err) {
    // console.error('ERROR', err);
    err = err ? err.message : 'check logs';
    this.utility.presentFailureToast(err);
  }
}
