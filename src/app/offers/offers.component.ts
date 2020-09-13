import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  cmsDataForPage : any;

  constructor(private cmsService : CmsService) { }

  ngOnInit(): void {

   this.cmsDataForPage = this.cmsService.getCurrentPage();
  }

}
