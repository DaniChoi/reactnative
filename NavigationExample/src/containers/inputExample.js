import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class InputExample extends React.Component {

    static navigationOptions = {
        title: 'InputExample',
    };

    constructor(props) {
        super(props);
        this.state = { email:'' };
        this.onChange = this.onChange.bind(this)
    }

    /**
     * This function will be called every time the text in the input field changes
     * This function will also change the text of line 44 to say whether the number is even or odd
     */
    onChange(text){
        if ( parseInt(text) % 2 === 0 )
            this.setState({parity:'even'})
        else if ( parseInt(text) % 2 === 1 )
            this.setState({parity:'odd'})
        else
            this.setState({parity:''})
    }

    render() {
        let { onChange } = this
        let { parity } = this.state

        return (
            <View style={ [ styles.container ] } >

                <TextInput
                    style={ [ styles.inputStyle ] }
                    keyboardType={'numeric'}
                    placeholder="Type here!"
                    onChangeText={ (text) => onChange(text) }
                    placeholderTextColor={'#888888'}
                />

                <Text> { parity } </Text>

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
  }
});
