//Bifurcaciones if.....else.

let saldo = 50;
let efectivo = 30;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else{
    console.log("No tienes suficiente saldo.")
}

//if...else if.....else
let nota = 3

if (nota === 5) {
    console.log("Enhorabuna, has obtenido un sobresaliente")
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor")
} else if (nota === 3) {
    console.log("Has obtenido un suficiente")
} else if (nota === 2) {
    console.log("No has aprobado por poco")
} else if (nota === 1) {
    console.log("No has estudiado nada, trabaja mas para la proxima")
} else {
    console.log("Error, introduce una nota del 1 al 5");
};


// OPERADOR SWITCH

let nota2 = 2;
switch (nota2) {
    case 5:
        console.log("Enhorabuna, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrías haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja mas para la proxima");
        break;
    default:
        console.log("Error");
        break;
}                    
                    