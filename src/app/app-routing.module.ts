import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AuthVComponent } from './Components/vendeur/auth-v/auth-v.component';
import { RegistervComponent } from './Components/vendeur/registerv/registerv.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'home', component: LandingPageComponent},
  {path:'authv', component: AuthVComponent},
  {path:'registerv', component: RegistervComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
