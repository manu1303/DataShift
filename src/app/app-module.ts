import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

const firebaseConfig = {
  apiKey: "AIzaSyBfo5W4qBrKFqxADo56N8sJRVfGPN4a07c",
  authDomain: "datashift-c74c4.firebaseapp.com",
  projectId: "datashift-c74c4",
  storageBucket: "datashift-c74c4.firebasestorage.app",
  messagingSenderId: "796933136438",
  appId: "1:796933136438:web:bc378dca2880c2f3cd7897",
  measurementId: "G-MSYTYDCK9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
