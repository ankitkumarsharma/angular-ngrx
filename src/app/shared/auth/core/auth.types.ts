export interface AuthType {
  roleDetails: RoleDetailsType;
  loginDetails: {
    login?: LoginDetailsType,
    mobileOTP?: MobileOTPDetailsType,
    setAccount?: SetAccountType,
    todoList?: SaveTodoListType[]
  };
}
export interface RoleDetailsType {
  role: string;
  designation: string;
}
export interface LoginDetailsType {
  user: string;
  password: string;
}
export interface MobileOTPDetailsType {
  otp: string;
  password: string;
}
export interface SetAccountType {
  user: string,
  id: string,
}
export interface GetAccountType {
  user: string,
  password: string;
}
// for sample
export interface SaveTodoListType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
