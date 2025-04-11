const btn = document.getElementById("btn")

//MÉTODO 1 COM FUNÇÃO NORMAL
// function CalcularMedia() {
//      const inputNota1 = document.getElementById("inputNota1")
//      const inputNota2 = document.getElementById ("inputNota2")

//      const Nota1 = Number (inputNota1.value)
//      const Nota2 = Number (inputNota2.value)
     
//      let media = (Nota1 + Nota2)/2
//      document.getElementById("Media").textContent = `A nota final é ${media}`

//      inputNota1.value = ""
//      inputNota2.value = ""
// }


//METODO COM ARROW FUNCTION com onclick ao invés do addEventListener
btn.onclick = ()=>{
     const inputNota1 = document.getElementById("inputNota1")
     const inputNota2 = document.getElementById ("inputNota2")

     const Nota1 = Number (inputNota1.value)
     const Nota2 = Number (inputNota2.value)
     
     let media = (Nota1 + Nota2)/2
     document.getElementById("Media").textContent = `A nota final é ${media}`

     inputNota1.value = ""
     inputNota2.value = ""
}
