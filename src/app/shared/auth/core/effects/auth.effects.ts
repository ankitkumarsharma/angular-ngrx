import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authAction from "../actions/auth.actions";
import {switchMap, map, catchError} from "rxjs/operators"
import { AuthService } from "../services/auth.service";
import { EMPTY, of } from "rxjs";
import { sendEmptyAction } from "src/app/core/state/actions/app.actions";

@Injectable()
export class AuthEffects {
  constructor(private _action: Actions, private _authService: AuthService){}

  getRoleDetails = createEffect(()=> this._action.pipe(
    ofType(authAction.getRoleDetails.type),
    switchMap(()=> {
      return this._authService.roleDetails().pipe(
        map((result:any) =>{
          if(result["error"]) {
            return sendEmptyAction();
          } else {
            return authAction.setRoleDetails({payload: result})
          }
        }), catchError((error)=>{
          return EMPTY;
        })
      )
    })
  ));

  // add account
  getAccountDetails = createEffect(()=> this._action.pipe(
    ofType(authAction.getAccountDetails.type),
    switchMap(({payload})=> {
      return this._authService.addAccount(payload).pipe(
        map((result:any) =>{
          if(result["error"]) {
            return sendEmptyAction();
          } else {
            return authAction.setAccountDetails({payload: result})
          }
        }), catchError((error)=>{
          return EMPTY;
        })
      )
    })
  ));
  // get todo list
  getTodoList = createEffect(()=> this._action.pipe(
    ofType(authAction.getTodoList.type),
    switchMap(()=> {
      return this._authService.getTodoList().pipe(
        map((result:any) =>{
          return authAction.setTodoList({payload: result})
        }), catchError((error)=>{
          return EMPTY;
        })
      )
    })
  ));
}
