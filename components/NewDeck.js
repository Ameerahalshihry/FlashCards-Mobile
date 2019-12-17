    import React, { Component } from 'react'
    import { Text, View, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native'
    import { addDeck, getAllDecks } from '../utils/api'

    class NewDeck extends Component {
        state = {
        title: ''
        }
        // handleChange = (value) => {
        // this.setState({title: value})
        // }
        handleSubmit = () => {
        console.log("submit it")
        console.log(this.state)
        const title = this.state.title
        addDeck(title).then(() => getAllDecks())
        // this.props.navigation.navigate('Deck', {deckId: title})
        this.props.navigation.navigate('DecksList')
        this.setState({title: ""})
    
    }
        render() {
            return (
                <View>
                    <Text style={styles.paragraph}>What is the title of your new deck? </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder = "Enter the title of deck "
                        placeholderTextColor = '#d6d7da'
                        onChangeText={( title ) => this.setState({ title })}
                        value={this.state.title} 
                        />
                
                    <TouchableOpacity style={styles.button} 
                    onPress={this.handleSubmit}>
                    <Text style={styles.btnTitle}> Create Deck </Text>
                </TouchableOpacity>
                </View>
            )
        }
    }
    export default NewDeck;

    const styles = StyleSheet.create({
    paragraph: {
        padding: 20,
        margin: 10,
        marginTop:150,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        // color:"#706fd3",
        color: 'black'
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
    // <Button style={styles.button} mode="contained" 
    // onPress= {this.handleSubmit} title='Create Deck'>
    // </Button>



    // marginTop: 10,
    // backgroundColor:'#7b68ee',
    // height: 50,
    // borderRadius: 3,
    // padding:10