import { newCard, newDeck } from '../utils/api'

export const GET_DECKS = "GET_DECKS"
export const ADD_CARD = "ADD_CARD"
export const ADD_DECK = "ADD_DECK"

export function getDecks(decks){
    return {
        type:GET_DECKS,
        decks
    }
}

export function addDeck(deck){
    return {
        type:ADD_DECK,
        deck
    }
}

export function addCard(deckId, card){
    newCard(deckId, card)
    return {
        type:ADD_CARD,
        deckId,
        card
    }
}