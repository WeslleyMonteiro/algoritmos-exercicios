function parOuImpar() {
    const inputNumero = document.getElementById("inputNumero")

    const numero = Number (inputNumero.value)

    if (numero%2==0) {
        document.getElementById("res").textContent = `o número ${numero} é PAR`
    } else {
        document.getElementById("res").textContent = `o número ${numero} é IMPAR`
    }
}