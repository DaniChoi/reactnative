import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/containers/home'
import ListExample from './src/containers/listExample'
import InputExample from './src/containers/inputExample'


// List of screens in app that we can navigate to
// These screens need to be imported into this file
// Which was done on lines 5-7
// Home will be the default screen displayed because it is the first in the Router
const Router = createStackNavigator({
  Home: { screen: HomeScreen },
  ListExample: { screen: ListExample },
  InputExample: { screen: InputExample },
});


export default class App extends React.Component {
  render() {
    return (
      // Here we are using the Router component that we create on line 14
     <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
