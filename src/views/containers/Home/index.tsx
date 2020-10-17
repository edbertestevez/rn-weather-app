import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontSize } from '../../../constants/FontSize';
import { AppActions, AppContext } from '../../../context/main';
import { LocationService, CoordinatesType } from '../../../services/LocationService';
import AppButton from '../../components/AppButton';
import styles from './styles/Home.style';

const Home: React.FC = () => {
	const { state, dispatch } = React.useContext(AppContext);
  const { userInfo } = state.auth;

  const showCoordinates = async() =>{
    let location: CoordinatesType = await LocationService.getCoordinates() as CoordinatesType;
    Alert.alert(
      "Current Coordinates", 
      `Lat: ${location.coords.latitude}\nLong: ${location.coords.longitude}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userInfo?.name}</Text>
      <Text style={styles.link}>http://github.com/{userInfo?.nickname}</Text>
     
      <AppButton 
        label={"Show Coordinates"} 
        onPress={showCoordinates}
        customStyle={styles.button}
      />
    </View>
  );
};

export default Home;
