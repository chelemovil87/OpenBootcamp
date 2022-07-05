import { eleva, suma, nombre } from "./modulos/matematicas.js"
// import * as moduloMatematica from './modulos/matematicas.js'
import getAutor,{libro} from "./modulos/literatura.js"

const sum = suma(4, 12)
console.log(sum)

const potencia = eleva(2, 21)
console.log(potencia)

console.log(nombre)
console.log(getAutor())
console.log(libro)
