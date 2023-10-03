/**
 * 
 * @param {Array<string>} mazoRevuelto array del cual sacar una carta
 * @returns {Array<string>} nuevo array con una carta menos
 */

export const pedirCarta = (mazoRevuelto)=>{
    if(mazoRevuelto.length === 0){
        throw 'No hay más cartas en el deck'
    }
    return mazoRevuelto.shift()
}