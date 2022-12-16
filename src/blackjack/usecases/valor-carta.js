
/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {number} Valor de la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta) throw new Error('La carta es necesaria para calcular el valor');
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}