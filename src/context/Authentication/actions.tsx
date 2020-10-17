import { ActionTypes, AuthStateType } from './types';

export const authActions = {
  loadPrevData: (dispatch: React.Dispatch<any>, prevState: AuthStateType)=>{
    dispatch({
      type: ActionTypes.AUTH_LOAD_STATE,
      payload: prevState
    })
  },
  updateAuthState: (dispatch: React.Dispatch<any>, isLoggedIn: boolean) => {
    dispatch({
      type: ActionTypes.AUTH_STATE_CHANGED,
      payload: {
        isLoggedIn
      }
    })
  }
}