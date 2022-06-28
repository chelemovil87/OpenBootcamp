// CALCULAR EL FACTORIAL DE 10 CON DIFERENTES BUCLES

// Factorial con bucle for
let introducirDato = 10; 
 let factorial = 1;
 for (let i = introducirDato; i > 0; i--) {
      factorial *= i;
    }
    console.log(factorial)


//Factorial con bucle while
let introducirDato2 = 10;
let factorial2 = 1;
while (introducirDato2 > 0) {
    factorial2 *= introducirDato2;
    introducirDato2--;
}
console.log(factorial2)

// Factirial con bifurcacion if  y break
let introducirDato3 = 10;
let factorial3 = 1;
while (introducirDato3 >= 1) {
    factorial3 *= introducirDato3;
    introducirDato3--;
    if (introducirDato3 <1) {
        break;
    }    
}
    console.log(factorial3)
    