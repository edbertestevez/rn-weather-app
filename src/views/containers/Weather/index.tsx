import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WeatherProps {}

const Weather: React.FC = (props: WeatherProps) => {
  return (
    <View style={styles.container}>
      <Text>Weather</Text>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {}
});
