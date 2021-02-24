export interface AuthType {
  roleDetails: RoleDetails;
  loginDetails: {
    login?: LoginDetails,
    mobileOTP?: MobileOTPDetails
  };
}
export interface RoleDetails {
  role: string;
  designation: string;
}
export interface LoginDetails {
  user: string;
  password: string;
}
export interface MobileOTPDetails {
  otp: string;
  password: string;
}
