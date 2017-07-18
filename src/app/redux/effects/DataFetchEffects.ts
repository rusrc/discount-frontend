import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "app/redux/reducers";
import { PromotionItemService } from "app/services/promotion-item.service";


@Injectable()
export class DataFetchEffects
{
    constructor(private action$: Actions, private promotionItemService:PromotionItemService) { }

    @Effect() promotionItemFetch$ = this.action$
        .ofType('PROMOTION_ITEM_LOAD')
        .switchMap((action) =>
        {

            console.log("Fire log");
            return Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" })
        }
        );

}