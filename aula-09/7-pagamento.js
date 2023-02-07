window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var nomeFuncionario = document.getElementById("txtNome").value;

        var valorHora = document.getElementById("txtValorHora").value;

        var quantidadehHoras = document.getElementById("txtHorasTrabalhadasMes").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;

                alert(resposta);
            }
        });

        xhr.open("GET", "http://localhost:58735/api/aula7/pagamento?nomeFuncionario=" + nomeFuncionario + "&valorHora=" + valorHora + "&qtdeHorasTrabalhadas=" + quantidadehHoras);

        xhr.send();
    }
}