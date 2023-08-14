import _ from 'underscore';

/**
 * esta funcion crea un nuevodeck
 * @param {array<string>} tiposDeCarta ejemplo : ['C','D','H','S']
 * @param {array<string>} tiposEspeciales ejemplo : ['A','J','Q','K']
 * @returns {array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (! tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error ('tipos de carta es nece');
    let deck = [];
    for ( let i = 2; i<11; i++ ){
        for(let tipo of tiposDeCarta){
            deck.push(i+tipo);
        }           
    }
    
    for ( let esp of tiposEspeciales){
        for (let tipo of tiposDeCarta){
            deck.push(esp + tipo);
        }
    }    
    //deck = _.shuffle(deck);       
    //return deck;
    return _.shuffle(deck);
}