//Variaveis de elementos html
var cadastroContaForm = document.getElementById("cadastroContaForm");

var contasDiv = document.getElementById("contas");

var emailConta = document.getElementById("emailDropDownConta");

var destinatario = document.getElementById("destinatario");


//Funções 
if(cadastroContaForm != null){
    cadastroContaForm.addEventListener("submit", function(e){
        e.preventDefault()
    var enderecoEmailCadConta = document.getElementById("email").value;
    var tipoCadConta = document.getElementById("tipoCadConta").options[0].value;
    var fotoCadConta = document.getElementById("fotoCadConta").value;
        cadastrarConta(enderecoEmailCadConta, tipoCadConta, fotoCadConta);
    })
}

if(contasDiv != null){
    listarContasUsuario()
    contasDiv.addEventListener('click', function(e){
    listarContasUsuario()
    location.href = "mail.html"
   })
}

if(emailConta != null){
    $(document).ready(function() {
        setInterval(function() {
                if(!location.hash) {
                    location = window.location + '#loaded';
                    recuperarContaEspecifica()
                }
        
        }, 300);
      });
    var UsuarioEmail = sessionStorage.getItem("emailSelecionado");
         emailConta.innerHTML = ' '+UsuarioEmail


}

if(destinatario != null){
    destinatario.addEventListener('focus', function(e){
        listarTodasContas()

    })
}