const feminino = document.getElementById("inputFem").value

const masculino = document.getElementById("inputMasc").value

const valor = document.getElementById("inputValor").value

let c = ''

const res = document.getElementById("res")

function Calcular(){
    if(feminino.checked){
        c = valor * 0.83
        res.textContent = `O valor final é ${c} `
    }else(masculino.checked);{
        c = valor * 0.95
        res.textContent = `O valor final é ${c} `
    }
}


