function criptografarTexto() {
    let texto = document.querySelector('textarea').value;
    if (texto.match('[A-Z]')) {
        let textoDecodificado = texto.replace(/A/gi,"AI")
        .replace(/E/gi,"ENTER")
        .replace(/I/gi,"IMES")
        .replace(/O/gi,"OBTER")
        .replace(/U/gi,"UFAT");

        document.getElementById('resultado').value = textoDecodificado;   
    }
}


function descriptografarTexto() {
    textoDecodificado = document.querySelector('textarea').value;
    if (textoDecodificado.match('[A-Z]')) {
        let textoDescodificado = textoDecodificado.replace(/UFAT/gi,"U")
        .replace(/OBTER/gi,"O")
        .replace(/IMES/gi,"I")
        .replace(/ENTER/gi,"E")
        .replace(/AI/gi,"A");

        document.getElementById('resultado').value = textoDescodificado;
    }
}



