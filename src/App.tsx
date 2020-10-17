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

import AppNavigation from './navigation/AppNavigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
