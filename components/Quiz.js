    import React, { Component } from 'react'
    import { Text, View, TouchableOpacity , StyleSheet, Animated} from 'react-native'
    import { withNavigation } from 'react-navigation'
    import {clearLocalNotification, setLocalNotification} from '../utils/helper'

    class Quiz extends Component {
    state={
        index: 0,
        isQuestionSolved: false,
        correctAnswer:0,
        incorrectAnswer:0,
        opacity: new Animated.Value(0.5),
        width: new Animated.Value(0.5),
        height: new Animated.Value(0.5)
    }
    
    handleAnimation = () => {
    const {opacity, width, height} = this.state
    Animated.timing(opacity, {toValue: 10, duration: 1000}).start()
    Animated.spring(width, {toValue: 200, speed: 3}).start()
    Animated.spring(height, {toValue: 200, speed: 3}).start()
        clearLocalNotification()
            .then(setLocalNotification)
    }

    handleOnPress = () => {
        !this.state.isQuestionSolved ? 
        this.setState({ isQuestionSolved: true}) 
        :
        this.setState({ isQuestionSolved: false}) 
    }
    handleCorrectAnswer = () => {
    const {index} = this.state
    const {correctAnswer} = this.state
    this.setState({ index: index + 1, correctAnswer: correctAnswer + 1, isQuestionSolved: false})

    }
    handleIncorrectAnswer = () => {
    const {index} = this.state
    const {incorrectAnswer} = this.state
    this.setState({ index: index + 1, incorrectAnswer: incorrectAnswer + 1, isQuestionSolved: false})
    }
        render() {
        const {index, correctAnswer, incorrectAnswer, opacity, width, height} = this.state
        const currentQuestion= index + 1
        const decks = this.props.navigation.state.params.decks
        const deckId = this.props.navigation.state.params.deckId
        const length=decks[deckId].questions.length
        const { navigate } = this.props.navigation
        const {isQuestionSolved} = this.state
        if (index === decks[deckId].questions.length && decks[deckId].questions.length > 0 )
        {            
            {this.handleAnimation()}
            return (
                <View style={styles.card}>
                <Animated.View style={[styles.container,{opacity, width, height}]}>
                <Text style={styles.text}>
                Your Score : 
                </Text>
                <Text style={[styles.textFont, styles.text]}>
                {correctAnswer} out of {length}
                </Text>
                <Text style={styles.text} >                 
                The Correct Answer Percentage :  
                </Text> 
                <Text style={[styles.textFont, styles.text]}>
                { (correctAnswer / length ) * 100 } % 
                </Text>
                </Animated.View>
                    <TouchableOpacity style={styles.button} 
                    onPress={() => this.setState({index: 0,
                            isQuestionSolved: false,
                            correctAnswer:0,
                            incorrectAnswer:0,
                            opacity: new Animated.Value(0.5),
                            width: new Animated.Value(0.5),
                            height: new Animated.Value(0.5)})}>
                    <Text style={styles.btnTitle}> Restart Quiz </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.goBack()}}>
                    <Text style={styles.btnTitle}> Back To Deck </Text>
                </TouchableOpacity>
            </View>
            )
        }
            return (
            <View style={styles.card}>
            {decks[deckId].questions.length === 0 ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> No cards please add cards to start quiz </Text>
                <TouchableOpacity style={styles.button} 
                onPress={() => navigate(('AddCard'), {deckId, decks})}>
                    <Text style={styles.btnTitle}> Add Card </Text>
                </TouchableOpacity>
                </View>
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize: 18 }}>
                        {currentQuestion} / {decks[deckId].questions.length}
                        </Text>
                        {!isQuestionSolved ?
                        <Text style={{ padding:40, fontSize: 30}}>
                        {decks[deckId].questions[index].question} 
                        </Text>
                        :
                        <Text style={{ padding:40, fontSize: 30}}>
                        {decks[deckId].questions[index].answer} 
                        </Text>
                        }

                        {!isQuestionSolved ?
                        <TouchableOpacity style={styles.button} onPress={this.handleOnPress}>
                        <Text style={styles.btnTitle}> Answer </Text>
                        </TouchableOpacity>
                        :
                        <View>
                        <TouchableOpacity style={styles.button} onPress={this.handleCorrectAnswer}>
                        <Text style={styles.btnTitle}> Correct </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.handleIncorrectAnswer}>
                        <Text style={styles.btnTitle}> Incorrect </Text>
                        </TouchableOpacity>
                        </View>
                        }
                    
                </View>
            }
            </View>
            )
        }
    }
    export default withNavigation(Quiz);

    const styles = StyleSheet.create({
    button: {
        alignItems:'center',
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
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    },
    textFont:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7b68ee',
    },
    text:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        textAlign:'center',
    }
    })