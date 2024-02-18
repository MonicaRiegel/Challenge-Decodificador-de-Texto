function criptografarTexto() {
    let texto = document.querySelector('input').value;
    if (texto.match('[A-Z]')) {
        var textoDecodificado = texto.replace(/A/gi,"AI")
        .replace(/E/gi,"ENTER")
        .replace(/I/gi,"IMES")
        .replace(/O/gi,"OBTER")
        .replace(/U/gi,"UFAT");

        console.log(textoDecodificado);
    }
}


function descriptografarTexto() {
    textoDecodificado = document.querySelector('input').value;
    if (textoDecodificado.match('[A-Z]')) {
        var textoDescodificado = textoDecodificado.replace(/UFAT/gi,"U")
        .replace(/OBTER/gi,"O")
        .replace(/IMES/gi,"I")
        .replace(/ENTER/gi,"E")
        .replace(/AI/gi,"A");

        console.log(textoDescodificado);
    }
}



