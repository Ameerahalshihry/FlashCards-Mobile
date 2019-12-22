  import React, { Component } from 'react'
  import { View, StyleSheet } from 'react-native'
  import DecksList from './components/DecksList'
  import NewDeck from './components/NewDeck'
  import Deck from './components/Deck'
  import Quiz from './components/Quiz'
  import AddCard from './components/AddCard'
  import { createAppContainer } from 'react-navigation'
  import { createBottomTabNavigator } from 'react-navigation-tabs'
  import { createStackNavigator } from 'react-navigation-stack'
  import { Ionicons } from '@expo/vector-icons'
  import { setLocalNotification } from './utils/helper'
  import {Provider} from 'react-redux'
  import {createStore} from 'redux'
  import reducer from './reducers'
  import middleware from './middleware'

  export const Tabs = createAppContainer(
    createBottomTabNavigator({
      DecksList: {
        screen: DecksList,
        navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-list-box" size={30} color={tintColor} />
          ),
        },
      },
      AddDeck: {
        screen: NewDeck,
        navigationOptions: {
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-add-circle" size={30} color={tintColor} />
          ),
        },
      },
    },{
    tabBarOptions:{
      activeTintColor: '#7b68ee',
    }
    })
  );
export const MainNavigator = createAppContainer(
    createStackNavigator({
      Home: {
        screen: Tabs,
      },
      Deck: {
        screen: Deck,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Deck Details',
          headerStyle:{
            backgroundColor: '#7b68ee'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Quiz',
          headerStyle:{
            backgroundColor: '#7b68ee'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
      AddCard: {
        screen: AddCard,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Add Card',
          headerStyle:{
            backgroundColor: '#7b68ee'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
    })
  );

  class App extends Component {

    componentDidMount () {
      setLocalNotification()
    }
  
    render() {
      const store = createStore(reducer, middleware)
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
        </Provider>
      )
    }
  }
  export default App;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
    }
  })
