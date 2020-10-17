import { ActionMap } from "../../constants/Types";

export enum ActionTypes {
  AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED",
  AUTH_LOAD_STATE = "AUTH_LOAD_STATE"
}

export type Payload = {
  [ActionTypes.AUTH_STATE_CHANGED] : {
    isLoggedIn: boolean;
  };
  [ActionTypes.AUTH_LOAD_STATE] : {
    prevState: AuthStateType;
  };
}

export type AuthStateType = {
	isLoggedIn: boolean;
}

export type AuthActions = ActionMap<Payload>[keyof ActionMap<Payload>];
