import React from 'react';
import { StyleSheet, Dimensions, PixelRatio, ScrollView, Text, View, FlatList, Image, TextInput, SectionList ,TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeNameAction } from "../actions/profile_action"
import { updateStyleDimensions } from "../actions/dimensions_action"

import ListItem from '../components/listItemComponent';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';



class Profile extends React.Component {


    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
          Name: '',
          Email: '',
          Occupation:'',
          AddName:'',
          AddEmail:'',
          AddOccupation:'',
          friendList:props.mFriendList,
          bool:false,
          Width:'',
          Height:'',
        }
        this.updateList = this.updateList.bind(this)
      }


      updateList(){
          let { bool } = this.state
          this.setState({bool:!bool})
      }

    componentDidMount(){

        console.log("RATIO", PixelRatio.get())


        console.log("running")

        const { width, height } = Dimensions.get('window');
        let { updateStyleDimensions } = this.props;

        this.setState({Width: width})
        this.setState({Height: height})
        updateStyleDimensions( width, height )
    }

  render() {
    const { navigate } = this.props.navigation;
    // console.log("navigate",navigate)
    // console.log("other", this.props.navigation.state.params)
    // let { routeName } = this.props.navigation.state;
    // console.log(routeName)
    let { mName, mEmail, mOccupation, mFriendList, mWidth, mHeight } = this.props;
    let { Name, Email, Occupation, AddName, AddEmail, AddOccupation, Width, Height, friendList } = this.state
    let { updateList } = this
    // let { friendList } = this.state;



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

            <Menu style={styles.menu}>
                  <MenuTrigger>
                      <Image
                          style={styles.menuIcon}
                          resizeMode="contain"
                          source={require('./chats-icon.png')}>
                      </Image>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                        onSelect={() => navigate( "ChangeProfile" )}
                        text='Edit Profile'
                    />
                    <MenuOption onSelect={() => navigate( "AddFriend" )} >
                      <Text>Add Friends</Text>
                    </MenuOption>
                  </MenuOptions>
            </Menu>

            <Image
              ResizeMode='center'
              style={styles.profileImage}
              source={require('./ProfileDani.png')}
              borderRadius={40}
            />

            <View style={styles.texts}>
                <Text style={ this.state.Height < 668 ? styles.title : styles.titleBig}> { ` ${mName} ` } </Text>
                <Text style={ this.state.Height < 668 ? styles.occupation : styles.occupationBig}> { ` ${mOccupation} ` } </Text>
            </View>


            </View>

            <View style={{width: '100%', height: '6%', flexDirection: 'row'}}>
                <View style={styles.friendtitle}>
                    <Text style={this.state.Height < 668 ? styles.friends : styles.friendsBig}> Friends </Text>
                </View>

                <TouchableOpacity
                    onPress={ ()=> updateList() }
                    style = {styles.refresh}
                >
                        <Image
                            style={styles.refreshIcon}
                            resizeMode="contain"
                            source={require('./refresh-icon.png')}>
                        </Image>
                </TouchableOpacity>
            </View>

            <FlatList
                style={ [ styles.listStyle ] }
                data={ friendList }
                renderItem={
                    ({item, index}) =>
                    <ListItem
                        title={item.name}
                        description={item.occupation}
                        position={index}
                        image={item.image}
                    />
                }
            />

      </View>

    );
  }
}


function mapStateToProps(state) {
    console.log("HERE", state.dimensions)

    // state.profile is defined in the profile reducer
    // allow us to get access to mName, mEmail in the profile reducer
    let { mName, mEmail, mOccupation, mFriendList } = state.profile;
    let { mWidth, mHeight } = state.dimensions;
    return {
        mName,
        mEmail,
        mOccupation,
        mFriendList,
        mWidth,
        mHeight
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ updateStyleDimensions }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
    // goes together with above function mapStateToProps



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
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
     marginTop: '8%',
     marginRight:'3%',
     alignSelf: 'flex-end',
     width: '10%',
     height: '10%',
 },

 menuIcon :{
     width: '100%',
     height: '100%'
 },

  title:{
      fontSize: 30,
      fontWeight: "bold",
      marginTop: "5%",
      marginBottom: "2%",
      color: 'white',
      alignSelf: 'center'

  },

  titleBig:{
      fontSize: 70,
      fontWeight: "bold",
      marginTop: "2%",
      marginBottom: "2%",
      color: 'white',
      alignSelf: 'center'

  },

  profileImage: {
      width: '70%',
      height: '50%',
      alignSelf:"center"
  },

  texts: {
      marginBottom: '5%'
  },

  occupation:{
      fontSize: 20,
      fontWeight: "bold",
      color: 'white',
      alignSelf: 'center'
  },

  occupationBig:{
      fontSize: 50,
      fontWeight: "bold",
      color: 'white',
      alignSelf: 'center'
  },

  body2 : {
      flexDirection: 'row',
      width:'100%',
      height:'8%',
      backgroundColor: 'tomato'
  },

  friendtitle: {
      borderBottomWidth: 3,
      borderBottomColor: '#adb5bd',
      alignSelf:'flex-start',
  },

  friends:{
      fontSize: 30,
      fontWeight: "bold",
      alignSelf: 'flex-start',
  },

  friendsBig:{
      fontSize: 60,
      fontWeight: "bold",
      alignSelf: 'flex-start'
  },

  refresh: {
      alignSelf: 'center',
      width: '10%',
      height: '90%',
  },

  refreshIcon:{
      width: '100%',
      height: '100%'
  },

  listStyle:{
    alignSelf:"stretch",
    flex:1
  },
});
