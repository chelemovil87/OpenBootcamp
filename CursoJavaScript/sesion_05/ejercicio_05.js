// Ejercicios sesión 05 - Numbers

//Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 184;
//Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.86
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 84.4
//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaSup = altura_m.toFixed(1)
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoSub = peso_kg.toPrecision(2)
//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maximoValor = Number.MAX_VALUE + 1 === Number.MAX_VALUE
