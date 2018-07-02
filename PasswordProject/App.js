import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordText: '',
        };
        this.handlePassword = this.handlePassword.bind(this)
    }


    handlePassword = (text) => {
        this.setState({ password: text })
        let { password } = this.state;

       // console.log(" text", text)
       // console.log("before password", password)

        if ( text.length < 1 ) {
            this.setState({ passwordText:null })
        }
        else if (  !/[A-Z]/.test(text) ) {
            this.setState({ passwordText:"Please include a capital letter" })
        }
        else if ( !/\d/.test(text) ) {
            this.setState({ passwordText:"Please include a number" })
        }
        else if ( !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text)) {
            this.setState({ passwordText:"Please include a special character" })
        }
        // The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
        else if ( text.length < 8 ) {
            this.setState({ passwordText:"Password too short" })
        }
        else {
            this.setState({ passwordText:null })
        }

         // console.log("after password", password)
    }



    handleLength() {
      const { password } = this.state;
      return (
          this.state.password.length > 7
      );
    }

    handleUppercase() {
      const { password } = this.state;
      return (
          /[A-Z]/.test(this.state.password)
      );
    }

    handleNumber() {
      const { password } = this.state;
      return (
          /\d/.test(this.state.password)
      );
    }

    handleSpecial() {
      const { password } = this.state;
      return (
          /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.state.password)
      );
    }

  render() {
      const lengthCheck = this.handleLength();
      const uppercaseCheck = this.handleUppercase();
      const numberCheck = this.handleNumber();
      const specialCheck = this.handleSpecial();
      let { handlePassword, handleUppercase, handleNumber, handleSpecial, handleLength } = this
    return (
      <View style={styles.container}>
          <TextInput
              style={ [ styles.inputStyle ] }
              // secureTextEntry={true}
              keyboardType={'default'}
              placeholder="Password"
              placeholderTextColor={'#888888'}
              onChangeText = { (text)=> handlePassword(text)}
          />

          <Text style={{color:'red'}}> {this.state.passwordText} </Text>

          <View style={{flexDirection: 'row'}}>
                  <View>
                      <CheckBox
                        title='Upper and Lowercase'
                        checked={uppercaseCheck}
                        containerStyle={{width:180}}
                        textStyle={{fontSize:12}}
                      />
                      <CheckBox
                        title='Number'
                        checked={numberCheck}
                        containerStyle={{width:180}}
                        textStyle={{fontSize:12}}
                      />
                  </View>
                  <View>
                      <CheckBox
                        title='Special Character'
                        checked={specialCheck}
                        containerStyle={{width:180}}
                        textStyle={{fontSize:12}}
                      />
                      <CheckBox
                        title='8 Character min.'
                        checked={lengthCheck}
                        containerStyle={{width:180}}
                        textStyle={{fontSize:12}}
                      />
                   </View>
            </View>



            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{color:"white"}}> Sign Up </Text>
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
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#282861',
    padding: 10,
    width: '70%',
    margin: 30

  },

  inputStyle:{
    height: 50,
    width: 350,
    backgroundColor:"#cccccc",
    color:'#fff',
    marginBottom: 10,
    borderRadius:10,
  }
});
