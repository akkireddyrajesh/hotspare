import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from "./core/material.module";
import { IndentComponent } from './modules/indent/indent.component';
import { StockComponent } from './modules/stock/stock.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { CustomgridComponent } from './custom/customgrid/customgrid.component';
import { PriceListComponent } from './modules/price-list/price-list.component';
import { LicenseProfilesComponent } from './modules/license-profiles/license-profiles.component';
import { AlertsComponent } from './modules/alerts/alerts.component';
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { FeaturesComponent } from './features/features.component';
import {AppConfigService} from './services/app.config.service';
import { HttpService } from './services/http.service';
import { HttpInterceptorService } from './services/httpinterceptor.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DialoguePopupComponent} from './custom/dialogue-popup/dialogue-popup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'features', component : FeaturesComponent},
  {
    path: 'login', component: LoginlayoutComponent, 
    children: [
      { path: '', component: LoginComponent},
      { path: 'landing', component: LandingComponent }
    ]
  },
  { path: 'home', component: HomelayoutComponent,
  children: [
    { path: '', component: IndentComponent},
    { path: 'module/indent', component: IndentComponent },
    { path: 'module/stock', component: StockComponent },
    { path: 'module/price', component: PriceListComponent },
    { path: 'module/license', component: LicenseProfilesComponent },
    { path: 'module/alerts', component: AlertsComponent },
    { path: 'module/feedback', component: FeedbackComponent }
  ]
}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    IndentComponent,
    StockComponent,
    LoginlayoutComponent,
    HomelayoutComponent,
    CustomgridComponent,
    PriceListComponent,
    LicenseProfilesComponent,
    AlertsComponent,
    FeedbackComponent,
    FeaturesComponent,
    DialoguePopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    AgGridModule.withComponents(null),
    CustomMaterialModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppConfigService,HttpService,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
