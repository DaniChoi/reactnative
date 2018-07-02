import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class Test extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };



    render() {
        let title = this.props.navigation.state.params.title
        let description = this.props.navigation.state.params.description
        let image = this.props.navigation.state.params.image

        return (
            <View style={ [ styles.container ] } >
                <Image
                    resizeMode='contain'
                    style={[{width: 386, height: 220}]}
                    source={{uri: image }}
                />
                <Text style={[ styles.title]}> { title } </Text>
                <Text style={[ styles.description]}> { description } </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputStyle:{
    height: 40,
    width:"100%",
    backgroundColor:"#aaaaaa",
    color:'#fff'
  },
  title:{
      fontSize: 20,
      fontWeight: "bold",
      margin: 5
  },
  description:{
      textAlign: "justify"
  }
});
