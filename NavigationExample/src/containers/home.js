import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/buttonComponent'


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        // Here we define the name of the screen
        // This name is displayed at the top of the phone
        // When the home screen is displayed
        title: 'Home',
    };


    render() {
        // navigate is a function that allows us to change screens
        // To change to a different screen you use the navigate function
        // with the name of the screen that you want to navigate to as the argument

        // Take note that the name of each screen is defined in router component in App.js lines 15-17
        // We can name the screen whatever we like
        const { navigate } = this.props.navigation;
        return (
            <View>

                {/*
                    Here we use the customized button component we created in the componenet folder.
                    It's more efficent to use this custom button component as opposed to writing almost
                    the same code multiple times.
                 */}
                <ButtonComponent buttonStyle={ styles.listExampleButton } text={'ListExample'} action={ ()=> navigate("ListExample") } />
                <ButtonComponent buttonStyle={ styles.inputExampleButton } text={'InputExample'} action={ ()=> navigate("InputExample") } />

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
  },
  listExampleButton:{
      backgroundColor:"red"
  },
  inputExampleButton:{
    backgroundColor:"green"
},


});
