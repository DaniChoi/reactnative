import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeNameAction } from "../actions/profile_action"



class Profile extends React.Component {

    static navigationOptions = {
        title: 'Profile',
    };

    constructor(props) {
        super(props);
        this.state = {
          Name: '',
          Email: ''
        }
      }

  render() {
    const { navigate } = this.props.navigation;

    let { mName, mEmail } = this.props;
    let { Name, Email } = this.state

    return (
      <View style={styles.container}>


        <Text> { ` Name: ${mName} ` } </Text>
        <Text> { ` Email: ${mEmail} ` } </Text>

        <TouchableOpacity
            onPress={ ()=> navigate( "ChangeProfile" ) }
        >
            <Text> Edit </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


function mapStateToProps(state) {
    // state.profile is defined in the profile reducer
    // allow us to get access to mName, mEmail in the profile reducer
    let { mName, mEmail } = state.profile;
    return {
        mName,
        mEmail
    }
  }


export default connect(mapStateToProps)(Profile);
    // goes together with above function mapStateToProps



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
