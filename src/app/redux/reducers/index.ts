import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import * as fromTest from './Test';

//---------------------------------
export interface State
{
    test: fromTest.State
    //search: fromSearch.State;
}

const reducers = {
    test: fromTest.reducer
    //search: fromSearch.reducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any)
{
    return productionReducer(state, action);
}
//----------------------------------