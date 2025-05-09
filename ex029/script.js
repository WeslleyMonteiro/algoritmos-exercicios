const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const salary = Number(document.getElementById('salary').value);
    const year = Number(document.getElementById('year').value);
    const result = document.getElementById('result');

    document.getElementById('infos').classList.remove('hidden');

    if (!name.value || isNaN(salary) || isNaN(year)) {
        result.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    let percent = 0;

    if (year <= 3) {
        percent = 1.03;
    } else if (year < 10) {
        percent = 1.125;
    } else {
        percent = 1.20;
    }

    const newSalary = (salary * percent).toFixed(2).replace('.', ',');
    const message = `${name.value}, seu salário foi ajustado para R$ ${newSalary}`;

    result.textContent = message;
});
