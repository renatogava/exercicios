window.onload = function (e) {
    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    var form = document.getElementById("frmEsqueceu");

    form.onsubmit = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {

            var spnErro = document.getElementById("spnErro");

            spnErro.innerText = "E-mail obrigatório.";

            spnErro.style.display = "block";

            setTimeout(function () {
                spnErro.style.display = "none";
            }, 5000);
        }
        else {

            esqueceuSenha(email)
        }
    };

    function esqueceuSenha(email) {
        alert("Esqueceu Senha");
    }
}