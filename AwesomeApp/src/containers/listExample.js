import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/buttonComponent'
import ListItem from '../components/listItemComponent';

export default class ListExample extends React.Component {


    static navigationOptions = {
        title: 'Contents',
    };

    constructor(props) {
        super(props);
        this.state = {
             filteredList:[], //made a new filtered array
             listData: [
            {
                "key": "1",
                "title": "13 Reasons Why",
                "description": "Newcomer Katherine Langford plays the role of Hannah, a young woman who takes her own life. Two weeks after her tragic death, a classmate named Clay finds a mysterious box on his porch. Inside the box are recordings made by Hannah -- on whom Clay had a crush -- in which she explains the 13 reasons why she chose to commit suicide. If Clay decides to listen to the recordings, he will find out if and how he made the list. This intricate and heart-wrenching tale is told through Clay and Hannah's dual narratives.",
                "image": "https://occ-0-1001-999.1.nflxso.net/art/f1f35/e6090cf4726b99b0337594b255de8acb459f1f35.jpg"
            },
            {
                "key": "2",
                "title": "Lost in Space",
                "description": "Danger, Will Robinson! The rest of the Robinson clan should be on the lookout for danger, as well, because they are facing challenging times. It's 30 years in the future and the family has been chosen to start a new life in a space colony. On the way to what they believe will be a better world, the Robinsons' ship is abruptly thrown off course and they are thrown into a dangerous alien environment. Now light-years from their original destination, they must forge new alliances and work together to survive. Stranded with the Robinsons are unsettlingly charismatic Dr. Smith and inadvertently charming Don West, two outsiders who are thrown together by circumstance and a mutual knack for deception.",
                "image": "https://www.gstatic.com/tv/thumb/tvbanners/15197695/p15197695_b_v8_ab.jpg"
            },
            {
                "key": "3",
                "title": "Dark",
                "description": "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986.Dark represents the first German original series produced for Netflix.",
                "image": "data:image/jpeg;base64,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"
            },
            {
                "key": "4",
                "title": "Jessica Jones",
                "description": "This Netflix original chronicles the life of one of the darker Marvel characters, the mysterious Jessica Jones. When a tragedy puts an end to her short-lived career as a superhero, Jessica settles in New York City and opens her own detective agency, called Alias Investigations, which seems to be called into cases involving people who have special abilities. Suffering from post-traumatic stress syndrome, Jessica wants to do good, but her primary interest isn't in saving the world, it's saving her apartment and getting through each day. Based on a graphic novel intended for adults, this is not a superhero story for the kids.",
                "image": "data:image/jpeg;base64,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"
            }
        ]
     };
             this.filterList = this.filterList.bind(this)
    }

    filterList(text){
        // that = this
        let {listData, filteredList} = this.state
        filtered = listData.filter(function(el) {
        console.log("TITLE", el.title)
        console.log("TEXT", text)
        return el.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
        })
        this.setState({filteredList:filtered})
        // setTimeout(function(){
        console.log("LENGTH", that.state.filteredList.length)
        // }, 100)

    }
    //
    // filterList(text){
    //     let { listData } = this.state
    //     filtered = listData.filter(function(obj) {
    //         console.log("TITLE", obj.title)
    //         console.log("TEXT", text)
    //         console.log(obj.title.toLowerCase().indexOf(text.toLowerCase()))
    //         return obj.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    //     })
    //
    //     this.setState({filteredList:filtered})
    // }

    render() {

        const { navigate } = this.props.navigation;
        let { listData, filteredList } = this.state;
        let { filterList } = this;

        return (

            <View style={ [ styles.container ] }>
                <TextInput
                    style={ [ styles.inputStyle ] }
                    placeholder="Search"
                    onChangeText={ (text) => filterList(text) }
                    placeholderTextColor={'#888888'}

                />
                <FlatList
                    style={ [ styles.listStyle ] }
                    data={ filteredList.length === 0 ? listData : filteredList}
                    renderItem={
                        ({item, index}) =>
                        <ListItem
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            position={index}
                            action={ ()=> navigate("Test", {title:item.title, description:item.description, image:item.image} ) }
                        />

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
