import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeNameAction, updateFriendList } from "../actions/profile_action"




class AddFriend extends React.Component {

static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
          AddName: '',
          AddEmail: '',
          AddOccupation: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this)

      }

      handleUpdate = (AddName, AddEmail, AddOccupation) => {
         let { updateFriendList, mFriendList } = this.props;
         const { navigate } = this.props.navigation;


         updateFriendList( AddName, AddOccupation, mFriendList )
         navigate( "Profile" )
      }
        // Put conditionals out of render
        // if (Name !== '' || Email !== '' || Occupation !== '' )
        // {changeNameAction( Name === '' ? mName : Name, Email === '' ? mEmail : Email, Occupation === '' ? mOccupation : Occupation )
        // navigate( "Profile" )
        // }
        //
        // else
        // navigate( "Profile" )

      // changeNameAction( Name === '' ? mName : Name, Email === '' ? mEmail : Email, Occupation === '' ? mOccupation : Occupation )
      // navigate( "Profile" )

  render() {
    const { navigate } = this.props.navigation;

    // let { mAddName, mAddEmail, mAddOccupation } = this.props;
    let { AddName, AddEmail, AddOccupation } = this.state

    return (
      <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigate( "Profile" )}
                style = {styles.menu}
            >
                <Image
                    style={styles.backIcon}
                    resizeMode="contain"
                    source={require('./back-icon.png')}
                />
            </TouchableOpacity>

            <TextInput
              style={styles.contents}
              placeholder="Name"
              onChangeText={(text) => this.setState({AddName:text})}
              clearButtonMode="always"
              autoCorrect={false}
            />

            <TextInput
              style={styles.contents}
              placeholder="Occupation"
              onChangeText={(text) => this.setState({AddOccupation:text})}
              clearButtonMode="always"
              autoCorrect={false}
            />

            <TextInput
              style={styles.contents}
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={(text) => this.setState({AddEmail:text})}
              clearButtonMode="always"
              autoCorrect={false}
             />


            <TouchableOpacity
                style={styles.buttonDimensions}
                onPress={ ()=>
                    this.handleUpdate( AddName, AddEmail, AddOccupation ) }
            >
                <Text style={styles.textStyle}> Add Friend </Text>
            </TouchableOpacity>

          </View>
    );
  }
}


function mapStateToProps(state) {
    // state.profile is defined in the profile reducer
    let { mFriendList } = state.profile;
    return {
        mFriendList
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ updateFriendList }, dispatch);
  }


  export default connect(mapStateToProps, mapDispatchToProps )(AddFriend);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },



    menu: {
        marginTop: "6%",
        marginLeft: '3%',
        alignSelf: 'flex-start',
        width: '10%',
        height: '10%',
    },

    backIcon :{
        width: '100%',
        height: '100%'
    },

    buttonDimensions: {
      height:52,
      width:"50%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:4,
      borderColor:'black',
      borderWidth:2,
      marginTop:100,
      backgroundColor:"white"
    },

    textStyle:{
      color:"black",
      textAlign:"center",
      fontSize: 20,
      fontWeight: "bold",
    },

    contents: {
        height: 52,
        width:"80%",
        margin:"5%",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        borderBottomWidth: 3,
        color: 'black',
        borderBottomColor: '#868e96',
    }

});
