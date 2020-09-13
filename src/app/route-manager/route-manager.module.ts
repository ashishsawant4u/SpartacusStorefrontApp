import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { OffersComponent } from '../offers/offers.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { ConfigModule, OccConfig, RoutingConfig } from '@spartacus/core';


const ROUTES_LIST : Routes  = [
  
    {path:"offers", component:OffersComponent, canActivate:[CmsPageGuard] , data:{ pageLabel: 'faq'} },
    {path:"faq-copy", component:PageLayoutComponent, canActivate:[CmsPageGuard] , data:{ pageLabel: 'faq'} }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_LIST),
    ConfigModule.withConfig({
      routing : {
        routes : {
          product: {
            paths : [
              'digital-world/:manufacturer/:productCode',
              'digital-world/:productCode/:name',
              'digital-world/:productCode'
              
            ]
          }
        }
      }
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
          product:
              'products/${productCode}?fields=DEFAULT,manufacturer,price(FULL),images(FULL)',
          }
        }
      }
    } as OccConfig)

    
  ]
})
export class RouteManagerModule { }
