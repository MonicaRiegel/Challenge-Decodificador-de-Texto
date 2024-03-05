function criptografarTexto() {
    let texto = document.getElementById('texto').value;
    if (texto.match('[A-Z]')){
        alert('Apenas letras minúsculas e sem acento')
    } else {
        let textoDecodificado = texto.replace(/A/gi,"ai")
        .replace(/E/gi,"enter")
        .replace(/I/gi,"imes")
        .replace(/O/gi,"obter")
        .replace(/U/gi,"ufat");

         document.getElementById('resultado').value = textoDecodificado;  
         telaResultado(); 
    }
}


function descriptografarTexto() {
    textoResposta = document.getElementById('texto').value;
    if (textoResposta.match('[A-Z]')) {
        alert('Apenas letras minúsculas e sem acento')
    } else {
        let textoDescodificado = textoResposta.replace(/UFAT/gi,"u")
        .replace(/OBTER/gi,"o")
        .replace(/IMES/gi,"i")
        .replace(/ENTER/gi,"e")
        .replace(/AI/gi,"a");

        document.getElementById('resultado').value = textoDescodificado;
        telaResultado();
    }
}


function telaResultado() {
    let inicio = document.getElementById('telainicial');
    inicio.style.display = "none";
    resposta.style.display = "block";
    reultado.textContent = " ";
}

function copiar() {
    let textoCopiado = document.getElementById('resultado').value;
    document.getElementById('texto').value = textoCopiado;
}

