import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app'; 
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ApolloModule,HttpClientModule,
    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyCLzlvR5dRDMe-jXuTnV7JTI_ktbEQncao",
      authDomain: "black-boy-help.firebaseapp.com",
      projectId: "black-boy-help",
      storageBucket: "black-boy-help.appspot.com",
      messagingSenderId: "532300665128",
      appId: "1:532300665128:web:95a1f4eec68425da30c01d"
     })), provideAuth(() => getAuth()),  provideFirestore(() => getFirestore()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:4000/graphql'
        })
      }
    },
      deps: [HttpLink]
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
// uri: 'http://24.199.72.226:4000/graphql'