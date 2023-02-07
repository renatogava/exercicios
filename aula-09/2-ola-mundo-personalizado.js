window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var nome = document.getElementById("txtNome").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;

                alert(resposta);
            }
        });

        xhr.open("GET", "http://localhost:58735/api/aula7/olaMundoPersonalizado?nome=" + nome);

        xhr.send();
    }
}