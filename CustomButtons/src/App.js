import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ButtonDemo from './containers/buttonDemo'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <View style={styles.container}> 

        <ButtonDemo/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
