import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { OffersComponent } from './offers/offers.component';
import { RouteManagerModule } from './route-manager/route-manager.module';
import { CmsConfig, ConfigModule, PRODUCT_NORMALIZER, UrlModule } from '@spartacus/core';
import { ProductNormalizerService } from './product-normalizer.service';
import { CartCustomComponent } from './cart-custom/cart-custom.component';

export const GERMAN_TRANSLATION = {
     de:{
       common:{
         searchBox:{
           placeholder : 'FIND PRODS',
         }
       }
     }
};

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    CartCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      checkout: {
        guest: true
      },
      backend: {
        occ: {      
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
        customParam: ['shopzone'],
        urlParameters: ['customParam','baseSite','language','currency']
        
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    }),
    ConfigModule.withConfig({
      i18n: { resources: GERMAN_TRANSLATION },
      layoutSlots:{
        header: {
          lg:{
            slots: [
              'SiteLogo',
              'SiteContext',
              'SiteLogin',
              'SearchBox',
              'MiniCart',
              'NavigationBar',
              
            ],
          }
        }
      }
   }),
   ConfigModule.withConfig({
    cmsComponents:{
      CartComponent : {
        component : CartCustomComponent,
      }
    },
   } as CmsConfig),
    RouteManagerModule,
    UrlModule
  ],
  providers: [
    {provide : PRODUCT_NORMALIZER , useClass : ProductNormalizerService , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
