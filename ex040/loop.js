let contador = 30;

while (contador >= 1) {
    if (contador % 4 === 0) {
        console.log(`{${contador}}`);
    } else {
        console.log(contador);
    }

    contador--;
}
