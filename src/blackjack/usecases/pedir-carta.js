
/**
 * 
 * @param {Array<String>} deck Tiene que ser un arreglo de string
 * @returns {Array} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) throw new Error('No hay cartas en el deck');
    
    const carta = deck.pop();
    return carta;
}
