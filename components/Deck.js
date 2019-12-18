    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TouchableOpacity, Button, Card, Animated } from 'react-native'
    import { withNavigation } from 'react-navigation'

    class Deck extends Component {

        state = {
            animateValue: new Animated.Value(0),
        }
        componentDidMount(){
        const {animateValue} = this.state
        Animated.timing(animateValue, {
            toValue: 1,
            duration: 400,
            }).start();
        }
    
        render() {
            const {animateValue, length } = this.state
            const decks = this.props.navigation.state.params.decks
            const deckId = this.props.navigation.state.params.deckId
            const { navigate } = this.props.navigation
            return (
                <View style={styles.card}>
                <Animated.View style={{alignItems: 'center',justifyContent: 'center', 
                transform:[
                    {scale:animateValue}
                    ]}}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#7b68ee',padding:15}}>
                    {decks[deckId].title}
                    </Text>
                    <Text style={{ padding:10, fontSize: 18}}> Number of cards : </Text>
                    <Text style={{ padding:10, fontSize: 18}}> {decks[deckId].questions.length} </Text>
                <TouchableOpacity style={styles.button} 
                onPress={() => navigate(('AddCard'), {deckId, decks})}>
                    <Text style={styles.btnTitle}> Add Card </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                onPress={() => navigate(('Quiz'), {deckId, decks})}>
                    <Text style={styles.btnTitle}> Start Quiz </Text>
                </TouchableOpacity>
                </Animated.View>
                </View>
            )
        }
    }
    export default withNavigation(Deck);

    const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor:'#7b68ee',
        padding: 15,
        margin: 10,
        width: 310,
        height:60,
        borderRadius:6
    },
    btnTitle :{
        fontSize: 20,
        textAlign: 'center'
        },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    }
    })