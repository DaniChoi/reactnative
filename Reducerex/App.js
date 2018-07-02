import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import Profile from './src/containers/profile'
import ChangeProfile from './src/containers/changeprofile'

import store from './src/reducers/index'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Router = createStackNavigator({
  Profile: { screen: Profile },
  ChangeProfile: {screen: ChangeProfile }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(store)}>
          <View style={{alignSelf:"stretch", flex:1}}>
        {/* <Profile/> */}
        <Router/>
        </View>
      </Provider>


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
