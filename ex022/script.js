const btn = document.getElementById("btn")

function alistar() {
    const inputAnoN = document.getElementById("inputAnoN")
    const anoN = Number (inputAnoN.value)
    const idade = 2025-anoN 

    if(idade>=16){
        document.getElementById("res").textContent = `Você tem ${idade} anos, logo você já pode votar.`
    } else {
        document.getElementById("res").textContent = `Você tem ${idade} anos, logo você não pode votar.`
    }
}

btn.addEventListener("click",alistar)