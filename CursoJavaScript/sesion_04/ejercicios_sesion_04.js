// Ejercicio de metodos string

let nombre = "José Eduardo";
let apellido = "Rodríguez";
let ocupación = "Estudiante";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
console.log(`${nombre} ${apellido} ${ocupación}`);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = `${ocupación}`;
console.log(estudianteMayus.toUpperCase());

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = `${ocupación}`;
console.log(estudianteMinus.toLowerCase());

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let num = `${ocupación}`;
console.log(num.trim().length);

//Una variable que contenga la primera letra del Nombre
let firts = `${nombre}`;
console.log(firts.charAt(0));

//Otra variable que contenga la última letra del Apellido
let last = `${apellido}`;
console.log(last[8]);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(ocupación.trim());

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let includesName = `${ocupación}`;
console.log(includesName.includes("José Eduardo"));