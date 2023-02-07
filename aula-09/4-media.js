window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var primeiroNumeroTexto = document.getElementById("txtPrimeiroNumero").value;

        var segundoNumeroTexto = document.getElementById("txtSegundoNumero").value;

        var primeiroNumero = parseInt(primeiroNumeroTexto);

        var segundoNumero = parseInt(segundoNumeroTexto);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;

                alert(resposta);
            }
        });

        xhr.open("GET", "http://localhost:58735/api/aula7/media?numero1=" + primeiroNumero + "&numero2=" + segundoNumero);

        xhr.send();
    }
}