import { OPENWEATHER_KEY } from '../config/main';
import { WeatherStateType } from '../context/Weather/types';
import { ApiService } from './ApiService';

type WeatherService = {
	getForecast: (latitude: string, longitude: string) => Promise<WeatherStateType>;
};


const BASE_URL = "http://api.openweathermap.org";

export const WeatherService = {
  getForecast: async(latitude: string, longitude: string) => {
    
    const data = await ApiService.get({
      url: `${BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=1&appid=${OPENWEATHER_KEY}`
    });
    
    return {
      dt: data.dt,
      temp: data.main.temp,
      description: data.weather[0].description,
      main: data.weather[0].main,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }
  }
}