// formula factorial  n! = n x (n-1)!

// for (let n= 10; n < 10; n = n* n--) {
//     console.log(n)
// }
// let factorial = 10;
// for (let i = 0; i < n.length; i--){
//     console.log(n[4])
// }

function factorial(fac) {
    if (fac === 0 || fac === 1)
        return 1;    


    for (let i = fac - 1; i >= 1; i--)
    fac = fac * i;
    return fac;
    console.log(fac);
    
}