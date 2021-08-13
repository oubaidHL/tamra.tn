import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AuthVComponent } from './Components/vendeur/auth-v/auth-v.component';
import { RegistervComponent } from './Components/vendeur/registerv/registerv.component';
import { HomeVComponent } from './Components/vendeur/home-v/home-v.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'home', component: LandingPageComponent},
  {path:'authv', component: AuthVComponent},
  {path:'registerv', component: RegistervComponent},
  {path:'homev', component: HomeVComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
