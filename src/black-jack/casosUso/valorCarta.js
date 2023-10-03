/**
 * 
 * @param {String} carta Recibe la caarta que ha sido sacada del mazo de cartas
 * @returns {Number} Retorna el valor de la carta en numero
 */
export const valorCarta = (carta)=>isNaN(carta.substring(0,carta.length-1)) ? 
                                carta.substring(0,carta.length-1) === "A" ? 11 : 10 
                                : carta.substring(0,carta.length-1) * 1 