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
      phoneNumber
    }
  }
`

  signUpgql = gql`
  mutation
    signUp(
      $email: String!,
      $password: String!,
      $role: String!,
      $fullName: String!,
      $phoneNumber: String!,
      $Address: String,
      ){
      signUp(
        data: {
          email: $email,
          password: $password,
          role: $role,
          fullName: $fullName,
          phoneNumber: $phoneNumber,
          Address: $Address,
        }
      ) {
        _id
        token
        role
        fullName
        phoneNumber
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
          .valueChanges.subscribe(({ data }) => {
            this.util.hideLoader();
            console.log('got data', data)
            resolve(data);
          },
            error => {
              this.util.hideLoader();
              console.log('there was an error sending the query', error)
              this.util.presentFailureToast(error, "");
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
          .valueChanges.subscribe(({ data }) => {
            this.util.hideLoader();
            console.log('got data', data)
            resolve(data);
          },
            error => {
              this.util.hideLoader();
              console.log('there was an error sending the query', error)
              this.util.presentFailureToast(error, "");
            });
      } catch (error) {
        console.log("er", error)
        this.util.hideLoader();
        this.util.presentFailureToast(error, "");
        reject(error);
      }
    });
  }

  signUp(fullName: string,
    email: string,
    phoneNumber: string,
    password: string,) {
    return new Promise((resolve, reject) => {
      this.util.showLoader();
      try {
        this.apollo
          .mutate({
            mutation: this.signUpgql,
            variables: {
              fullName: fullName,
              email: email,
              phoneNumber: phoneNumber,
              password: password,
            },
            errorPolicy: 'all'
          })
          .subscribe(
            ({ data }) => {
              this.util.hideLoader();
              console.log('got data', data)
              resolve(data);
            },
            error => {
              this.util.hideLoader();
              console.log('there was an error sending the query', error)
              this.util.presentFailureToast(error, "");
            }
          );
      } catch (error) {
        this.util.hideLoader();
        this.util.presentFailureToast(error, "");
        reject(error);
      }
    });
  }


}