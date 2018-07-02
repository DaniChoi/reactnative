import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import ButtonComponent from '../components/buttonComponent'
import ListItem from '../components/listItemComponent';
import fetch from 'node-fetch';

import { fetchPokemons, fetchProductsError } from "../actions/list_action"

import Loader from '../components/loader';
import ReduxThunk from 'redux-thunk';


class ListExample extends React.Component {

    static navigationOptions = {
        title: 'Contents',
        error: false,
    };

    constructor(props) {
        super(props);
        this.state = {
             filteredList:[], //made a new filtered array
             PokemonList: [],
     };
             this.filterList = this.filterList.bind(this)
    }


    filterList(text){
        const { mPokemonList } = this.props;
        let {PokemonList, filteredList} = this.state
        filtered = mPokemonList.filter(function(el) {
        // console.log("NAME", el.name)
        // console.log("TEXT", text)
        return el.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        })
        this.setState({filteredList:filtered})
        // setTimeout(function(){
        // console.log("LENGTH", that.state.filteredList.length)
        // }, 100)

    }

    componentDidMount(){

        // fetch('http://localhost:3000/')
        //     .then((res) => {
        //         // console.log("lol", res.json())
        //         return res.json()
        //     })
        //     .then((herpderp)=>{
        //         console.log("dani",herpderp)
        //     })
        //     .catch((err) => {
        //         console.log("ERROR", err)
        //     })



        let { fetchPokemons, mPokemonList } = this.props;
        let { PokemonList, error } = this.state;
        fetchPokemons();
        this.setState({PokemonList: mPokemonList})
        console.log("LENGTH", mPokemonList.length)
        // this.setState({isShowingText: mPokemonList.length === 0 ? true : false})
        // console.log("mPOKEMONLIST", mPokemonList)
    }

    componentDidCatch(error, info) {
      this.setState({
        error: true
      });
    }

    render() {

        const { navigate } = this.props.navigation;
        let { PokemonList, filteredList } = this.state;
        const { mPokemonList, isLoading, isShowing } = this.props;

        let { filterList } = this
        // let isShowing = mPokemonList.length === 0 ? true : false;
        let display = isShowing ? "An error occurred" : ' ';
        console.log("IsLoading", isLoading)

        if (this.state.error) return (<h1>에러발생!</h1>);

        return (
            <View style={ [ styles.container ] }>

                {/* {isLoading && (
                    <Loader />
                )} */}

                 <Loader
                    loading={isLoading} />

                <Text>{display}</Text>
                <TextInput
                    style={ [ styles.inputStyle ] }
                    placeholder="Search"
                    onChangeText={ (text) => filterList(text) }
                    placeholderTextColor={'#888888'}

                />
                <FlatList
                    style={ [ styles.listStyle ] }
                    data={ filteredList.length === 0 ? mPokemonList : filteredList }
                    renderItem={
                        ({item, index}) =>
                        <ListItem
                            title={item.name}
                            type={item.type}
                            image={item.image}
                            position={index}
                            action={ ()=> navigate("Test", {title:item.name,
                                                            id:item.id,
                                                            height:item.height,
                                                            weight:item.weight,
                                                            type:item.type,
                                                            image:item.image,
                                                            image_shiny: item.image_shiny}
                                                  )
                                   }
                        />

                    }
                />

            </View>
        );
    }
}

function mapStateToProps(state) {

    // state.profile is defined in the profile reducer
    // allow us to get access to mName, mEmail in the profile reducer
    let { mPokemonList, isLoading, isShowing } = state.pokemonList;
    return {
        mPokemonList,
        isLoading,
        isShowing
    }
  }

  function mapDispatchToProps(dispatch) {
    // These are what we imported from the action
    return bindActionCreators({ fetchPokemons }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListExample);
    // goes together with above function mapStateToProps




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  listExampleButton:{
      backgroundColor:"#cccccc",
      marginTop: 30,
      width: 200,
  },

  listStyle:{
    alignSelf:"stretch",
  },

  inputStyle:{
    height: 40,
    width:"100%",
    backgroundColor:"#aaaaaa",
    color:'#fff'
  }
});
