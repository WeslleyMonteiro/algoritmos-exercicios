const form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const firstNumber = parseFloat(document.getElementById('first-number').value)

    const secondNumber = parseFloat(document.getElementById('second-number').value)

    const result = document.getElementById('result')

    document.getElementById('infos').classList.remove('hidden')

    let mensagem = ''

    const calculate = ()=>{
        return (firstNumber + secondNumber) / 2
    }
    const media = calculate() // Aqui chamamos a função e guardamos o valor retornado - SEMPRE TEM QUE CHAMAR A FUNÇÃO

    if(media<=4.9) {
        mensagem = `Sua media foi ${media.toFixed(1)},por isso foi REPROVADO`
    } else if (media< 6.9){
        mensagem = `Sua média foi ${media.toFixed(1)}, portanto está em RECUPERAÇÃO`
    } else {
        mensagem = `Sua média foi ${media.toFixed(1)}. Parabéns você foi aprovado`
    }

    result.textContent = mensagem
})