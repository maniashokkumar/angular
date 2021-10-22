import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeapartnerComponent } from './contactus/becomeapartner/becomeapartner.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GethelpComponent } from './contactus/gethelp/gethelp.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:"landing",
    component:LandingComponent,

  },
  {
    path:"login",
    component:LoginComponent,
    
  },
  {
    path:'',
    component:LandingComponent,
    
  },
  {
    path:'signin',
    component:SigninComponent,
   
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:'contactus',
    children:[
      {
        path:"partner",
        component:BecomeapartnerComponent
      },
      {
        path:"gethelp",
        component:GethelpComponent
      }
    ]
   
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





