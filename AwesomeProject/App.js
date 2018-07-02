import React, { Component } from 'react';
import HappyBirthday from './src/components/HappyBirthday';
import HellowWorld from './src/components/HellowWorld';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            bool: true
        };
    }

    onPress = () => {
        this.setState({
            bool: !this.state.bool
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style = {styles.name}>{this.state.bool ? "Happy" : "Birthday"}</Text>

                </View>
                <HelloWorld/>
                <Text style={styles.bigblue}>Hello World!</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text> Next </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10,
   margin: 30
  },
  name: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  }
});
