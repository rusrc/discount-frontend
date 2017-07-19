import { Action, Store } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import { State } from "app/_redux/reducers";

@Injectable()
export class DataFetchEffects
{
    constructor(
        private action$: Actions,
        private promotionItemService: PromotionItemService) { }

    @Effect() promotionItemFetch$ = this.action$
        .ofType('PROMOTION_ITEM_REQUEST')
        .map((payload) => payload)
        .switchMap((payload) =>
        {
            console.log("PROMOTION_ITEM_REQUEST", payload);

            return this.promotionItemService.getAll()
                .map((res: Page<PromotionItem>) =>
                {
                    console.log("PROMOTION_ITEM_REQUEST_SUCCESS", res);
                    return ({
                        type: "PROMOTION_ITEM_REQUEST_SUCCESS",
                        payload: res
                    } as Action)
                })
                //.catch(err => console.log(err));


            // console.log("Fire log");
            // return Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" })
        }
        );

}