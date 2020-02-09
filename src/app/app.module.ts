import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppUrl} from './shared/constants/app-url';
import {HttpClientModule} from '@angular/common/http';
import {DashboardService} from './shared/services/dashboard.service';
import {CoreModule} from './core/core.module';
import {GlobalService} from './shared/services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [AppUrl, HttpClientModule, DashboardService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
