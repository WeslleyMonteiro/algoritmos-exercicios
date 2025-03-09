function rolaMulta() {
    const inputVelocidade = document.getElementById("inputVelocidade")

    const velocidade = Number (inputVelocidade.value)

    if (velocidade > 80) {
        const grana = (velocidade - 80) * 5
        document.getElementById("res").textContent = `Você foi multado em ${grana} reais.`
    }

    inputVelocidade.value = ""
}