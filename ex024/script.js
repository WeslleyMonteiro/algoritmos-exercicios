const btn = document.getElementById("btn");

const calcular = () => {
    const inputDistancia = document.getElementById("inputDistancia");
    let distancia = Number(inputDistancia.value)// Conversão para número
    const res = document.getElementById("res")

    if (isNaN(distancia)) {
        res.innerText = "Por favor, insira um número válido."
        return
    }

    let preco;
    if (distancia < 200) {
        preco = distancia * 0.5
    } else {
        preco = distancia * 0.45
    }

    res.innerText = `Você irá pagar R$ ${preco.toFixed(2)}`

    inputDistancia.value = ''
    inputDistancia.focus()
}

btn.onclick = calcular



