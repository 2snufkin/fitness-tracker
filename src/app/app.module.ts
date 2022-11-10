import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training/training.component';
import { PastComponent } from './training/past/past.component';
import { CurrentComponent } from './training/current/current.component';
import { NewComponent } from './training/new/new.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RoutingModule} from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    PastComponent,
    CurrentComponent,
    NewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
