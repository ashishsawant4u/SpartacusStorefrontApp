import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { OffersComponent } from '../offers/offers.component';
import { CmsPageGuard } from '@spartacus/storefront';


const ROUTES_LIST : Routes  = [
  
    {path:"offers", component:OffersComponent, canActivate:[CmsPageGuard]}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_LIST)
  ]
})
export class RouteManagerModule { }
