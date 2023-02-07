window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var precoUnitario = document.getElementById("txtPrecoUnitario").value;

        var quantidade = document.getElementById("txtQuantidade").value;

        var valorDadoPeloCliente = document.getElementById("txtValorDadoCliente").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;

                alert(resposta);
            }
        });

        xhr.open("GET", "http://localhost:58735/api/aula7/troco?precoUnitario=" + precoUnitario + "&quantidade=" + quantidade + "&valorPago=" + valorDadoPeloCliente);

        xhr.send();
    }
}