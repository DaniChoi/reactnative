import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ButtonComponent extends React.Component {

    render() {

        // All the variables below are passed to this component from the home screen where we are using the button component 
        // Looking at The home screen lines 32-33 we can see that we are defining all the variables below 

        // buttonStyle allows us to change the styling of the button i.e: background color, height, width, border Radius
        // textStyle allows us to change the styling of the text in the button i.e: fontSize, font color, font alignment
        // text allows us to change the text that is placed within the button
        // action is a function that we would like to be called when the button is pressed.
        let { buttonStyle, textStyle, text, action } = this.props

        return (
            <View>

                <TouchableOpacity
                    style={ [ styles.staticButtonStyle, buttonStyle ] }
                    onPress={ ()=> action() }
                >
                    <Text style={ [ styles.staticTextStyle, textStyle ] }> { text } </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  staticButtonStyle: {
    height:52,
    width:"90%",
    justifyContent:"center",
    alignSelf:"center"
  },
  staticTextStyle:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"700"
  }
});
