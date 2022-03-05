// Definindo funções do usuario

function cadastrarUsuario(loginF, nomeF, sobrenomeF, cpfF, email_secundarioF, fotoF, senhaF){
    var obj = {
            login: loginF,
            nome: nomeF,
            sobrenome: sobrenomeF,
            cpf: cpfF,
            email_secundario: email_secundarioF,
            foto: fotoF,
            senha: senhaF
        }
        sessionStorage.setItem("foto", fotoF);
        var json = JSON.stringify(obj);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://www.henriquesantos.pro.br:8080/api/email/usuarios/new', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                console.log(xhr.responseText);
                mostrarModal("Usuário cadastrado")
            }else if(xhr.status == 400){
                mostrarModal("Usuário não pode ser cadastrado")
            }
        }
        xhr.send(json);     
       
}

function fazerLogin(loginFL, senhaFL){
    var obj = {
        login: loginFL,
        senha: senhaFL
    }
    var json = JSON.stringify(obj);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://www.henriquesantos.pro.br:8080/api/email/usuarios/login', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            localStorage.setItem("token", xhr.responseText);
            tokenUsuario = JSON.parse(sessionStorage.getItem("token"));
            mostrarModal("Login foi efetuado");
            location.href = "html/contas.html"

        }else{
            mostrarModal("Não foi possível fazer login")
       }
    }
      
      xhr.send(json);
}

function listarTodosUsuarios(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/usuarios', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            listaUsuarios = JSON.parse(xhr.responseText);
        }else if(xhr.status == 400){
            console.log("Não foi possível listar os usuários");
        }
    }
    xhr.send(); 
    return listaUsuarios;
}

function recuperarUsuario(){

    var tokenUsuario = JSON.parse(localStorage.getItem("token"));
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/usuarios/'+tokenUsuario.token, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
           var usuarioRecuperado = JSON.parse(xhr.responseText);
            sessionStorage.setItem("usuario", usuarioRecuperado.nome+usuarioRecuperado.sobrenome);
            sessionStorage.setItem("login", usuarioRecuperado.login);
            sessionStorage.setItem("email", usuarioRecuperado.email_secundario);

        }else if(xhr.status == 400){
            console.log("Usuário não pode ser recuperado")
        }
    }
    xhr.send(); 

}

//Funções utilitárias 
function testarValores(valor1, valor2){
  
    if(valor1 == valor2){
        return true
    }else{
        return false
    }
}

function sair(){
    sessionStorage.clear();
    localStorage.clear();
    location.href = "../index.html"
}