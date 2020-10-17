import { ActionTypes, Weather } from './types';

export const weatherActions = {
  setForecast: (dispatch: React.Dispatch<any>, payload: Weather)=>{
    dispatch({
      type: ActionTypes.SET_FORECAST,
      payload
    })
  }
}