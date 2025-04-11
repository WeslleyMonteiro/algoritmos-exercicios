const btn = document.getElementById("btn")

const desconto = ()=>{
    const inputPreco = document.getElementById("inputPreco")
    const preco = Number (inputPreco.value)

    const desc = preco*0.95
    document.getElementById("res"). textContent = `O valor pra pagamento a vista é ${desc}.`

    inputPreco.value = ""
}

btn.addEventListener("click",desconto)