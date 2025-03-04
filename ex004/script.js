
function somarN () {
    const inputNum1 = document.getElementById ("inputNum1")
    const n1 = Number (inputNum1.value)

    const inputNum2 = document.getElementById ("inputNum2")
    const n2 = Number (inputNum2.value)
    
    const somar = n1 + n2

    document.getElementById ("somou"). textContent = `A soma de ${n1} + ${n2} é igual a ${somar}`

}


