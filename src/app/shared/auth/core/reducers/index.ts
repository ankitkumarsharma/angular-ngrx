import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as authReducers from "./auth.reducers";
import { localStorageSync } from "ngrx-store-localstorage";
import { AuthType } from "../auth.types";

export interface AuthStateType {
  authInfo?: AuthType
}
export const sharedReducer: ActionReducerMap<AuthStateType> = {
  authInfo: authReducers.reducer
}
export function localStorageSyncReducer(reducer:ActionReducer<AuthStateType>):ActionReducer<AuthStateType>{
  return localStorageSync({
    keys: [authReducers.authDataKey],
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer
]
