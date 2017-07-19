import { Action } from "@ngrx/store";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";

export interface promotionItemState
{
    promotionItems: PromotionItem[]
    page: Page<PromotionItem>,
    isLoading: boolean
}

const initState: promotionItemState = {
    promotionItems: [],
    page: null,
    isLoading: false
};


export function promotionItemReducer(state: promotionItemState = initState, action: Action): promotionItemState
{
    switch (action.type)
    {
        case "PROMOTION_ITEM_REQUEST":
            return { isLoading: true, promotionItems: [], page: null };
        case "PROMOTION_ITEM_REQUEST_SUCCESS":
            return { promotionItems: [...state.promotionItems, ...action.payload.Items], isLoading: false, page: action.payload }

        default:
            return state;
    }
}