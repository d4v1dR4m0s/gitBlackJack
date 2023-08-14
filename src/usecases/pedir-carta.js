
/**
 * esta funcion permite pedir una carta
 * @param {array<string>} deck 
 * @returns retorna una carta
 */

export const pedirCarta = (deck)=> {

    //let deck = [];
    if (deck.length === 0){
        throw 'No hay cartas en el Deck';
    }
        const carta = deck.pop();  
    console.log(carta);
    console.log(deck); 
    return carta;
}