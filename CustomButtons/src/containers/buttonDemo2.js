import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Import the button Component that we created in the components folder
import ButtonComponent from '../components/buttonComponent'


// Create the component and give it a name. In this case the name of the componenet is ButtonDemo
export default class ButtonDemo extends React.Component {


    // This constructor should be added when ever elements on a page need to change or be updated 
    constructor(props) {
        super(props);
        this.state = {
            bool: false,
            counter: 0
        };

        // Whenever you create a function you need to bind/attach that function to the component, this is how you do that.
        this.displayAlert = this.displayAlert.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.toggle = this.toggle.bind(this);
        this.consoleLogMessage = this.consoleLogMessage.bind(this);
    }


    /**
     * This function is called when the first button is pressed and it displays a popup alert
     */
    displayAlert(){
        alert("Hello")
    }

    /**
     * This function is called when the second button is pressed and it updates the counter in that button
     */
    increaseCount(){
        // This is how we access the counter variable that we created on line 17
        let { counter } = this.state
        // Notice this is how we are updating the value of the counter that we created on line 17
        // We are saying take the current value of counter and then add 1 to it.
        this.setState({count: counter + 1 })
    }

    /**
     * This function is called when the third button is pressed and it toggles the text of the button from OFF to ON
     */
    toggle(){
        // This is how we access the bool variable that we created on line 16
        let { bool } = this.state
        // Here we are updating the value of the boolean variable that we created on line 16
        // We are assigning the new value of bool as the opposite of the previous value
        // So it bool was true before now its false, if bool was false before now it is true
        // this is possible due to the exclaimation symbol before the variable on like 57
        // !true is the same as false and !false is the same as true
        this.setState({bool:!bool})
    }

    /**
     * This function is called when the fourth button is pressed and it displays a console log in the broswer
     * this is very important for bugging and fixing errors in your code
     * @param {*} message 
     */
    consoleLogMessage(message){
        console.log(message)
    }



  render() {

    // When ever you create a state variable or functions you need to gain access to them in the render function 
    // in order to be able to use them. This is how you gain access to them.
    // Recall we created the state variables on lines 16-17.
    // And we created this functions on lines 28-67.
    // And we attached these functions to the component on lines 21-24
    let { count, bool } = this.state
    let { displayAlert, increaseCount, toggle, consoleLogMessage } = this

    return (
      <View style={styles.container}> 


        <ButtonComponent
            text = { 'Display Alert' }
            action = { displayAlert }
            buttonStyle = { [styles.buttonDimensions, styles.alertButton] }
            textStyle = { [styles.textStyle] }
        />

        <ButtonComponentdd
            text = { `${ counter } Increase Count` }
            action = { increaseCount }
            buttonStyle = { [styles.buttonDimensions, styles.increaseCountButton] }
            textStyle = { [styles.textStyle] }
        />

        <ButtonComponent
            text = { bool === true ? 'ON' : 'OFF' } 
            action = { toggle }
            buttonStyle = { [styles.buttonDimensions, styles.toggleButton] }
            textStyle = { [styles.textStyle] }
        />

        <ButtonComponent
            text = { 'Console' }
            action = { consoleLogMessage }
            buttonStyle = { [styles.buttonDimensions, styles.nextPageButton] }
            textStyle = { [styles.textStyle] }
        />


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
  buttonDimensions: {
    height:52,
    width:"90%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    marginTop:"0%"
  },
  textStyle:{
    color:"#fff",
    textAlign:"center",
    fontSize:16,
  },
  alertButton: {
    backgroundColor:"red",
  },
  increaseCountButton: {
    backgroundColor:"green"
  },
  toggleButton: {
    backgroundColor:"blue"
  },
  nextPageButton: {
    backgroundColor:"orange"
  }
});
