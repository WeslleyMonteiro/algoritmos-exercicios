const btn = document.getElementById("btn")

function antecessorSucessor() {
    const inputNumero = document.getElementById ("inputNumero")
    const numero = Number(inputNumero.value)
    
    let oAntecessor = numero - 1
    let oSucessor = numero + 1
    
    document.getElementById("antecessor").textContent = `O antecessor é ${oAntecessor}.`
    document.getElementById("sucessor").textContent = `O sucessor é ${oSucessor}.`
}

btn.addEventListener("click",antecessorSucessor)