import { 
  ActionTypes, 
  WeatherStateType,
  WeatherActions
} from "./types";

export const weatherState: WeatherStateType = {
  forecast: {
    dt: 0,
    temp: 0,
    description: '',
    main: '',
    pressure: 0,
    humidity: 0
  }
};

export const weatherReducer = (state: WeatherStateType, action: WeatherActions) => {
  switch (action.type) {

    case ActionTypes.SET_FORECAST: {
      return {
        ...state,
        forecast: action.payload
      }
    }
    default:{
      return state;
    }
  }
};