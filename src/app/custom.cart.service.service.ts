import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveCartService, AuthService, GlobalMessageService, GlobalMessageType, MultiCartService, StateWithMultiCart } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class CustomCartService extends ActiveCartService{

  constructor(
      store: Store<StateWithMultiCart>,
      authService: AuthService,
      multiCartService: MultiCartService,
      private globalMsgService : GlobalMessageService
    )
    {
       super(store,authService,multiCartService);
    }

  addEntry(productCode: string, quantity: number): void{
    console.log('prod added '+productCode);
    super.addEntry(productCode, quantity);
    this.globalMsgService.add('Product Added '+productCode,GlobalMessageType.MSG_TYPE_INFO);
  }
  
}
