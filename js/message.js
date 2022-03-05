function enviarMensagem( assuntoP, corpoP, destinatarios_paraP, destinatarios_ccP, destinatarios_ccoP){
    var tokenrecuperado = JSON.parse(localStorage.getItem("token"));
    var conta_idP = localStorage.getItem('contaSelecionada')
    var obj = {
        token: tokenrecuperado.token,
        conta_id: conta_idP,
        assunto: assuntoP,
        corpo: corpoP,
        destinatarios_para: destinatarios_paraP,
        destinatarios_cc: destinatarios_ccP,
        destinatarios_cco: destinatarios_ccoP
        }
        var json = JSON.stringify(obj);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://www.henriquesantos.pro.br:8080/api/email/mensagens_email/enviar', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                console.log(xhr.responseText);
                mostrarModal("Mensagem enviada");
            }else{
                mostrarModal("Mensagem não pode ser enviada");

            }
        }
        xhr.send(json);     
}

function listarTodasMensagensCaixa(){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
    var caixa_id = localStorage.getItem("caixa_id");
    var conta_id = localStorage.getItem("contaSelecionada")

     var xhr = new XMLHttpRequest();
         xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/mensagens_email/'+tokenSalvo.token+'/conta/'+conta_id+'/caixa/'+caixa_id, true);
         xhr.setRequestHeader("Content-type", "application/json");
         xhr.onreadystatechange = function () {
             if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                  caixaMensagem = JSON.parse(xhr.responseText);
                  var listaMensagem = document.getElementById("listaMensagens");
                  caixaMensagem.forEach(function(mensagem){
                      listaMensagem.innerHTML += "<td><input class='messageCheckbox'type='checkbox' value="+mensagem.id+" ></td><td><a href='#' data-toggle='modal' data-target='#exampleModalLong' onclick='recuperarMensagemEspecifica("+mensagem.id+")'>"+mensagem.assunto+"</a></td><td>"+mensagem.corpo+"</td><td class='lixeira'><a href='#'  onClick='excluirMensagem("+mensagem.id+")'><img src='https://img.icons8.com/plasticine/20/000000/delete.png'></a></td><td class='mover'><a href='#'  onClick='moverMensagem("+mensagem.id+")'><img src='https://img.icons8.com/plasticine/20/000000/expand.png'></a></td>"

                    })
                
     
             }else{
                 console.log(xhr.responseText);
             }
         }
     xhr.send();  
  return caixas;
}

function recuperarMensagemEspecifica(mensagem_id){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"));
    localStorage.setItem("mensagem_id", mensagem_id);
     var xhr = new XMLHttpRequest();
         xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/mensagens_email/'+tokenSalvo.token+'/mensagem/+'+mensagem_id, true);
         xhr.setRequestHeader("Content-type", "application/json");
         xhr.onreadystatechange = function () {
             if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                  mensagem = JSON.parse(xhr.responseText);
                  mostrarMensagem(mensagem[0].assunto, mensagem[0].corpo)
     
             }else{
                 console.log(xhr.responseText);
             }
         }
     xhr.send();  
  return caixas;
}

function excluirMensagem(mensagem_id){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
    var caixa_id = localStorage.getItem("caixa_id");
    var conta_id = localStorage.getItem("contaSelecionada")
     var xhr = new XMLHttpRequest();
         xhr.open("DELETE", 'http://www.henriquesantos.pro.br:8080/api/email/mensagens_email/'+tokenSalvo.token+'/conta/'+conta_id+'/caixa/'+caixa_id+'/mensagem/'+mensagem_id, true);
         xhr.setRequestHeader("Content-type", "application/json");
         xhr.onreadystatechange = function () {
             if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
              mostrarModal("Mensagem foi excluida");
     
             }else{
              mostrarModal("Mensagem não pode ser excluída")
             }
         }
     xhr.send();  
}
function excluirDiversas(){
    var inputElements = document.getElementsByClassName('messageCheckbox');
      for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
                excluirMensagem(inputElements[i].value);
                location.reload()
          }
    }
    }

function droparCaixas(){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
    var contaSelecionada = localStorage.getItem("contaSelecionada");
    var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/caixas/'+tokenSalvo.token+'/conta/'+contaSelecionada, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                 caixasLista = JSON.parse(xhr.responseText);
         
                 var listaCaixas = document.getElementById("caixasDrop");
                 caixasLista.forEach( function(caixa){
                     listaCaixas.innerHTML += '<li class="dropdown-item" href="#" onClick="recuperarCaixaMover('+caixa.id+')" >'+caixa.nome+'</li>';
                     moverDiversas()
                 })    
                 listaCaixas.innerHTML += '<button class="btn btn-info btn-sm btn-block" onClick="moverDiversas()">Mover</button>'
            }else{
                console.log(xhr.responseText);
            }
        }
    xhr.send();  
}


function moverMensagem(mensagem_id){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
    var caixa_id = localStorage.getItem("caixa_id");
    var conta_id = localStorage.getItem("contaSelecionada")
    var  caixa_destino_id = localStorage.getItem("caixaMover")
     var xhr = new XMLHttpRequest();
         xhr.open("PATCH", 'http://www.henriquesantos.pro.br:8080/api/email/mensagens_email/'+tokenSalvo.token+'/conta/'+conta_id+'/caixa/'+caixa_id+'/mensagem/'+mensagem_id+'/destino/'+caixa_destino_id, true);
         xhr.setRequestHeader("Content-type", "application/json");
         xhr.onreadystatechange = function () {
             if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
              mostrarModal("Mensagem foi movida");
     
             }else{
              mostrarModal("Mensagem não pode ser movida")
             }
         }
     xhr.send();  
}

function moverDiversas(){
    var inputElements = document.getElementsByClassName('messageCheckbox');
      for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
                moverMensagem(inputElements[i].value);
                location.reload()
          }
    }
}
