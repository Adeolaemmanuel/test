import * as React from "react";

export type Children = React.ReactNode;

export interface LayoutC {
  children?: Children;
}
export interface LoginC {
  children?: Children;
}
export interface RegisterC {
  children?: Children;
}
export interface DashdoardC {
  children?: Children;
}
export interface LoginState {
  email: string;
  password: string;
  showPassword: boolean;
  emailError?: string;
}
export interface RegisterState {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  showPassword: boolean;
  emailError?: string;
}

export interface UserSlice {
  email: string;
  user?: string;
  auth?: string;
}
export interface UserAuthM {
  user: {
    _id: number;
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    email_verification_token: string;
    created_at: string;
  };
  token: string;
}
