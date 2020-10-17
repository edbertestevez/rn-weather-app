import { ActionMap } from "../../constants/Types";

export enum ActionTypes {
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGOUT = "AUTH_LOGOUT",
  AUTH_LOAD_STATE = "AUTH_LOAD_STATE",
  SET_USER_INFO = "SET_USER_INFO"
}

export type Payload = {
  [ActionTypes.AUTH_LOGIN] : AuthStateType;
  [ActionTypes.AUTH_LOGOUT] : void;
  [ActionTypes.AUTH_LOAD_STATE] : AuthStateType;
  [ActionTypes.SET_USER_INFO] : User;
}

export type User = {
  name: string,
  nickname: string,
  picture: string,
  email: string
}

export type AuthStateType = {
  isLoggedIn: boolean,
  accessToken: string | null,
  userInfo: User | null
}

export type AuthActions = ActionMap<Payload>[keyof ActionMap<Payload>];
