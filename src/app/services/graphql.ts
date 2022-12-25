import { Apollo, gql } from 'apollo-angular'
import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service'

@Injectable({
  providedIn: 'root'
})
export class graphql {
  constructor(private apollo: Apollo, private util: UtilityService) { }

  getUsersgql = gql`
    query getUsers($limit: Int!){
        getUser(limit: $limit){
          user{ 
            _id
            fullName           
          }
          totalItem
        }
      }
  `

  loginUsergql = gql`
  query signIn($email: String!, $password: String!){
    signIn(data:{email:$email,password: $password}){
      token
      _id
      fullName
      role
    }
  }
`

  signUpgql = gql`
query getUsers($limit: Int!){
    getUser(limit: $limit){
      user{ 
        _id
        fullName
        role           
      }
      totalItem
    }
  }
`

  getUsers() {
    return new Promise((resolve, reject) => {
      this.util.showLoader();
      try {
        this.apollo
          .watchQuery({
            query: this.getUsersgql,
            variables: {
              limit: 1
            },
            errorPolicy: 'all'
          })
          .valueChanges.subscribe((result: any) => {
            this.util.hideLoader();
            if (result.error) {
              this.util.presentFailureToast(result.error, "");
            }
            if (result.errors) {
              this.util.presentFailureToast(result.error, "");
            }
            resolve(result.data);
          });
      } catch (error) {
        this.util.hideLoader();
        this.util.presentFailureToast(error, "");
        reject(error);
      }
    });
  }

  loginUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.util.showLoader();
      try {
        this.apollo
          .watchQuery({
            query: this.loginUsergql,
            variables: {
              email: email,
              password: password
            },
            errorPolicy: 'all'
          })
          .valueChanges.subscribe((result: any) => {
            console.log("res", result)
            this.util.hideLoader();
            if (result.error) {
              this.util.presentFailureToast(result.error, "");
            }
            if (result.errors) {
              this.util.presentFailureToast(result.error, "");
            }
            resolve(result.data);
          });
      } catch (error) {
        console.log("er", error)
        this.util.hideLoader();
        this.util.presentFailureToast(error, "");
        reject(error);
      }
    });
  }

  signUp() {
    return new Promise((resolve, reject) => {
      this.util.showLoader();
      try {
        this.apollo
          .watchQuery({
            query: this.getUsersgql,
            variables: {
              limit: 1
            },
            errorPolicy: 'all'
          })
          .valueChanges.subscribe((result: any) => {
            this.util.hideLoader();
            if (result.error) {
              this.util.presentFailureToast(result.error, "");
            }
            if (result.errors) {
              this.util.presentFailureToast(result.error, "");
            }
            resolve(result.data);
          });
      } catch (error) {
        this.util.hideLoader();
        this.util.presentFailureToast(error, "");
        reject(error);
      }
    });
  }


}