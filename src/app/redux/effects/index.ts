import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//https://medium.com/@flashMasterJim/the-basics-of-ngrx-effects-effect-and-async-middleware-for-ngrx-store-in-angular-2-f25587493329
@Injectable()
export class MainEffects
{
    constructor(private action$: Actions) { }

    @Effect() update$ = this.action$
        .ofType('SUPER_SIMPLE_EFFECT')
        .switchMap(() =>
            Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" })
        );
}