import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default class Test extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
        this.state = {
             bool:true
     };
    }

    render() {
        let title = this.props.navigation.state.params.title
        let id = this.props.navigation.state.params.id
        let height = this.props.navigation.state.params.height
        let weight = this.props.navigation.state.params.weight
        let type = this.props.navigation.state.params.type
        let image = this.props.navigation.state.params.image
        let image_shiny = this.props.navigation.state.params.image_shiny
        let {bool} = this.state
        return (
            <View style={ [ styles.container ] } >
                <View style={ [ styles.body ] } >
                <View style= {{width: '50%', height:"50%"}}>
                <Image
                    resizeMode='contain'
                    style={[{width: '100%', height: '100%'}]}
                    source={{uri: bool === true ? image : image_shiny }}
                />
                {/* <Image
                    resizeMode='contain'
                    style={[{width: 386, height: 220}]}
                    source={{uri: image_shiny }}
                /> */}

                <Button
                  onPress={() => {
                    this.setState({bool:!bool});
                  }}
                  title="Normal/Shiny"
                />
                </View>
                <View style= {{width: '50%', height: '30%', marginTop: '10%' }}>
                <Text style={[ styles.title]}> Name: { title } </Text>
                <Text style={[ styles.title]}> ID: { id } </Text>
                <Text style={[ styles.title]}> Height: { height } </Text>
                <Text style={[ styles.title]}> Weight: { weight } </Text>
                <Text style={[ styles.title]}> Type: { type } </Text>
                </View>
            </View>
                <Text style={[ styles.title]}>
                    Lorem ipsum dolor sit amet
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
    },

    body: {
        flexDirection: 'row',
    },

  title:{
      fontSize: 20,
      fontWeight: "bold",
      margin: 5,
      alignSelf: 'flex-start'
  }
});
