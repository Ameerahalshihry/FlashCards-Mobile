    import { AsyncStorage } from 'react-native'

    export const DECK_STORAGE_KEY = 'AsyncStorage:flashCards'

    export async function getAllDecks() {
        const res = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        if (res !== null) {
            const data = JSON.parse(res);
            return data;
        }
        else{
            return null
        }  
        }

        // export async function getDeck(id) {
        // return getAllDecks().then((decks)=>{
        //     decks.filter()
        // })
        //     }

    export async function newDeck(title){
        return getAllDecks().then((decks)=>{
            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [title]: {
            title : title,
            questions: []
        }
    }))
    })}

    export async function newCard( title, card){
        return getAllDecks().then((decks)=>{
            decks[title].questions.push(card)
            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks));

        })
    }
  