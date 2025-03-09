function bissexto() {
    const inputAno = document.getElementById("inputAno")
    const ano = Number (inputAno.value)

    if(ano%4==0||ano%400==0) {
        document.getElementById("res").textContent = `O ano ${ano} é bissexto`
    } else {
        document.getElementById("res").textContent = `O ano ${ano} não é bissexto`
    }

    inputAno.value = ""
}