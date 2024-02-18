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






