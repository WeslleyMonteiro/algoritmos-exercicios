const form = document.getElementById("form")

form.addEventListener('submit', function(event){
    event.preventDefault()

    const yourNumber = Number(document.getElementById('your_number').value)

    const result = document.getElementById('result')

    document.getElementById('infos').classList.remove('hidden')

    function numeroPC(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    const computador = numeroPC(1,5)




    let mensagem = ''

    if(yourNumber == 0 || yourNumber>5){
        alert("Por favor digite um número entre 1 e 5")
    } else {
        if(yourNumber == computador){
        mensagem = `O computador escolheu ${computador}, portanto você acertou!`
        } else {
        mensagem = `O computador escolheu ${computador}, portanto você errou!`
        }
    }

    result.textContent = mensagem

})

// Dica extra: 

// Você pode limitar a escolha de 1 a 5 no proprio HTML também ficaria assim

// <input type="number" id="your_number" min="1" max="5">. Pode usar placeholder também

