    import React, { Component } from 'react'
    import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
    import { addCard, getAllDecks } from '../utils/api'

    class AddCard extends Component {
    state = {
        question:'',
        answer: '',
        decks: this.props.navigation.state.params.decks
    }

    submit = () => {
        let obj = {
        question:this.state.question,
        answer: this.state.answer
        }
        // const decks = this.props.navigation.state.params.decks
        const {decks} = this.state
        const deckId = this.props.navigation.state.params.deckId
        addCard(deckId, obj)
        .then(()=> getAllDecks()
            .then((decks) =>{
                this.setState({decks})
        }))
        // this.props.navigation.navigate('Deck', {option: "update"}, {length: decks[deckId].questions.length + 1})
        this.props.navigation.goBack()
        this.setState({question:'',answer: ''})
    }

        render() {
            return (
                <View style={styles.card}>
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
                </View>
            )
        }
    }
    export default AddCard;

    const styles = StyleSheet.create({
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        margin: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black'
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
        borderColor:'#7b68ee',
        borderWidth: 1,
        borderRadius:6,
        width: 350,
        justifyContent:'center',
        alignItems:'center',
    },
    btnTitle :{
        fontSize: 20,
        textAlign: 'center'
        }
    })




