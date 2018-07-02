import React from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/buttonComponent'


export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            bool: false
        };
    }

    handleEmail = (text) => {
       this.setState({ email: text })
    }

    handlePassword = (text) => {
       this.setState({ password: text })
    }

    canBeSubmitted() {
      const { email, password } = this.state;
      return (
          this.state.email === "Hello@gmail.com" &&
          this.state.password === "world123"
      );
    }

    render() {
        const { navigate } = this.props.navigation;
        const isEnabled = this.canBeSubmitted();

        return (
            <View  style={ [ styles.container ] }>
                <View>
                    <Text style={ [ styles.title ] }>
                        AwesomeApp
                    </Text>

                    <Text style={ [ styles.name ] }>
                        Email
                    </Text>
                    <TextInput
                        style={ [ styles.inputStyle ] }
                        keyboardType={'email-address'}
                        placeholder="Email"
                        placeholderTextColor={'#888888'}
                        onChangeText = {this.handleEmail}
                    />
                    <Text style={ [ styles.name ] }>
                        Password
                    </Text>
                    <TextInput
                        style={ [ styles.inputStyle ] }
                        secureTextEntry={true}
                        keyboardType={'default'}
                        placeholder="Password"
                        placeholderTextColor={'#888888'}
                        onChangeText = {this.handlePassword}
                    />

                    <TouchableOpacity
                                   style = {styles.submitButton}
                                   disabled = {!isEnabled}
                                   onPress = {
                                       ()=> navigate("ListExample")
                                   }>
                                   <Text style = {styles.submitButtonText}> Sign In </Text>
                    </TouchableOpacity>
                </View>
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

  title: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        },

  name: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        fontWeight: 'bold',
        },


  listExampleButton:{
      backgroundColor:"#cccccc",
      marginTop: 30,
      width: 200,
  },

  inputStyle:{
    height: 40,
    width: 350,
    backgroundColor:"#cccccc",
    color:'#fff',
    marginBottom: 10,
  },

  submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 50,
       height: 40,
       width: 200,
       justifyContent:"center",
       alignSelf:"center"
    },
    submitButtonText:{
       color: 'white',
       justifyContent:"center",
       alignSelf:"center"
   }
});
