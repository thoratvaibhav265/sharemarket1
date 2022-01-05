import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AddShareComponent } from './modules/admin/add-share/add-share.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { DeleteShareComponent } from './modules/admin/delete-share/delete-share.component';
import { UpdateShareComponent } from './modules/admin/update-share/update-share.component';
import { ViewShareComponent } from './modules/admin/view-share/view-share.component';
import { BuyShareComponent } from './modules/trader/buy-share/buy-share.component';
import { TraderLoginComponent } from './modules/trader/trader-login/trader-login.component';
import { TraderRegisterComponent } from './modules/trader/trader-register/trader-register.component';
import { SharesListComponent } from './shares-list/shares-list.component';
import { TopWatchListComponent } from './top-watch-list/top-watch-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'traderregister', component: TraderRegisterComponent},
  { path: 'traderlogin', component: TraderLoginComponent },
  { path: 'admindashboard', component:AdminDashboardComponent },
  { path: 'addshare', component:AddShareComponent },
  { path: 'watchlist', component:ViewShareComponent },
  { path: 'update/:id', component:UpdateShareComponent },
  { path: 'delete/:id', component:DeleteShareComponent },
  { path: 'sharemarket', component:SharesListComponent } ,
  { path: 'sharesbuy/:id', component:BuyShareComponent}
  

  
  
   



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
