
const objeto = require('./datos');

function imprimirPaisesFavoritos() {
    const favoritos = objeto.favoritos;
    const paises = objeto.paises;

    favoritos.forEach(indice => {
        for (const key in paises) {
            if (paises.hasOwnProperty(key)) {
                const paisArray = paises[key];
                if (paisArray.length > indice) {
                    console.log(paisArray[indice]);
                }
            }
        }
    });
}

imprimirPaisesFavoritos();


