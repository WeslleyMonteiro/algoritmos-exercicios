const btn = document.getElementById("btn")

function areaTinta() {
    const InputAltura = document.getElementById("InputAltura")
    const altura = Number (InputAltura.value)

    const inputLargura = document.getElementById("inputLargura")
    const largura = Number (inputLargura.value)

    const area = altura * largura
    const tinta = area/2
    document.getElementById("area").textContent = `A área da parede é ${area}m²`
    document.getElementById("tinta").textContent = `O total de tinta utilizada é ${tinta} litros`

    InputAltura.value = ""
    inputLargura.value = ""
}

btn.addEventListener("click",areaTinta)

