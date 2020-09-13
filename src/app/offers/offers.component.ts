import { Component, OnInit } from '@angular/core';
import { CmsService, Product, ProductService, RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  cmsDataForPage : any;
  trandingProduct : Product;

  constructor(private cmsService : CmsService,
              private routerService : RoutingService,
              private productService : ProductService) { }

  ngOnInit(): void {

   this.cmsDataForPage = this.cmsService.getCurrentPage();

   this.productService.get('454831').subscribe(
        prod => this.trandingProduct = prod
   );

  }

  getWeekTopProduct() : void {
    this.routerService.go({ cxRoute:'product', params: {code:'1981415'} });
  }

}
