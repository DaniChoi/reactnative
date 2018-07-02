import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {


    render() {

        // The variables below are passed to this component in the listExample.js file line 39
        let { title, description, image, position, action } = this.props;


        return (
            <TouchableOpacity
              style={styles.button}
              onPress={ ()=> action()  }
            >
                <View style={ [ styles.container, position % 2 === 1 ? null : styles.darkItem ] }>

                        <View style={{ flex: 1 }}>
                            <Image
                                resizeMode='contain'
                                style={[{ width: 124, height: 70}]}
                                source={{uri: image }}
                            />
                        </View>
                        <View style={{flex:2}}>

                            <Text style={ [ styles.title ] } > { title } </Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{ marginBottom: 5 }}> { description } </Text>

                        </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkItem:{
    backgroundColor: '#cccccc',
  },
  title:{
      fontSize: 20,
      fontWeight: "bold",
      margin: 5
  },
  button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  },

  inputStyle:{
    height: 40,
    width:"100%",
    backgroundColor:"#aaaaaa",
    color:'#fff'
  }
});
