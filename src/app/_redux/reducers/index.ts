import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import * as fromTest from './Test';
import * as fromPromotionItemAction from './promotionItemReducer';

//---------------------------------
export interface State
{
    test: fromTest.State
    promotionItemState: fromPromotionItemAction.promotionItemState
    //search: fromSearch.State;
}

const reducers = {
    test: fromTest.reducer,
    promotionItemState : fromPromotionItemAction.promotionItemReducer
    //search: fromSearch.reducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any)
{
    return productionReducer(state, action);
}
//----------------------------------