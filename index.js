
const contarVogais = (str) =>{
    str = str.toLowerCase()

    const vogais = "aeiou"

    let contagem = 0;

    for (let i = 0; i < str.length; i++){
        if (vogais.includes(str[i])) {
            contagem++;
        }
    }
    return contagem;
}




const atualizarResultado = () => {
    const inputSring = document.getElementById('inputString').value

    const resultado = contarVogais(inputSring)

    document.getElementById('result').innerText = `o numero de vogais em '${inputSring}' é: ${resultado}`;
}

document.getElementById('countButton').addEventListener('click' , atualizarResultado)