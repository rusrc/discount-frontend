import { Action } from "@ngrx/store";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";

export interface promotionItemState
{
    promotionItems: PromotionItem[]
    page: Page<PromotionItem>,
    isLoading: boolean,
    ErrMsg: string
}

const initState: promotionItemState = {
    promotionItems: [],
    page: null,
    isLoading: false,
    ErrMsg: ""
};


export function promotionItemReducer(state: promotionItemState = initState, action: Action): promotionItemState
{
    switch (action.type)
    {
        case "PROMOTION_ITEM_REQUEST":
            return { ...state, ...{ isLoading: true, ErrMsg: "" } };
        case "PROMOTION_ITEM_REQUEST_SUCCESS":
            return { ...state, ...{ promotionItems: action.payload.Items, page: action.payload, isLoading: false } }
        case "PROMOTION_ITEM_REQUEST_ERROR": return { ...state, ...{ ErrMsg: action.payload.ErrMsg, isLoading: false } }
        default:
            return state;
    }
}