function cadastrarConta(enderecoEmailCadC, tipoCadC, fotoCadC){
    var tokenrecuperado = JSON.parse(localStorage.getItem("token"));
    var obj = {
            endereco : enderecoEmailCadC,
            tipo: tipoCadC,
            foto: fotoCadC,
            token : tokenrecuperado.token
        }
        sessionStorage.setItem("foto", fotoCadC);
        var json = JSON.stringify(obj);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://www.henriquesantos.pro.br:8080/api/email/contas/new', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                console.log(xhr.responseText);
                mostrarModal("Conta cadastrada")
            }else{
                mostrarModal("Conta não pode ser cadastrada")

            }
        }
        xhr.send(json);     
       
}

function listarContasUsuario(){
    var tokenrecuperado = JSON.parse(localStorage.getItem("token"));
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/contas/'+tokenrecuperado.token, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var contas = document.getElementById("contas");
            var contaslista = JSON.parse(xhr.responseText);
            contaslista.forEach(function(conta){
                contas.innerHTML +="<li class='list-group-item'><a href='mail.html'  onclick='recuperarContaEspecifica("+conta.id+")'>"+conta.endereco+"</a></li>";
            });
        }else{
            mostrarModal("Conta não pode ser cadastrada")

        }
    }

    xhr.send();     
}

function recuperarContaEspecifica(conta_id){
    var tokenrecuperado = JSON.parse(localStorage.getItem("token"));
    localStorage.setItem("contaSelecionada", conta_id)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/contas/'+tokenrecuperado.token+'/conta/'+conta_id, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    
           sessionStorage.setItem("emailSelecionado", xhr.responseText);
           location.href = "mail.html"            
        }else{
            
        }
    }
    xhr.send();
}

function listarTodasContas(){
        var xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/contas', true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    lista = JSON.parse(xhr.responseText);
                    var destinatario = document.getElementById("destinatario");
                    var destinatarioCC = document.getElementById("CC");
                    var destinatarioCCO = document.getElementById("CCO");

                    lista.forEach(function(usuario){
                        destinatario.innerHTML +="<option value="+usuario.id+">"+usuario.email_usuario.login+" &lsaquo;"+usuario.endereco+"&rsaquo; </option>"
                        destinatarioCC.innerHTML +="<option value="+usuario.id+">"+usuario.email_usuario.login+" &lsaquo;"+usuario.endereco+"&rsaquo; </option>"
                
                        destinatarioCCO.innerHTML +="<option value="+usuario.id+">"+usuario.email_usuario.login+" &lsaquo;"+usuario.endereco+"&rsaquo; </option>"
                
                    })
                }
            }
        xhr.send();  


}