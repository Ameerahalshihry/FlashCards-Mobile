import {GET_DECKS, ADD_CARD, ADD_DECK} from '../actions/index' 

export default function decks (state={}, action){
    let decks={}

    switch(action.type){
        case GET_DECKS:
            decks={
                ...state,
                ...action.decks
            }
            return decks
        case ADD_DECK:
                const newDeck = {
                        [action.deck]:{
                                title: action.deck,
                                questions:[]
                        }
                }
                return {
                    ...state,
                    ...newDeck
                }
        case ADD_CARD:
                const { deckId, card} = action
                return{
                    ...state,
                    [deckId]:{
                        ...state[deckId],
                        questions: state[deckId].questions.concat([card])
                    }
                }
        default:
            return state
    }
}