const feminino = document.getElementById("feminino")
const masculino = document.getElementById("masculino")
const res = document.getElementById("res")
const btn = document.getElementById("btn")

function calcular(){
    const valor = document.getElementById("valor")
    const val = Number(valor.value)

    if(feminino.checked){
        let desc = val * 0.85
        res.textContent = `O valor com desconto fica R$ ${desc.toFixed(2)}`
    } else if(masculino.checked){
        let desc = val * 0.95
        res.textContent = `O valor com desconto fica R$ ${desc.toFixed(2)}`
    } else {
        res.textContent = "Por favor, selecione um gênero."
    }

    valor.value = ''
    valor.focus()
}

btn.addEventListener("click", calcular)

