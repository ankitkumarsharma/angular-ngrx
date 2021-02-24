import { createAction, props } from "@ngrx/store";
import * as authType from "../auth.types";

export const getRoleDetails = createAction(
  "[auth] getRoleDetails get roles info",
);
export const setRoleDetails = createAction(
  "[auth] setRoleDetails set roles info",
  props<{payload: authType.RoleDetails}>()
);
export const getLoginDetails = createAction(
  "[auth] getLoginDetails get login info",
);
export const setLoginDetails = createAction(
  "[auth] setLoginDetails set login info",
  props<{payload: authType.LoginDetails}>()
);
