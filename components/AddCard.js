    import React, { Component } from 'react'
    import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button, Card} from 'react-native'
    import { addCardToDeck } from '../utils/api'

    class AddCard extends Component {
    state = {
        question:'',
        answer: ''
    }

    submit = () => {
        let obj = {
        question:this.state.question,
        answer: this.state.answer
        }
        const decks = this.props.navigation.state.params.decks
        const deckId = this.props.navigation.state.params.deckId
        addCardToDeck(deckId, obj)
        this.props.navigation.navigate('Deck')
        this.setState({question:'',answer: ''})
    }

        render() {
            return (
                <Card style={styles.card}>
                    <Text style={styles.paragraph}> Please enter the question </Text>
                        <TextInput 
                        style={styles.input}
                        placeholder = "Enter Question"
                        placeholderTextColor = '#d6d7da'
                        onChangeText={( question ) => this.setState({ question })}
                        value={this.state.question}
                        />
                    <Text style={styles.paragraph}> Please enter the answer </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder = 'Enter the Answer'
                        placeholderTextColor = '#d6d7da'
                        onChangeText={( answer ) => this.setState({ answer })}
                        value={this.state.answer} 
                        />
                
                <TouchableOpacity style={styles.button} 
                    onPress={this.submit}>
                    <Text style={styles.btnTitle}> Add Card </Text>
                </TouchableOpacity>
                </Card>
            )
        }
    }
    export default AddCard;

    const styles = StyleSheet.create({
    card:{
        flex: 1,
        borderWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        width:350,
        borderRadius:8,
        shadowColor:'rgba(80, 0, 255, .4)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
    },
    paragraph: {
        margin: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:"#706fd3",
    },
    button: {
        alignItems: 'center',
        backgroundColor:'#7b68ee',
        padding: 15,
        margin: 10,
        width: 370,
        height:60,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        margin: 15,
        height: 60,
        // borderColor: '#7a42f4',
        borderColor:'#7b68ee',
        borderWidth: 1,
        borderRadius:6
    },
    btnTitle :{
        fontSize: 20,
        textAlign: 'center'
        }
    })




