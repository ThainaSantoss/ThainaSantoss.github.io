function carregamento(type) {
    var textarea = document.querySelector(".texto_digite"); 
    var meuinput = document.querySelector(".meu-input"); 
    var texto = textarea.value;
    
    if (type === 'criptografar') {
        texto = criptografarTexto(texto);
    } else if (type === 'descriptografar') {
        texto = descriptografarTexto(texto);
    }

    meuinput.value = texto; 
}


function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}


function textocopy() {
    var result = document.querySelector(".meu-input"); 
    if (result) {
        navigator.clipboard.writeText(result.value)
            .then(() => {
                console.log('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    var criptografarBtn = document.getElementById('botao1');
    var descriptografarBtn = document.getElementById('botao2');
    var copiarBtn = document.getElementById('buttoncopiar');

    criptografarBtn.addEventListener('click', function() { carregamento('criptografar'); });
    descriptografarBtn.addEventListener('click', function() { carregamento('descriptografar'); });
    copiarBtn.addEventListener('click', textocopy);
});
