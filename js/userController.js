


//Variaveis de elementos html

var cadastroDeUsuarioFormulario = document.getElementById("cadastroUsuarioForm");

var loginFormulario = document.getElementById("loginForm");

var nomeUsuarioContas = document.getElementById("nomeUsuario");

var nomeUsuarioDropDownContas = document.getElementById("nomeDropDownContas");

var emailUsuarioDropDownContas = document.getElementById("emailDropDownContas");

var btSair = document.getElementById("sair");

var usuarioValidado = sessionStorage.getItem('usuario');

//Listeners dos elementos
if(cadastroDeUsuarioFormulario != null){
    cadastroDeUsuarioFormulario.addEventListener("submit", function(e){
        e.preventDefault();
        var login = document.getElementById("loginCadU").value;
        var nome = document.getElementById("nomeCadU").value;
        var sobrenome = document.getElementById("sobrenomeCadU").value;
        var CPF = document.getElementById("CPFCadU").value;
        var email = document.getElementById("emailSecundarioCadU").value;
        var foto = document.getElementById("fotoCadU").value;
        var senha = document.getElementById("senhaCadU").value;
        var senhaRepetida = document.getElementById("senhaRepetidaCadU").value;
      
       if(testarValores(senha, senhaRepetida)){
        if( cadastrarUsuario(login, nome, sobrenome, CPF, email, foto, senha)){
            //mostrarModal("Cadastrado")
            alert("Cadastrado")
        }else{
            //mostrarModal("Não cadastrado")
            alert("Não cadastrado")
        }
       }else{
           //mostrarModal("Senhas repetidas")
           alert(("Senhas repetidas"))
       }
    })
}

if(loginFormulario != null){
    loginFormulario.addEventListener("submit", function(e){
        e.preventDefault();
        var loginEnter = document.getElementById("loginLogar").value;
        var senhaEnter = document.getElementById("senhaLogar").value;
        
        fazerLogin(loginEnter, senhaEnter);

    })


}

if(nomeUsuarioContas != null){
    recuperarUsuario()
    $(document).ready(function() {
        setInterval(function() {
                if(!location.hash ) {
                    location = window.location + '#usuario';
                    location.reload();
                }
        
        }, 300);
      });
      
      
        var UsuarioInfo = sessionStorage.getItem("usuario");
        nomeUsuarioContas.innerHTML = ''+UsuarioInfo;
    }
    

if(nomeUsuarioDropDownContas != null){
    var UsuarioLogin = sessionStorage.getItem("login");
         nomeUsuarioDropDownContas.innerHTML = 'Olá '+UsuarioLogin
}

if(emailUsuarioDropDownContas != null){
    
    var UsuarioEmail = sessionStorage.getItem("email");
         emailUsuarioDropDownContas.innerHTML ='Email: '+UsuarioEmail
}

if(btSair != null){
    btSair.addEventListener("click", function(e){
        sair()

    })
}