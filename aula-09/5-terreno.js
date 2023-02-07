window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var largura = document.getElementById("txtLargura").value;

        var comprimento = document.getElementById("txtComprimento").value;

        var valorM2 = document.getElementById("txtValorM2").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;

                alert(resposta);
            }
        });

        xhr.open("GET", "http://localhost:58735/api/aula7/terreno?largura=" + largura + "&comprimento=" + comprimento + "&valorM2=" + valorM2);

        xhr.send();
    }
}