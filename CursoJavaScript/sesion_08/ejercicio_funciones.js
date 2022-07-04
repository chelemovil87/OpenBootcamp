//Una función sin parámetros que devuelva siempre "true"
function siempreTrue(){
    return true
};
//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve, reject) => { 
    if (true) {
        resolve()
    } else {
        reject()
    }
})
miPromesa
    .then(() => setTimeout(() => console.log("Hola soy una promesa"), 5000));

//Una función generadora de índices pares automáticos
function* generaID() {
    let id = 0;
    while (true) {
        id += 2
        yield id
    }
}

const gen = generaID();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
