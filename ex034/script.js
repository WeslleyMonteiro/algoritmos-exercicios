const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const physicalEH = Number(document.getElementById('physical_exercisesH').value);
    const values = document.getElementById('values');
    const infos = document.getElementById('infos');

    infos.classList.remove('hidden');

    let multiplicador;

    if (physicalEH <= 10) {
        multiplicador = 2;
    } else if (physicalEH <= 20) {
        multiplicador = 5;
    } else {
        multiplicador = 10;
    }

    const pontos = physicalEH * multiplicador;
    const dinheiro = pontos * 0.05;

    values.textContent = `Você acumulou um total de ${pontos} pontos! Você ganhou ${dinheiro.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}!`;
});

// Versão que fiz 

// const form = document.getElementById('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const physicalEH = Number(document.getElementById('physical_exercisesH').value);
//     const values = document.getElementById('values');

//     let pontos = 0;
//     let tutu = 0;
//     let mensagemPontos = '';
//     let msgtutu = '';

//     document.getElementById('infos').classList.remove('hidden');

//     if (physicalEH <= 10) {
//         pontos = 2 * physicalEH;
//     } else if (physicalEH <= 20) {
//         pontos = 5 * physicalEH;
//     } else {
//         pontos = 10 * physicalEH;
//     }

//     tutu = pontos * 0.05;
//     mensagemPontos = `Você acumulou um total de ${pontos} pontos!`;
//     msgtutu = `Você ganhou ${tutu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`;

//     values.textContent = `${mensagemPontos} ${msgtutu}`;
// });
