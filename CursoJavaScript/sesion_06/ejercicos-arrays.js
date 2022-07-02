// Ejercicio sesion 06 - Arrays
//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compra = ["Harina", "Huevos", "Leche", "Agua", "Pollo", "Arroz",]
//Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.push("Aceite de Girasol")
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.pop()
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas_favoritas = [
    {
        Titulo: "Interstellar",
        Director: "Christopher Nolan",
        Año: 2014,
    },
    {   Titulo: "Parque Jurásico",
        Director: "Steven Spielberg",
        Año: 1993,
    },
    {   Titulo: "Kill Bill",
        Director: "Quentin Tarantino",
        Año: 2003,
    },
]
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const mas_decada = peliculas_favoritas.filter(obj => obj.Año > 2010);
//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas_favoritas.map(valor => {
    return valor.Director
})
console.log(directores)
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const nombre_peliculas = peliculas_favoritas.map(nombre => {
    return nombre.Titulo
})
console.log(nombre_peliculas)
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatenación = directores.concat(nombre_peliculas)
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const concatenación2 = [...directores, ...nombre_peliculas]