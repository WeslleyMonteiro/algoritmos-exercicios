const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const height = parseFloat(document.getElementById('height').value)
    const width = parseFloat(document.getElementById('width').value)
    const result = document.getElementById('result')

    if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
        result.textContent = 'Por favor, insira valores válidos e maiores que zero para altura e largura.'
        return
    }

    document.getElementById('infos').classList.remove('hidden')

    const calculate = (height, width) => height * width
    const res = calculate(height, width).toFixed(2)

    let mensagem = ''

    if (res < 100) {
        mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO POPULAR`
    } else if (res >= 100 && res <= 500) {
        mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO MASTER`
    } else {
        mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO PREMIUM`
    }

    result.textContent = mensagem
})
