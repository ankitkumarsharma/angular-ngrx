import { AuthType } from "../shared/auth/core/auth.types";

export interface ContactInfoType {
  name: string,
  value: string,
  url: string
}
export interface AppState {
  authData: AuthType
}
export interface LoaderType {
  show: boolean,
}
