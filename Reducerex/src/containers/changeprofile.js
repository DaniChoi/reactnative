import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeNameAction } from "../actions/profile_action"
import { changeEmailAction } from "../actions/profile_action"


class Profile extends React.Component {

    static navigationOptions = {
        title: 'ChangeProfile',
    };


    constructor(props) {
        super(props);
        this.state = {
          Name: '',
          Email: ''
        }
      }

      handleUpdate = (Name, Email) => {
         let { mName, mEmail, changeNameAction } = this.props;

         changeNameAction( Name, Email )
         const { navigate } = this.props.navigation;
         navigate( "Profile" )
      }

  render() {
    const { navigate } = this.props.navigation;

    let { mName, mEmail, changeNameAction } = this.props;
    let { Name, Email } = this.state

    return (
      <View style={styles.container}>

        <TextInput
          style={{height: 52, width:"100%", margin:"5%"}}
          placeholder="Name"
          onChangeText={(text) => this.setState({Name:text})}
        />

        <TextInput
          style={{height: 52, width:"100%", margin:"5%"}}
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={(text) => this.setState({Email:text})}
        />

        <TouchableOpacity
            onPress={ ()=> this.handleUpdate( Name, Email ) }
        >
            <Text> Save </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={ ()=> navigate( "Profile" ) }
        >
            <Text> Cancel </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


function mapStateToProps(state) {
    // state.prices is defined in the price reducer
    let { mName, mEmail } = state.profile;
    return {
        mName,
        mEmail
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ changeNameAction }, dispatch);
  }


  export default connect(mapStateToProps, mapDispatchToProps )(Profile);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
