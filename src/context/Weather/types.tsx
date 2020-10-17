import { ActionMap } from "../../constants/Types";

//Location Related types

export enum ActionTypes {
  SET_FORECAST = "SET_FORECAST"
}

export type Payload = {
  [ActionTypes.SET_FORECAST] : Weather;
}

export type Weather = {
  dt: number,
  temp: number,
  description: string,
  main: string,
  pressure: number,
  humidity: number
}

export type WeatherStateType = {
  forecast: Weather
}

export type WeatherActions = ActionMap<Payload>[keyof ActionMap<Payload>];

