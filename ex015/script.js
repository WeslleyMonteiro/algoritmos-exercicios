const btn = document.getElementById("btn")

// function salario() {
// }

btn.addEventListener("click", ()=>{
    const inputDias = document.getElementById("inputDias")
    const dias = Number (inputDias.value)

    const salarioMes = dias * 8*25
    document.getElementById("res").textContent = `O seu salário é ${salarioMes} reais.`
})

