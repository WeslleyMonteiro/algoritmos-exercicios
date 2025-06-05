const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const salary = Number(document.getElementById('salary').value);
    const years = Number(document.getElementById('years').value);
    const isFemale = document.getElementById('female').checked;
    const isMale = document.getElementById('male').checked;

    let multiplier;

    if (isFemale) {
        if (years < 15) {
            multiplier = 1.05;
        } else if (years <= 20) {
            multiplier = 1.12;
        } else {
            multiplier = 1.23;
        }
    } else if (isMale) {
        if (years < 20) {
            multiplier = 1.03;
        } else if (years <= 30) {
            multiplier = 1.13;
        } else {
            multiplier = 1.25;
        }
    }

    if (multiplier) {
        const adjustedSalary = salary * multiplier;
        result.textContent = `O seu salário foi reajustado para ${adjustedSalary.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}!`;
    } else {
        result.textContent = "Por favor, selecione o sexo corretamente.";
    }
});





// Minha Versão
// const form = document.getElementById('form')

// form.addEventListener('submit',function(event){
//     event.preventDefault()

//     const salary = Number (document.getElementById('salary').value)

//     const years = Number (document.getElementById('years').value)

//     const female = document.getElementById('female')

//     const male = document.getElementById('male')

//     let calculate;

//     const result = document.getElementById('result')

//     if (female.checked && years < 15 ) {
//         calculate = salary * 1.05
//     } else if (female.checked && years <= 20){
//         calculate = salary * 1.12
//     } else if (female.checked && years > 20){
//         calculate = salary *1.23
    
//     } else if (male.checked && years < 20 ) {
//         calculate = salary * 1.03
//     } else if (male.checked && years <= 30){
//         calculate = salary * 1.13
//     } else if (male.checked && years > 30){
//         calculate = salary *1.25
//     }

//     result.textContent = `O seu salário foi reajustado para ${calculate.toFixed(2)} reais!`
// })