/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { AppProvider } from './context/main';

import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigation/>
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
