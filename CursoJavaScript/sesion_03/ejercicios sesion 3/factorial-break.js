

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
    