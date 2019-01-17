import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './componenets/top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './componenets/home/home.component';
import { GlobalRuntimeConfigService } from "./services/global-runtime-config.service";
import { ApiService } from "./services/api.service";
import { LoginComponent } from './componenets/login/login.component';
import { LoginInfoForMenuComponent } from './componenets/login-info-for-menu/login-info-for-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { GetInfoByEmailComponent } from './componenets/get-info-by-email/get-info-by-email.component';
import { TestCsvComponent } from './componenets/test-csv/test-csv.component';






@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    LoginInfoForMenuComponent,
    GetInfoByEmailComponent,
    TestCsvComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    GlobalRuntimeConfigService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
