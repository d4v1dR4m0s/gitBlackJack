export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor *1;
    // let puntos =0;
    // if (isNaN(valor)){
    //     puntos = (valor ==='A')? 11:10;
    // } else {
        
    //     puntos = valor * 1;
    // }
    // return puntos;
}