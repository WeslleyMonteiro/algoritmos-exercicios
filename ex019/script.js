function media() {
    const inputNota1 = document.getElementById("inputNota1")
    const inputNota2 = document.getElementById("inputNota2")

    const nota1 = Number (inputNota1.value)
    const nota2 = Number (inputNota2.value)
    const media = (nota1 + nota2)/2
    
    if (media >= 7) {
        document.getElementById("res").textContent = `Você teve ${media} de média, então você está APROVADO`
    } else {
        document.getElementById("res").textContent = `Você teve ${media} de média, então você está REPROVADO`
    }
}