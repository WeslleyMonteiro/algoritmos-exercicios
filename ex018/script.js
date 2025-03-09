function votar() {
    const inputAno = document.getElementById("inputAno")
    const ano = Number (inputAno.value)

    if(2025-ano<16) {
        document.getElementById("res").textContent = "Você não pode votar"
    } else {
        document.getElementById("res").textContent = "Você pode votar"
    }

    inputAno.value = ""
}