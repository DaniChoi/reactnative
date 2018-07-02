import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import Profile from './src/containers/profile'

import store from './src/reducers/index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(store)}>
        <Profile/>
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
