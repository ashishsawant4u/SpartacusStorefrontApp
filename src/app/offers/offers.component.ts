import { Component, OnInit } from '@angular/core';
import { CmsService, RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  cmsDataForPage : any;

  constructor(private cmsService : CmsService,
              private routerService : RoutingService) { }

  ngOnInit(): void {

   this.cmsDataForPage = this.cmsService.getCurrentPage();
  }

  getWeekTopProduct() : void {
    this.routerService.go({ cxRoute:'product', params: {code:'1981415'} });
  }

}
