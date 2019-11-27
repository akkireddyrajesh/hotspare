import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IntentManagementComponent } from './intent-management/intent-management.component';
import { StockComponent } from './stock/stock.component';
import { LicenseProfileComponent } from './license-profile/license-profile.component';
import { PriceComponent } from './price/price.component';
import { AlertComponent } from './alert/alert.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, IntentManagementComponent, StockComponent, LicenseProfileComponent, PriceComponent, AlertComponent, FeedBackComponent]
})
export class DashboardModule { }
