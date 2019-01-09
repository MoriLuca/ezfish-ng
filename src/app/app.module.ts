import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './componenets/top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './componenets/home/home.component';
import { GlobalRuntimeConfigService, GlobalRuntimeConfig } from "./services/global-runtime-config.service";
import { LoginComponent } from './componenets/login/login.component';
import { LoginInfoForMenuComponent } from './componenets/login-info-for-menu/login-info-for-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    LoginInfoForMenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule
    
  ],
  providers: [GlobalRuntimeConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
