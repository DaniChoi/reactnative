import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
        // This is how we access the counter variable that we created on line 13
        let { counter } = this.state
        // Notice this is how we are updating the value of the counter that we created on line 13
        // We are saying take the current value of counter and then add 1 to it.
        this.setState({counter: counter + 1 })
    }

    /**
     * This function is called when the third button is pressed and it toggles the text of the button from OFF to ON
     */
    toggle(){
        // This is how we access the bool variable that we created on line 12
        let { bool } = this.state
        // Here we are updating the value of the boolean variable that we created on line 16
        // We are assigning the new value of bool as the opposite of the previous value
        // So if bool was true before now its false, if bool was false before now it is true
        // this is possible due to the exclaimation symbol before the variable on like 53
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
    // Recall we created the state variables on lines 12-13.
    // And we created this functions on lines 24-63.
    // And we attached these functions to the component on lines 17-20
    let { counter, bool } = this.state
    let { displayAlert, increaseCount, toggle, consoleLogMessage } = this

    return (
      <View style={styles.container}>

            {/* Button 1 which calls the displayAlert function. */}
            <TouchableOpacity
            style={[styles.buttonDimensions, styles.alertButton]}
            onPress={ ()=> this.displayAlert() }
            >
              <Text style={[styles.textStyle]}> Display Alert </Text>
            </TouchableOpacity>



            {/*
                Button 2 which calls the increaseCount function.
                Pay Close attention to the syntax of line 103
                notice how we are able to display the counter variable
            */}
            <TouchableOpacity
            style={[styles.buttonDimensions, styles.increaseCountButton]}
            onPress={ ()=> this.increaseCount() }
            >
              <Text style={[styles.textStyle]}> { `${counter} Increase Count` }  </Text>
            </TouchableOpacity>




            {/* Button 3 which calls the toggle function. */}
            <TouchableOpacity
            style={[styles.buttonDimensions, styles.toggleButton]}
            onPress={ ()=> this.toggle() }
            >
              <Text style={[styles.textStyle]}>  { bool === true ? 'On' : 'Off' } </Text>
            </TouchableOpacity>



            {/* Button 4 which calls the consoleLogMessage function. */}
            <TouchableOpacity
            style={[styles.buttonDimensions, styles.nextPageButton]}
            onPress={ ()=> this.consoleLogMessage("Hello World") }
            >
              <Text style={[styles.textStyle]}>  Next Page </Text>
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
    justifyContent: 'center',
    alignSelf:"stretch"
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
