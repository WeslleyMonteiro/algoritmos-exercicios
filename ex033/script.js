const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const carSelect = document.querySelector('select');
    const carOption = carSelect.value; // Melhor que usar selectedIndex
    const days = Number(document.getElementById('days').value);
    const kms = Number(document.getElementById('kms').value);
    const result = document.getElementById('result');

    // Validação simples
    if (isNaN(days) || isNaN(kms) || days <= 0 || kms <= 0) {
        alert('Digite valores válidos!');
        return;
    }

    let calculate = 0;

    // Lógica de cálculo
    if (carOption === 'Carro Popular') {
        calculate = (90 * days) + (kms <= 100 ? 0.2 * kms : 0.1 * kms);
    } else if (carOption === 'Carro de luxo') {
        calculate = (150 * days) + (kms <= 200 ? 0.3 * kms : 0.25 * kms);
    } else {
        alert('Tipo de carro inválido.');
        return;
    }

    result.textContent = `O valor total do aluguel é R$ ${calculate.toFixed(2)}`;
});
