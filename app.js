function criptografarTexto() {
    let texto = document.querySelector('textarea').value;
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
    textoDecodificado = document.querySelector('textarea').value;
    if (textoDecodificado.match('[A-Z]')) {
        alert('Apenas letras minúsculas e sem acento')
    } else {
        let textoDescodificado = textoDecodificado.replace(/UFAT/gi,"u")
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
    resultado.style.display = "block";
    reultado.textContent = " ";
}
