    import React, { Component } from 'react'
    import { Text, View, StyleSheet, ScrollView, Animated, Easing, Card } from 'react-native'
    import { getAllDecks } from '../utils/api'

    class DecksList extends Component {
    
    state = {
        decks: null
        // scaleValue: new Animated.Value(0.5)
    }
        componentDidMount () {
            getAllDecks().then((response) => {
                this.setState({ decks: response})
            })  
        }

        handlePress = (deck) => {
        const { navigate } = this.props.navigation
        const {decks} = this.state
        navigate(('Deck'), {deckId: decks[deck].title, decks:decks})
            // scaleValue.setValue(0);
            // Animated.timing(scaleValue, {
            // toValue: 10,
            // duration: 300,
            // easing: Easing.linear
            // }).start();
        }

        render() {
        const {decks}= this.state
        // const cardScale = scaleValue.interpolate({
        // inputRange: [0, 0.5, 1],
        // outputRange: [1, 1.1, 1.2]
        // });
            return (
            decks !== null ? 
                (<ScrollView>
                <View style={styles.container}>
                {Object.keys(decks).map((deck)=>{
                return(
                    <Card style={styles.card} key={deck}
                    onPress={() => this.handlePress(deck)}>
                    <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#7b68ee', 
                    textAlign: 'center',padding: 15}}> 
                    {decks[deck].title}
                    </Text>
                    <Text style={{textAlign: 'center'}}> 
                    Number of cards : {decks[deck].questions.length}
                    </Text>
                    </View>
                    </Card>
                )
                }
                )
                }
                </View>
                </ScrollView>)
                : 
                (
                <View style={styles.container}>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                There is no deck, please add deck </Text>
                </View>)
            )
        }
    }
    export default DecksList;

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
        shadowColor:'rgba(80, 0, 255, .4)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
        }
    })