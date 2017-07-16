import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';

//---------------------------------
export interface State
{
    //search: fromSearch.State;
}

const reducers = {
    //search: fromSearch.reducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any)
{
    return productionReducer(state, action);
}
//----------------------------------