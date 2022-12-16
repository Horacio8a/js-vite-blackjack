import _ from 'underscore';



/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J','Q','K'] 
 * @returns {Array<String>} Retorna un nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('tiposDeCartas es obligarotio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligarotio como un arreglo de string')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    return _.shuffle( deck );
}