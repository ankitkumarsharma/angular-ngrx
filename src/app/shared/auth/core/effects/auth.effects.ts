import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authAction from "../actions/auth.actions";
import {switchMap} from "rxjs/operators"

@Injectable()
export class AuthEffects {
  constructor(private _action: Actions){}

  // getRoleDetails$ = createEffect(()=>
  //   this._action.pipe(
  //     ofType(authAction.getRoleDetails.type),
  //     switchMap(() => {
  //       return
  //     })
  //   )
  // );
}
