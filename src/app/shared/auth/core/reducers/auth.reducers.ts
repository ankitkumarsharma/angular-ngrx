import { Action, createReducer, on } from "@ngrx/store";
import { AuthType } from "../auth.types";
import * as authAction from "../actions/auth.actions";
export const authDataKey = "authData";
export const initialAuth: AuthType = {
  roleDetails: {
    designation:"",
    role:""
  },
  loginDetails:{}
}
const authReducer = createReducer(
  initialAuth,
  on(authAction.setRoleDetails,(state, {payload}) =>{
    return {
      ...state,
      roleDetails: payload
    }
  }),
  on(authAction.setLoginDetails,(state, {payload}) =>{
    return {
      ...state,
      loginDetails: {
        ...state.loginDetails,
        login: payload
      }
    }
  }),
  // for sample
  on(authAction.setTodoList,(state, {payload}) =>{
    return {
      ...state,
      loginDetails: {
        ...state.loginDetails,
        todoList: payload
      }
    }
  }),
);
export function reducer(state: AuthType | undefined, action: Action) {
  return authReducer(state, action);
}
