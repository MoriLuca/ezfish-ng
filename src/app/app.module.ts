import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { NotFoundComponentComponent } from './componenets/not-found-component/not-found-component.component';
import { LaghiComponent } from './componenets/laghi/laghi.component';
import { TecnicheComponent } from './componenets/tecniche/tecniche.component';






@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    LoginInfoForMenuComponent,
    GetInfoByEmailComponent,
    TestCsvComponent,
    NotFoundComponentComponent,
    LaghiComponent,
    TecnicheComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component: HomeComponent},
      {path:"laghi",component: LaghiComponent},
      {path:"tecniche",component: TecnicheComponent},
      {path:"contattaci",component: GetInfoByEmailComponent},
      {path:"**",component: NotFoundComponentComponent}
    ])
  ],
  providers: [
    GlobalRuntimeConfigService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
