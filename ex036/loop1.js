// ANTIGA FORMA QUANDO SÓ QUER MOSTRAR MESMO

// 
// let contador = 6

// while (contador <= 11) {
//     console.log(contador)
//     contador++
// }


// let numeros = [];
// let contador = 6;

// while (contador <= 11) {
//     numeros.push(contador);
//     contador++;
// }

// numeros.map((numero) => {
//     console.log(numero);
// }); -- NESSA ELE VAI CRIAR O ARRAY DE 6 A 11 também

const numeros = Array.from({ length: 6 }, (_, i) => i + 6);

numeros.map((numero) => {
    console.log(numero);
}); // Se usa se caso o exemplo fosse um array

// ✅ Linha 1:
// const numeros = Array.from({ length: 6 }, (_, i) => i + 6);
// Essa linha está criando um array com 6 números, começando em 6 até 11.

// Vamos quebrar por partes:
// 👉 Array.from({ length: 6 }, ...)
// Array.from() é um método do JavaScript que cria um novo array a partir de:

// um objeto tipo array (no caso: { length: 6 }, ou seja, um array com 6 posições vazias);

// uma função de mapeamento, que define o valor de cada item.

// 👉 (_, i) => i + 6
// Esta é a função de mapeamento usada por Array.from().

// Os parâmetros são:

// _: o valor atual, que aqui é ignorado (por isso o underline).

// i: o índice do item (0, 1, 2, 3, 4, 5).

// i + 6 transforma o índice nos valores desejados:

// 0 + 6 = 6

// 1 + 6 = 7

// ...

// 5 + 6 = 11

// 🔍 Resultado:
// numeros = [6, 7, 8, 9, 10, 11];

// ✅ Linha 2–4:

// numeros.map((numero) => {
//     console.log(numero);
// });
// Aqui estamos usando .map() para percorrer o array numeros.

// Para cada valor (chamado numero), executamos console.log(numero).

