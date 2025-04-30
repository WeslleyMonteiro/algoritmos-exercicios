const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const firstLine = parseFloat(document.getElementById('first-line').value)
    const secondLine = parseFloat(document.getElementById('second-line').value)
    const thirdLine = parseFloat(document.getElementById('third-line').value)

    const condition = document.getElementById('condition')
    const description = document.getElementById('description')

    let triangle = ''
    let type = ''

    document.getElementById('infos').classList.remove('hidden')
    condition.classList.remove('attention', 'success');

    if (
        isNaN(firstLine) || isNaN(secondLine) || isNaN(thirdLine) ||
        firstLine <= 0 || secondLine <= 0 || thirdLine <= 0
      ) {
        condition.textContent = 'Por favor, insira valores válidos e maiores que zero.';
        description.textContent = '';
        return;
        condition.classList.add('attention');
      }

    // Verifica se NÃO forma triângulo
    if (firstLine + secondLine <= thirdLine || secondLine + thirdLine <= firstLine || firstLine + thirdLine <= secondLine) {
        triangle = 'Essas linhas não formam um triângulo.'
        type = '';
        condition.classList.add('attention');

    } else {
        triangle = 'Essas linhas formam um triângulo.'
        condition.classList.add('success');
        
        if (firstLine === secondLine && secondLine === thirdLine){
            type = 'Tipo: Triângulo Equilátero.'
        } else if (firstLine === secondLine || secondLine === thirdLine || firstLine === thirdLine){
            type = 'Tipo: Triângulo Isóceles.'
        } else {
            type = 'Tipo: Triângulo Escaleno.'
        }
    }

    condition.textContent = triangle
    description.textContent = type
})
