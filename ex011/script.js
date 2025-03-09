function calcularDelta() {
    const inputXAoQuadrado = document.getElementById ("inputXAoQuadrado")
    const inputbX = document.getElementById ("inputbX")
    const inputNC = document.getElementById ("inputNC")

    let xAoQuadrado = Number (inputXAoQuadrado.value)
    let x = Number (inputbX.value)
    let c = Number (inputNC.value)

    const delta = x**2-4*xAoQuadrado*c
    document.getElementById("res"). textContent = `O delta é ${delta}`

}
