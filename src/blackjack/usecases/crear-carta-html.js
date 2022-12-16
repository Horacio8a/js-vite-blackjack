 

/**
 * 
 * @param {String} carta valor de la carta a insertar en el html
 * @returns {HTMLImageElement} 
 */
export const crearCarta = (carta) => {

    if(!carta) throw new Error('Carta es un argumento necesario');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
