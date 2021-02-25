import { createAction, props } from "@ngrx/store";
import * as authType from "../auth.types";

export const getRoleDetails = createAction(
  "[auth] getRoleDetails get roles info",
);
export const setRoleDetails = createAction(
  "[auth] setRoleDetails set roles info",
  props<{payload: authType.RoleDetailsType}>()
);
export const getLoginDetails = createAction(
  "[auth] getLoginDetails get login info",
);
export const setLoginDetails = createAction(
  "[auth] setLoginDetails set login info",
  props<{payload: authType.LoginDetailsType}>()
);
export const getAccountDetails = createAction(
  "[auth] getAccountDetails get account info",
  props<{payload: authType.GetAccountType}>()
);
export const setAccountDetails = createAction(
  "[auth] setAccountDetails set account info",
  props<{payload: authType.SetAccountType}>()
);
// for sample
export const getTodoList = createAction(
  "[auth] getTodoList get list",
);
export const setTodoList = createAction(
  "[auth] setTodoList set todo info",
  props<{payload: authType.SaveTodoListType[]}>()
);
