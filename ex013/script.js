const btn = document.getElementById("btn")

function calcularSalario() {
    const inputSalario = document.getElementById("inputSalario")

    const salario = Number(inputSalario.value)
    const aumento = salario * 1.15
    document.getElementById("res").textContent = `Seu salário foi reajustado para ${aumento} reais.`
}

btn.addEventListener("click",calcularSalario)