function listarCaixas(){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
    var contaSelecionada = localStorage.getItem("contaSelecionada");
    var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/caixas/'+tokenSalvo.token+'/conta/'+contaSelecionada, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                 caixasLista = JSON.parse(xhr.responseText);
                 var listaCaixas = document.getElementById("caixas");
                 caixasLista.forEach( function(caixa){
                     listaCaixas.innerHTML += '<li class="list-group-item"><a href="#" onclick="recuperarCaixa('+caixa.id+'),listarMensagem()">'+caixa.nome+'</a></li>';
              
                 })    
            }else{
                console.log(xhr.responseText);
            }
        }
    xhr.send();  
}

function recuperarCaixa(caixa_id){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
   localStorage.setItem("caixa_id", caixa_id);
    var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/caixas/'+tokenSalvo.token+'/caixa/'+caixa_id, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                 

              }else{
                console.log(xhr.responseText);
            }
        }
    xhr.send();  
}
function recuperarCaixaMover(caixa_id){
   localStorage.setItem("caixaMover", caixa_id);
   
}


function recuperarCaixaBtn(){
    var tokenSalvo = JSON.parse(localStorage.getItem("token"))
     var caixa_id = localStorage.getItem("caixa_id", caixa_id);
    var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://www.henriquesantos.pro.br:8080/api/email/caixas/'+tokenSalvo.token+'/caixa/'+caixa_id, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                var caixasLista = JSON.parse(xhr.responseText);
                 var identidicarCaixa = document.getElementById("caixaEspecifica");
                 
                 identidicarCaixa.innerHTML = "<button class='btn btn-primary  btn-sm' id=''>"+caixasLista.nome+" | "+caixasLista.tipo+"</button>"

              }else{
                console.log(xhr.responseText);
            }
        }
    xhr.send();  
}

