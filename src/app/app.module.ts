import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './componenets/top-menu/top-menu.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './componenets/home/home.component';
import { GlobalRuntimeConfigService, GlobalRuntimeConfig } from "./services/global-runtime-config.service";



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [GlobalRuntimeConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
