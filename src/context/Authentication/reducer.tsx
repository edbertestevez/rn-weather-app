import { Alert } from "react-native";
import { 
  ActionTypes, 
  AuthStateType,
  AuthActions
} from "./types";

export const authState: AuthStateType = {
  isLoggedIn: false,
  accessToken: null,
  userInfo: {
    name: '',
    nickname: '',
    picture: '',
    email: ''
  }

  /** Insert other persisted states like preferences, etc */
};

export const authReducer = (state: AuthStateType, action: AuthActions) => {
  switch (action.type) {

    case ActionTypes.AUTH_LOAD_STATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case ActionTypes.AUTH_LOGIN: {
      return {
        ...state,
        ...action.payload
      };
    }
    case ActionTypes.AUTH_LOGOUT: {
      return {
        isLoggedIn: false,
        accessToken: null,
        userInfo: null 
      };
    }
    case ActionTypes.SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload
      };
    }
    default:{
      return state;
    }
  }
};