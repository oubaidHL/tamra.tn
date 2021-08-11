import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AuthVComponent } from './Components/vendeur/auth-v/auth-v.component';
import { RegistervComponent } from './Components/vendeur/registerv/registerv.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthVComponent,
    RegistervComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    A11yModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
