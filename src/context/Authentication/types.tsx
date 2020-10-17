import { ActionMap } from "../../constants/Types";

export enum ActionTypes {
  AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED",
  AUTH_LOAD_STATE = "AUTH_LOAD_STATE"
}

export type Payload = {
  [ActionTypes.AUTH_STATE_CHANGED] : {
    isLoggedIn: boolean;
  };
  [ActionTypes.AUTH_LOAD_STATE] : AuthStateType;
}

export type User = {
  name: string,
  nickname: string,
  picture: string,
  email: string
}

export type AuthStateType = {
  isLoggedIn: boolean,
  accessToken: string,
  userInfo: User
}

export type AuthActions = ActionMap<Payload>[keyof ActionMap<Payload>];
