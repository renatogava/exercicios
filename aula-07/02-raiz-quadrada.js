window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var numeroTexto = document.getElementById("txtNumero").value;

        var numero = parseInt(numeroTexto);

        var mensagem = calcularRaizQuadrada(numero);

        alert(mensagem);
    }

    function calcularRaizQuadrada(numero) {

        var calculo = numero * numero;

        return calculo;
    }
}