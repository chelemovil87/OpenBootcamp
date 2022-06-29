// Sesion 4 - Strings (Cadena de caracteres)
let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';


console.log(str_sng)
console.log(str_dbl)

// Intentar redactar todo el proyecto con las mismas comillas iguales

let str_comillas = "El otro dia me dijo literalmente\"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

///Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`;
console.log(str_backticks)

let nombre = "Tania";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo);

/// Plantillas HTML con comillas invertidas
let plantilla = `
<html>
<h1>Pagina web de ${nombre}</h1>
<p>Este es un parrafo</p>
</html>`;
console.log(plantilla);

///Introduccion de variables en html

let libros = ["Empieza por el porque", "El monje que vendio su ferrari", "El poder del ahora"]