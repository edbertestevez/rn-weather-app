import { ActionMap } from "../../constants/Types";

export enum ActionTypes {
  AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED"
}

export type Payload = {
  [ActionTypes.AUTH_STATE_CHANGED] : {
    isLoggedIn: boolean;
  };
}

export type AuthStateType = {
	isLoggedIn: boolean;
}

export type AuthActions = ActionMap<Payload>[keyof ActionMap<Payload>];
