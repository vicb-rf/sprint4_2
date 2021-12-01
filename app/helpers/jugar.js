const tirarDado = () =>  Math.floor(Math.random() * 6) + 1;

const resultados = () => {

    const dado1 = tirarDado();
    const dado2 = tirarDado();

    const resultado = dado1 + dado2;
    let ganador = false;

    if(resultado === 7){
        ganador = true;
    }    

    return { dado1, dado2, resultado, ganador }    

}

module.exports = resultados