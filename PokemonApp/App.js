import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

// import Home from './src/containers/home'
import ListExample from './src/containers/listExample'
// import InputExample from './src/containers/inputExample'
import Test from './src/containers/test'

import store from './src/reducers/index'
import ErrorBoundary from './src/components/errorBoundary';
import ReduxThunk from 'redux-thunk'



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// List of screens in app that we can navigate to
// These screens need to be imported into this file
// Which was done on lines 5-7
// Home will be the default screen displayed because it is the first in the Router


const Router = createStackNavigator({
    ListExample: { screen: ListExample },
    Test: { screen: Test },
});


export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(store)}>
                <Router/>
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
