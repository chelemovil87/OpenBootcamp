const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("CambioTexto", evento => {
    console.log(event.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("CambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}