const button = document.getElementById('jogar')

button.addEventListener('click', function(){
    const computador = escolhaDoPC(0,2) // Você tem que fazer essa função primero antes de colocar nessa const, ai aqui dentro você só coloca os parâmetros que agora estão definidos entre 0 a 10 graças ao selectIndex que você colocou na cost abaixo - No começo só a declare mesmo depois coloque esses dados
    const jogador = document.querySelector('select').selectedIndex // Aqui ele vai pegar a tag select inteira, e ai o selectIndex serve para as opções (pedra,papel,tesoura) e retornar seus indices (0,1,2)//

    //If é criada depois da função escolha do PC e tendo seu parêmtro colocado na primera const aqui
    if((computador == 0 && jogador == 2) || (computador == 1 && jogador == 0) || (computador == 2 && jogador == 1)) {
        //perdeu --código será criado depois da função resultado
        resultado('Você perdeu!', computador)
    }else if (computador == jogador){
        // empate --código será criado depois da função resultado
        resultado('Empate', computador)
    } else {
        //venceu --código será criado depois da função resultado
        resultado('Você venceu!', computador)

    }
 })

 // Função do resultado é a ultima a ser feita
 function resultado (mensagem,computador){
    const options = ['Pedra', 'Papel', 'Tesoura'] // Esse array é criado já no final do projeto para que ele venha ser usado para trocar os números de indice do select para esses valores (0=pedra, 1 =papel, 2 = tesoura)
    document.querySelector('h4').innerHTML = mensagem
    document.querySelector('p').innerHTML = 'O Computador escolheu: '+ options[computador] // essa foi a última linha criada porque ela que vai ser responsável por trazer o array do option para as posições indice do select
 }

 function escolhaDoPC(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

//  Math.floor(Math.random()) em JavaScript
// 1. Math.random()
// Retorna um número aleatório decimal entre 0 (inclusive) e 1 (exclusivo).

// Exemplo: 0.2713, 0.99999, etc.

// 2. Math.floor(...)
// Arredonda para baixo até o inteiro mais próximo.

// Ou seja Sempre retorna 0, porque Math.random() nunca chega a 1, e qualquer valor entre 0 e 1 arredondado para baixo será 0.

//--------------
// 
//  Gerar um número inteiro aleatório entre min (inclusivo) e max (exclusivo), ou seja:

// --- ### 🔧 Função explicada: ```javascript function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } ``` #### Passo a passo: 

// 1. **`Math.random()`** - Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). - Exemplo: `0.4231` 

// 2. **`Math.random() * (max - min)`** - Expande o intervalo para o tamanho desejado. - Por exemplo: se `min = 5` e `max = 10`, então `(max - min) = 5`, e o valor gerado estará entre 0 e 4.999... 

// 3. **`Math.floor(...)`** - Arredonda **para baixo** e converte em número inteiro. - Garante que o resultado final será entre `0` e `4`. 

// 4. **`+ min`** - Ajusta o valor para começar a partir de `min`, e não de zero. - Com `min = 5`, isso dá um número entre `5` e `9`. --- ### ✅ Exemplo prático: ```javascript getRandomInt(5, 10); // Pode retornar 5, 6, 7, 8 ou 9 (nunca 10) ``` --- ### 🔁 
// 
// Se quiser incluir o `max` (intervalo [min, max]): Mude para: ```javascript function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; } ``` Assim, com `getRandomIntInclusive(5, 10)`, ele pode retornar **5 até 10**, inclusive o 10. --- Quer que eu te gere exemplos com essa função ou explique com um gráfico/visual?



