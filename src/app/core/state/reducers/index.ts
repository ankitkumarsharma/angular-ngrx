import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../app.types";
import * as authReducers from "../../../shared/auth/core/reducers/auth.reducers";
import { localStorageSync } from "ngrx-store-localstorage";

export const reducers: ActionReducerMap<AppState> = {
  authData: authReducers.reducer,
}
export function localStorageSyncReducer(reducer:ActionReducer<AppState>):ActionReducer<AppState>{
  return localStorageSync({
    keys: [authReducers.authDataKey],
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}
export function clearState(
  reducer: ActionReducer<any>
): ActionReducer<any>{
  return (state, action) => {
    if(action !== null && action.type === "RESET_STATE"){
      return reducer(undefined, {type: "RESET_STATE"});
    }
    return reducer(state, action);
  };
}
export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearState
]
