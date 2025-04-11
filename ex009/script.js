const btn = document.getElementById("btn")

// function converterDolar(){
//    //    //ARGUMENTOS USADOS NA VERSÃO ABAIXO
// }

btn.onclick = ()=>{
    const inputValor = document.getElementById("inputValor")
    const valor = Number (inputValor.value)

    const dolar = valor / 3.45
    document.getElementById("dolar").textContent = `${valor} é igual a ${dolar} dólares`
}
