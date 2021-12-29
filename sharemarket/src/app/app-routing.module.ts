import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AddShareComponent } from './modules/admin/add-share/add-share.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { TraderLoginComponent } from './modules/trader/trader-login/trader-login.component';
import { TraderRegisterComponent } from './modules/trader/trader-register/trader-register.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'traderregister', component: TraderRegisterComponent},
  { path: 'traderlogin', component: TraderLoginComponent },
  { path: 'admindashboard', component:AdminDashboardComponent },
  { path: 'addshare', component:AddShareComponent }
   



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
