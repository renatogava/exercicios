window.onload = function (e) {
    var txtNome = document.getElementById("txtNome");

    txtNome.focus();

    var form = document.getElementById("frmCadastro");

    form.onsubmit = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = document.getElementById("txtSobrenome").value;

        var senha = document.getElementById("txtSenha").value;

        var telefone = document.getElementById("txtTelefone").value;

        var email = document.getElementById("txtEmail").value;

        var genero = document.getElementById("slcGenero").value;

        if (nome == "" ||
            sobrenome == "" ||
            senha == "" ||
            telefone == "" ||
            email == "") {

            var spnErro = document.getElementById("spnErro");

            spnErro.innerText = "Os campos acima são obrigatórios.";

            spnErro.style.display = "block";

            setTimeout(function () {
                spnErro.style.display = "none";
            }, 5000);
        }
        else {

            fazerCadastro(nome, sobrenome, email, telefone, senha, genero)
        }
    };

    function fazerCadastro(nome, sobrenome, email, telefone, senha, genero) {

        alert("Fez o cadastro!");
    }
}