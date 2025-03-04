function converter() {
    const inputDistancia = document.getElementById ("inputDistancia")
    const distancia = Number (inputDistancia.value)

  
    const mm = distancia * 1000
    const cm = mm /10
    const dm = cm / 10
    const m = distancia
    const dam = m /10
    const hm = dam / 10
    const km = hm / 10
    console.log(mm)

    document.getElementById("kilometros").textContent = `A medida em kilometros é: ${km}km.`
    document.getElementById("hectomeros").textContent = `A medida em hectomeros é: ${hm}hm.`
    document.getElementById("decametros").textContent = `A medida em decametros é: ${dam}dam.`
    document.getElementById("centimetro").textContent = `A medida em centimetro é: ${cm}cm.`
    document.getElementById("decimetro").textContent = `A medida em decimetro é: ${dm}dm.` 
    document.getElementById("milimetros").textContent = `A medida em milimetros é: ${mm}mm.`

    inputDistancia.value = ""



}
