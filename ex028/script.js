const form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseFloat(document.getElementById('height').value)

    const width = parseFloat(document.getElementById('width').value)

    const result = document.getElementById('result')

    document.getElementById('infos').classList.remove('hidden')

    let mensagem = ''

    const calculate = ()=>{
        return height*width
    }

    const res = calculate()

    if(res>500){
        mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO MASTER`
    }else if(res>100){
        mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO POPULAR`
    }else{
         mensagem = `A área do seu terreno é ${res}m², portanto é um TERRENO PREMIUM`
    }

    result.textContent = mensagem
})