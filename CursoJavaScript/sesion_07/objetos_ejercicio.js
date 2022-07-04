//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "José Eduardo",
    apellido: "Rodríguez",
    edad: 35,
    altura: 184,
    eresDesarrollador: true,
}
//Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig @s
const lista = [
    { ...datosPersonales },
    {
    nombre: "Enrique",
    apellido: "Cañabate",
    edad: 40,
    altura: 179,
    eresDesarrollador: false,
    },
    {
    nombre: "Blas",
    apellido: "Guisado",
    edad: 32,
    altura: 189,
    eresDesarrollador: false,
    }
];
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada)