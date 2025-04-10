const btn = document.getElementById("btn")

function aluguel() {
    const inputKm = document.getElementById("inputKm")
    const inputDia = document.getElementById("inputDia")

    const km = Number (inputKm.value)
    const dia = Number (inputDia.value)

    const precoDia = dia*90
    const precoKm = km*0.20

    const precoAluguel = precoDia + precoKm
    document.getElementById("res").textContent = `O custo total do aluguel ${precoAluguel} reais.`
}

btn.addEventListener("click",aluguel)