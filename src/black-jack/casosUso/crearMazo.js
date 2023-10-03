let mazo              = [];
const tipos           = ['C','D','H','S'];
const tiposEspeciales = ['A','J','K','Q'];
export const crearMazo = ()=>{
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            mazo.push(`${i}${tipo}`)
        }
    }
    for(let tipoE of tiposEspeciales){
        for(let tipo of tipos){
            mazo.push(`${tipoE}${tipo}`)
        }
    }
    return mazo
}