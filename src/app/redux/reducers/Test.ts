import { Action } from "@ngrx/store";


export interface State
{
    str: string;
}

const initialState: State = { str: "Hello!" };

export function reducer(state = initialState, action: Action): State
{
    switch (action.type)
    {
        case "TEST":
            return { ...state, str: "World!" }
        default:
            return state;
    }
}