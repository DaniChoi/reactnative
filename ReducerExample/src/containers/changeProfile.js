import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeFirstNameAction } from "../actions/profile_action"


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: ''
        }
      }

  render() {

    let { mFirstName, mLastName, changeFirstNameAction } = this.props;
    let { firstName, lastName } = this.state

    return (
      <View style={styles.container}>

        <TextInput
          style={{height: 52, width:"100%", margin:"5%"}}
          placeholder="FirstName"
          onChangeText={(text) => this.setState({firstName:text})}
        />

        <TextInput
          style={{height: 52, width:"100%", margin:"5%"}}
          placeholder="LastName"
        />


        <Text> { ` FirstName: ${mFirstName} ` } </Text>
        <Text> { ` LastName: ${mLastName} ` } </Text>

        <TouchableOpacity 
            onPress={ ()=> changeFirstNameAction( firstName ) }
        >
            <Text> Submit </Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}


function mapStateToProps(state) {
    // state.prices is defined in the price reducer
    let { mFirstName, mLastName } = state.profile;
    return {
        mFirstName,
        mLastName
    }
  }
  
  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ changeFirstNameAction  }, dispatch);
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
