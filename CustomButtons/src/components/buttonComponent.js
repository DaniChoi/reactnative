import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ButtonComponent extends React.Component {

    render() {
        let { text, action, actionData, buttonStyle, textStyle } = this.props
        
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={ ()=> action(actionData) }
            >
                <Text style={textStyle}> { text } </Text>
            </TouchableOpacity>
        )

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
  