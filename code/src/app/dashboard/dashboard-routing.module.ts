import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntentManagementComponent } from './intent-management/intent-management.component';
import { DashboardComponent } from './dashboard.component';
import { StockComponent } from './stock/stock.component';
import { LicenseProfileComponent } from './license-profile/license-profile.component';
import { PriceComponent } from './price/price.component';
import { AlertComponent } from './alert/alert.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      { path: '', redirectTo: 'indentManagement', pathMatch: 'full' },
      { path: 'indentManagement', component: IntentManagementComponent },
      { path: 'stock', component: StockComponent },
      { path: 'licenseProfile', component: LicenseProfileComponent },
      { path: 'price', component: PriceComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'feedBack', component: FeedBackComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }