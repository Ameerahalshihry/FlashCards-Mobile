    import { AsyncStorage } from 'react-native'

    export const DECK_STORAGE_KEY = 'AsyncStorage:flashCards'

    export async function getAllDecks() {
        const res = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        if (res !== null) {
            const data = JSON.parse(res);
            return data;
        }    
        }

    export async function addDeck(title){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
        title : title,
        questions: []
        }
    }))
    }

    export function addCardToDeck( deckTitle, obj){
    const decks = getAllDecks();
        decks[deckTitle].questions.push(obj);
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    }



    // export function _setData () {
    // return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data) )
    //  .then( ()=>{
    //  console.log("set data was saved successfully")
    //  } )
    //  .catch( (error )=>{
    //  console.log("error setting data")
    //  } )
    // }
    // export const getAllDecks = async () => {
    //     try {
    //         const res = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    //         if (res !== null){
    //         const data = JSON.parse(res);
    //         return data;
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     }