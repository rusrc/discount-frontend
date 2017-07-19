import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "app/_redux/reducers";

//https://medium.com/@flashMasterJim/the-basics-of-ngrx-effects-effect-and-async-middleware-for-ngrx-store-in-angular-2-f25587493329
//https://rajdee.gitbooks.io/redux-in-russian/content/docs/faq/Actions.html#actions-side-effects
//https://github.com/ngrx/effects/blob/master/docs/intro.md
//https://gitter.im/ngrx/effects
@Injectable()
export class MainEffects
{
    constructor(
        private action$: Actions,
        private store: Store<State>) { }

    @Effect() update$ = this.action$
        .ofType('TEST')
        .switchMap((action) =>
        {

            console.log("Fire log");
            return Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" })
        }
        );


    //   @Effect() update$ = this.action$
    // .ofType('TEST')
    // .switchMap(() =>
    // {

    //     console.log("Fire log");
    //     return Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" })
    // }
    // );
}