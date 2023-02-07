window.onload = function (e) {
    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    var form = document.getElementById("frmLogin");

    form.onsubmit = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        var senha = document.getElementById("txtSenha").value;

        if (email == "" || senha == "") {

            var spnErro = document.getElementById("spnErro");

            spnErro.innerText = "Os campos acima são obrigatórios.";

            spnErro.style.display = "block";

            setTimeout(function () {
                spnErro.style.display = "none";
            }, 5000);
        }
        else {

            fazerLogin(email, senha);
        }
    };

    function fazerLogin(email, senha) {

        alert("Fez login!");
    }
}