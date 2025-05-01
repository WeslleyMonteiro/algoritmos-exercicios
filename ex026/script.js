const form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const firstNumber = parseFloat(document.getElementById('first-number').value)

    const secondNumber = parseFloat(document.getElementById('second-number').value)

    const result = document.getElementById('result')

    document.getElementById('infos').classList.remove('hidden')

    let majorMinor = ''

    if(firstNumber > secondNumber){
        majorMinor = 'O primeiro número é maior'
    } else if (secondNumber > firstNumber){
        majorMinor = 'O segundo número é maior'
    } else {
        majorMinor = 'Os dois números são iguais'
    }

    result.textContent = majorMinor
})