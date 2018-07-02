import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            counterred: 0,
            counterblue: 0
        };

        this.increaseCount2 = this.increaseCount2.bind(this);
        this.increaseCount3 = this.increaseCount3.bind(this);

        }

    // increaseCount2(){
    //         let { counterred } = this.state
    //         this.setState({counterred: counterred + 2 })
    // }
    //
    // increaseCount3(){
    //         let { counterred } = this.state
    //         this.setState({counterred: counterred + 3 })
    // }
    //
    // increaseCount2blue(){
    //         let { counterblue } = this.state
    //         this.setState({counterblue: counterblue + 2 })
    // }
    // increaseCount3blue(){
    //         let { counterblue } = this.state
    //         this.setState({counterblue: counterblue + 3 })
    // }


    increaseCount2(team){
            let { counterblue, counterred } = this.state
            if (team === 'blue')
                this.setState({counterblue: counterblue + 2 })
            else
                this.setState({counterred: counterred + 2 })
    }


    increaseCount3(team){
            let { counterblue, counterred } = this.state
            if (team === 'blue')
                this.setState({counterblue: counterblue + 3 })
            else
                this.setState({counterred: counterred + 3 })
    }



    render() {
        let { counterred, counterblue } = this.state

        return (

                <View style={styles.container} >

                    <View>
                        <Text style={styles.name}>
                          Red Team
                        </Text>
                        <Text style={styles.score}>
                            Score: {counterred}
                        </Text>

                        <TouchableOpacity
                        style={[styles.buttonDimensions, styles.increaseCountButtonred]}
                        onPress={ ()=> this.increaseCount2("red") }
                        >
                          <Text style={[styles.textStyle]}> 2 pointer </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.buttonDimensions, styles.increaseCountButtonred]}
                        onPress={ ()=> this.increaseCount3("red")}
                        >
                          <Text style={[styles.textStyle]}> 3 pointer </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.name}>
                          Blue Team
                        </Text>
                        <Text style={styles.score}>
                            Score: {counterblue}
                        </Text>

                        <TouchableOpacity
                        style={[styles.buttonDimensions, styles.increaseCountButtonblue]}
                        onPress={ ()=> this.increaseCount2("blue") }
                        >
                          <Text style={[styles.textStyle]}> 2 pointer </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.buttonDimensions, styles.increaseCountButtonblue]}
                        onPress={ ()=> this.increaseCount3("blue")}
                        >
                          <Text style={[styles.textStyle]}> 3 pointer </Text>
                        </TouchableOpacity>
                    </View>
                </View>

    );
  }
}

const styles = StyleSheet.create({

    name: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      },

  score: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: "stretch",
    flexDirection: 'row'
  },

  buttonDimensions: {
    height:52,
    width:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    marginTop:"1%",
  },

  textStyle:{
    color:"#fff",
    textAlign:"center",
    fontSize:16,
  },

  increaseCountButtonred: {
    backgroundColor:"red"
  },

  increaseCountButtonblue: {
    backgroundColor:"blue"
  },
});
