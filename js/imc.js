const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const IMC = (peso / (altura * altura)).toFixed(1)

        let classificação = ''

        if (IMC < 18.5) {
            classificação = 'abaixo do peso.'
        }else if (IMC < 25) {
            classificação = 'com peso ideal. Parabéns'
        }else if (IMC < 30) {
            classificação = ' levemente acima do peso.'
        }else if (IMC < 35) {
            classificação = 'com obesidade grau I'
        }else if (IMC < 40) {
            classificação = 'com obesidade grau II'
        }else {
            classificação= 'com obesidade grau III. Cuidado!'
        }

            resultado.textContent = `${nome} seu IMC é ${IMC} e você está ${classificação}`

    }else {
        resultado.textContent = 'Favor colocar todos os valores!'
    }
}

calcular.addEventListener('click', imc)
