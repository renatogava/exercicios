window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    txtEmail.focus();

    var form = document.getElementById("frmLogin");

    form.onsubmit = function (e) {

        e.preventDefault();

        if (txtEmail.value == "") {

            var mensagem = "Os campos acima são obrigatórios.";

            exibirMensagemErro(mensagem);
        }
        else if (txtSenha.value == "") {

            var mensagem = "Os campos acima são obrigatórios.";

            exibirMensagemErro(mensagem);
        }
        else {
            fazerLogin(txtEmail.value, txtSenha.value);
        }
    };

    function fazerLogin(email, senha) {

        var data = JSON.stringify({
            "email": email,
            "senha": senha
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var loginResult = JSON.parse(this.responseText);

                if (loginResult.sucesso) {
                    alert('logou!');
                }
                else {
                    exibirMensagemErro(loginResult.mensagem);
                }
            }
        });

        xhr.open("POST", "http://localhost:58735/api/usuario/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }
}