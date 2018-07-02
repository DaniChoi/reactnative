import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListExample extends React.Component {

    render() {

        // The variables below are passed to this component in the listExample.js file line 39
        let { firstName, lastName, gender, position } = this.props

        return (
            <View style={ [ styles.container, position % 2 === 1 ? styles.darkItem : null ] }>

                <Text style={ [ styles.textSpacing ] } > { firstName } </Text>
                <Text style={ [ styles.textSpacing ] } > { lastName } </Text>
                <Text style={ [ styles.textSpacing ] } > { gender } </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  darkItem:{
    backgroundColor: '#cccccc',
  },
  textSpacing:{
      width:"30%"
  }
});
