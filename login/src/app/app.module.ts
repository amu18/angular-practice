import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginService } from './login.service';
import { AuthguardGuard } from './authguard.guard';


const appRoutes:Routes = [
  {
    path:'',
    component: LoginFormComponent
  },
  {
    path:'dashbord',
    canActivate: [AuthguardGuard],
    component: DashbordComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashbordComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LoginService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
