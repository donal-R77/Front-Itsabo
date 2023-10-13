import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';

const routes : Routes = [
  {
    path:'register',component:RegisterComponent,
  },
  {
    path:'home-page', component:HomePageComponent,
  },
  {
    path:'diagnostic', component:DiagnosticComponent
  },
  {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DiagnosticComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
