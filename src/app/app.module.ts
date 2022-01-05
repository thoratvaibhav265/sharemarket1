import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddShareComponent } from './modules/admin/add-share/add-share.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { DeleteShareComponent } from './modules/admin/delete-share/delete-share.component';
import { UpdateShareComponent } from './modules/admin/update-share/update-share.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { TraderRegisterComponent } from './modules/trader/trader-register/trader-register.component';
import { TraderLoginComponent } from './modules/trader/trader-login/trader-login.component';
import { MyportfolioComponent } from './modules/trader/myportfolio/myportfolio.component';
import { ManageSharemarketComponent } from './modules/admin/manage-sharemarket/manage-sharemarket.component';
import { TopWatchListComponent } from './top-watch-list/top-watch-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewShareComponent } from './modules/admin/view-share/view-share.component';
import { SharesListComponent } from './shares-list/shares-list.component';
import { BuyShareComponent } from './modules/trader/buy-share/buy-share.component';
import { SellShareComponent } from './modules/trader/sell-share/sell-share.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddShareComponent,
    AdminLoginComponent,
    DeleteShareComponent,
    UpdateShareComponent,
    AdminDashboardComponent,
    TraderRegisterComponent,
    TraderLoginComponent,
    MyportfolioComponent,
    ManageSharemarketComponent,
    TopWatchListComponent,
    ViewShareComponent,
    SharesListComponent,
    BuyShareComponent,
    SellShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule ,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
