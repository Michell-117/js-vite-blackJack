export const revolverMazo = (cartas)=>{
    let deck = cartas
    let nuevoDeck = []
    while( deck.length>0){
        let cartaAleatoria = Math.round(Math.random() * (deck.length-1) )
        nuevoDeck.push(deck[cartaAleatoria])
        deck.splice(cartaAleatoria,1)
    }
    return nuevoDeck
}