window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        e.preventDefault();

        var mensagem = olaMundo();

        alert(mensagem);
    }

    function olaMundo() {
        var mensagem = "Olá mundo eu sou uma função";

        return mensagem;
    }
}