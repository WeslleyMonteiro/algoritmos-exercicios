const btn = document.getElementById("btn")

function mostrar() {
    const inputNumero = document.getElementById("inputNumero")
    const numero = Number (inputNumero.value)

    const dobro = numero * 2
    const terco = numero / 3
    
    document.getElementById("dobro"). textContent = `O dobro de ${numero} é ${dobro}`
    document.getElementById("terco"). textContent = `O terço de ${numero} é ${terco}`

    inputNumero.value = ""
}

btn.addEventListener("click",mostrar)
