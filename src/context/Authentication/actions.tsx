import { ActionTypes, AuthStateType, User } from './types';

export const authActions = {
  loadPrevData: (dispatch: React.Dispatch<any>, payload: AuthStateType)=>{
    dispatch({
      type: ActionTypes.AUTH_LOAD_STATE,
      payload
    })
  },

  setUserInfo: (dispatch: React.Dispatch<any>, userInfo: User) => {
    dispatch({
      type: ActionTypes.SET_USER_INFO,
      payload: userInfo
    })
  },

  login: (dispatch: React.Dispatch<any>, accessToken: string) => {
    dispatch({
      type: ActionTypes.AUTH_LOGIN,
      payload: {
        isLoggedIn: true,
        accessToken
      }
    })
  },

  logout: (dispatch: React.Dispatch<any>) => {
    dispatch({
      type: ActionTypes.AUTH_LOGOUT,
      payload: {
        isLoggedIn: false,
        accessToken: '',
        userInfo: null
      }
    })
  }
}