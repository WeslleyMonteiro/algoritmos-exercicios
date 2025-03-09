function vaiMorrer() {
    const inputCigarro = document.getElementById("inputCigarro")
    const inputAnos = document.getElementById("inputAnos")

    const cigarro = Number (inputCigarro.value)
    const anos = Number (inputAnos.value)

    //const morte = cigarro * -10
    //const ano = anos*365

    const totalMinutos = (cigarro* -10) * (anos*365)
    const totalDias = totalMinutos/ 1440
    document.getElementById("res").textContent = `Você perdeu ${totalDias} dias de vida.`

    inputCigarro.value = ""
    inputAnos.value = ""
}