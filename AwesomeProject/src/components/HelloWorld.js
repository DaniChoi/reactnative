import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (
            <Text style={styles.bigblue}>Hello World!</Text>

        );
    }
}





const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 50,
  },
});
