import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// This is a custom component that we created in the component folder.
// This component is very important to create different layouts for the items in a list
import ListItem from '../components/listItemComponent'
import { findIndex } from 'rxjs/operator/findIndex';

export default class ListExample extends React.Component {

    static navigationOptions = {
        // Here we define the name of the screen
        // This name is displayed at the top of the phone
        // When the listexample screen is displayed
        title: 'ListExample',
    };


    render() {

        // Here we create some dummy data to display in our list
        let listData = [
            {key:"1", firstName:"Katy", lastName:" Parker", gender:"Female"},
            {key:"2", firstName:"Adam", lastName:"Lake", gender:"Male"},
            {key:"3", firstName:"Tiffany", lastName:"Sanders", gender:"Female"},
            {key:"4", firstName:"Chris", lastName:"Bonds", gender:"Male"},
            {key:"5", firstName:"Stacy", lastName:"Williams", gender:"Female"},
            {key:"6", firstName:"Jimmy", lastName:"Jones", gender:"Male"}
        ]

        return (
            <View style={ [ styles.container ] }>

                <FlatList
                    style={ [ styles.listStyle ] }
                    data={listData}
                    // below we are going through the items in the dummydata we created on line 22 and then appending a new row to our list each time
                    // Takes an item from 'data' and renders it into the list
                    renderItem={
                        ({item, index}) =>  <ListItem firstName={item.firstName} lastName={item.lastName} gender={item.gender} position={index} />
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle:{
    alignSelf:"stretch"
  }
});
