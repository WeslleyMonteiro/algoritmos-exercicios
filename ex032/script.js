const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const housePrice = Number(document.getElementById('house-price').value);
    const salary = Number(document.getElementById('salary').value);
    const years = Number(document.getElementById('years').value);

    const values = document.getElementById('values');
    const infos = document.getElementById('infos');

    infos.classList.remove('hidden');

    if (!housePrice || !salary || !years) {
        values.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const yearsToMonths = years * 12;

    const loanCalculator = () => housePrice / yearsToMonths;
    const maxPercent = () => salary * 0.3;

    const parcela = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(loanCalculator());

    let mensagem = '';

    if (loanCalculator() > maxPercent()) {
        mensagem = `Seu empréstimo foi negado! A parcela de ${parcela} excede 30% do seu salário.`;
    } else {
        mensagem = `Parabéns! Seu empréstimo foi aprovado. A parcela mensal será de ${parcela}.`;
    }

    values.textContent = mensagem;
});

