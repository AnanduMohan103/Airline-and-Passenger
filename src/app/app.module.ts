import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirlineComponent } from './airline/airline.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AirlineComponent
  },
  {
    path:"view",component:PassengerComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirlineComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
