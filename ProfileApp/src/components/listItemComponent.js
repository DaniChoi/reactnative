import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { updateStyleDimensions } from "../actions/dimensions_action"
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


class ListItem extends React.Component {


    render() {

        // The variables below are passed to this component in the listExample.js file line 39
        let { title, description, image, position, action } = this.props;
        let { mWidth, mHeight } = this.props;
        return (
            <TouchableOpacity
              style={ mHeight < 668 ? styles.button : styles.buttonBig }
              onPress={ ()=> action()  }
            >
                <View style={ styles.container }>

                        <View>
                            <Image
                                resizeMode='contain'
                                style={ mHeight < 668 ? styles.image : styles.imageBig}
                                source={{uri: image }}
                                resizeMode="stretch"
                            />
                        </View>
                        <View style= {{width: '80%', height: '100%'}}>
                            <View style = { styles.titleline} >
                            <Text style={ mHeight < 668 ? styles.title : styles.titleBig } > { title } </Text>
                            </View>
                            <Text style={ mHeight < 668 ? styles.description : styles.descriptionBig }> { description } </Text>

                        </View>
                </View>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state) {
    console.log("HERE", state.dimensions)

    // state.profile is defined in the profile reducer
    let { mWidth, mHeight } = state.dimensions;
    return {
        mWidth,
        mHeight
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ updateStyleDimensions }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
    // goes together with above function mapStateToProps



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },

  titleline: {
      borderBottomWidth: 2,
      borderBottomColor: '#adb5bd',
      alignSelf:'flex-start',
      width: "85%"
  },

  title:{
      fontSize: 20,
      fontWeight: "bold",
      margin: 5,
      borderBottomWidth: 3,
      borderBottomColor: 'black'
  },

  titleBig:{
      fontSize: 40,
      fontWeight: "bold",
      margin: 10,
      borderBottomWidth: 6,
      borderBottomColor: 'black'
  },

  image:{
      height: 60,
      width: 60,
      borderWidth: 1,
      borderRadius: 30,
      marginRight: 20
  },

  imageBig:{
      height: 150,
      width: 150,
      borderWidth: 1,
      borderRadius: 75,
      marginRight: 50,
      margin:10
  },


  description:{
      fontSize: 20,
      margin: 5
  },

  descriptionBig:{
      fontSize: 40,
      margin: 10
  },

  button: {
  alignSelf: 'center',
  backgroundColor: 'white',
  borderRadius:50,
  borderColor:'#868e96',
  borderWidth:2,
  width:"90%",
  height: 80,
  margin: 3
  },

  buttonBig: {
  alignSelf: 'center',
  backgroundColor: 'white',
  borderRadius:75,
  borderColor:'#868e96',
  borderWidth:4,
  width:"90%",
  height: 170,
  margin: 10,
  },
});
