import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { SocialconnectComponent } from './socialconnect/socialconnect.component';
import { BecomeapartnerComponent } from './contactus/becomeapartner/becomeapartner.component';
import { GethelpComponent } from './contactus/gethelp/gethelp.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SigninComponent,
    ContactusComponent,
    FooterComponent,
    ErrorComponent,
    SocialconnectComponent,
    BecomeapartnerComponent,
    GethelpComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
