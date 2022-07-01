//Métodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_largo.match(/no/g))

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremono"))
console.log(texto_largo.includes("bosque"))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("bosque"))
console.log(texto_largo.startsWith("Tito"))

// Saber si un texto acaba por una palabra
console.log(texto_largo.endsWith("bosque"))
console.log(texto_largo.endsWith("árboles."))