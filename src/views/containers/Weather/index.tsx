import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { AppActions, AppContext } from '../../../context/main';
import { Weather } from '../../../context/Weather/types';
import CommonService from '../../../services/CommonService';
import { WeatherService } from '../../../services/WeatherService';
import GridTable from '../../components/GridTable';

import styles from './styles/Weather.style';
import { largeScreenKeys, smallScreenKeys } from './templates/weatherTable';

interface WeatherProps {}

const WeatherScreen: React.FC = (props: WeatherProps) => {
	const { state, dispatch } = useContext(AppContext);
	const [ isFetching, setIsFetching ] = useState(true);
  const [ isScreenSmall, setIsScreenSmall ] = useState(CommonService.isScreenSmall());
	const { coordinates } = state.location;
  const { forecast } = state.weather; 

	useEffect(() => {
		fetchWeatherForecast();
  }, []);
  
  useEffect(() => {
    Dimensions.addEventListener("change", onScreenSizeChange);
    return () => {
      Dimensions.removeEventListener("change", onScreenSizeChange);
    };
  });

  const onScreenSizeChange = () =>{
    setIsScreenSmall(CommonService.isScreenSmall())
  }

	const fetchWeatherForecast = async () => {
		let forecast: Weather = await WeatherService.getForecast(coordinates.latitude, coordinates.longitude);
    
    if(forecast){
      AppActions.weather.setForecast(dispatch, forecast);
      setIsFetching(false);
    }
  };
  

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Weather Forecast</Text>
      {isFetching && (
  			<ActivityIndicator size={26} color={AppColors.GREEN} />
      )}

      <GridTable
        keys={isScreenSmall ? smallScreenKeys : largeScreenKeys}
        data={[forecast]}
      />
		</View>
	);
};

export default WeatherScreen;
