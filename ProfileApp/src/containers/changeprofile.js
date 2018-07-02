import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeNameAction } from "../actions/profile_action"



class ChangeProfile extends React.Component {

static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
          Name: props.mName,
          Email: props.mEmail,
          Occupation:props.mOccupation
        }
      }

      handleUpdate = (Name, Email, Occupation) => {
         let { mName, mEmail, mOccupation, changeNameAction } = this.props;
         const { navigate } = this.props.navigation;


         changeNameAction( Name, Email, Occupation )
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

    let { mName, mEmail, mOccupation, changeNameAction } = this.props;
    let { Name, Email, Occupation } = this.state

    return (
      <View style={styles.container}>
            <Image
              Position='absolute'
              ResizeMode='contain'
              style={styles.backgroundImage}
              source={require('./ProfileDani.png')}
              blurRadius={5}
            />

            <View style={styles.body}>

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

            <Image
              ResizeMode='center'
              style={styles.profileImage}
              source={require('./ProfileDani.png')}
              borderRadius={40}
            />

            <TextInput
              defaultValue= { ` ${mName} ` }
              style={styles.title}
              placeholder="Name"
              onChangeText={(text) => this.setState({Name:text})}
              clearButtonMode="always"
              autoCorrect={false}
              // value={ Name === '' ? mName : Name }
            />

            </View>


            <TextInput
              defaultValue= { ` ${mOccupation} ` }
              style={styles.email}
              placeholder="Occupation"
              onChangeText={(text) => this.setState({Occupation:text})}
              clearButtonMode="always"
              autoCorrect={false}
            />

            <TextInput
              style={styles.email}
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={(text) => this.setState({Email:text})}
              clearButtonMode="always"
              autoCorrect={false}
            />

            <TouchableOpacity
                style={styles.buttonDimensions}
                onPress={ ()=>
                    this.handleUpdate( Name, Email, Occupation ) }
            >
                <Text style={styles.textStyle}> Save </Text>
            </TouchableOpacity>

          </View>
    );
  }
}


function mapStateToProps(state) {
    // state.prices is defined in the price reducer
    let { mName, mEmail, mOccupation } = state.profile;
    return {
        mName,
        mEmail,
        mOccupation
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ changeNameAction }, dispatch);
  }


  export default connect(mapStateToProps, mapDispatchToProps )(ChangeProfile);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    backgroundImage: {
        width: '100%',
        height: '50%'
    },

    body: {
        position:"absolute",
        width:"100%",
        height:"50%",
        justifyContent:"center"
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

    profileImage: {
        width: '70%',
        height: '50%',
        alignSelf:"center"
    },

    buttonDimensions: {
      height:52,
      width:"50%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:4,
      borderColor:'black',
      borderWidth:2,
      marginTop:30,
      backgroundColor:"white"
    },

    textStyle:{
      color:"black",
      textAlign:"center",
      fontSize: 20,
      fontWeight: "bold",
    },

    title: {
        height: '10%',
        width:"70%",
        margin:"5%",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: '5%',
        color: 'white',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        alignSelf:'center',
        marginBottom: 60
    },
    email: {
        height: '5%',
        width:"80%",
        margin:"5%",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: '10%',
        borderBottomWidth: 3,
        alignSelf:'center',
        color: 'black',
        borderBottomColor: '#868e96',
    }

});
