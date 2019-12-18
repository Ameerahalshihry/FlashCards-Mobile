        import React, { Component } from 'react'
        import { Text, View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl} from 'react-native'
        import { getAllDecks } from '../utils/api'
        import { withNavigation } from 'react-navigation'

        class DecksList extends Component {
    
            state = {
            decks: null
            }
            componentDidMount () {
                this.retrieveDecks()
            }
            retrieveDecks(){
                getAllDecks()
                    .then((decks)=>{
                        if (decks !== null){
                            this.setState({decks})
                        }
                    })
                console.log(this.state)
            }
            shouldComponentUpdate(nextProps, nextState) {
                if(nextProps.navigation.state.params)
                    { 
                        if(nextProps.navigation.state.params.option === "update")
                    { 
                        this.retrieveDecks()
                            return true
                    }
                    } 
                }
            handlePress = (deck) => {
            const { navigate } = this.props.navigation
            const {decks} = this.state
            navigate(('Deck'), {deckId: decks[deck].title, decks:decks, length: decks[deck].questions.length })
            }

            render() {
            const {decks}= this.state
                return (
                decks !== null ?
                ( <ScrollView>
                    <View style={styles.container}>
                    {Object.keys(decks).map((deck)=>{
                    return(
                        <View style={styles.card} key={deck}>
                        <TouchableOpacity onPress={() => this.handlePress(deck)}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#7b68ee', 
                        textAlign: 'center',padding: 15}}> 
                        {decks[deck].title}
                        </Text>
                        <Text style={{textAlign: 'center'}}> 
                        Number of cards : {decks[deck].questions.length}
                        </Text>
                        </TouchableOpacity>
                        </View>
                    )
                    }
                    )
                    }
                    </View>
                    </ScrollView>
                    )
                    : 
                    (
                    <View style={styles.container}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                    There is no deck, please add deck </Text>
                    </View>
                    )
                )
            }
        }
        export default withNavigation (DecksList);

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        card:{
            margin:15,
            width:310,
            padding:20,
            justifyContent: 'center',
            alignItems: 'center',
            height:150,
            borderRadius:8,
            borderColor:'#ccc',
            borderWidth:0.2,
            backgroundColor:'#fff',
            shadowColor:'rgba(80, 0, 255, .8)',
            shadowOffset: {
                width: 3,
                height: 12,
            },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
            }
        })