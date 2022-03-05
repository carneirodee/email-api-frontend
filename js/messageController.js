var listaMensagem = document.getElementById("listaMensagens");

var enviarmensagem = document.getElementById("escreverEmail");

var excluirBtn = document.getElementById("excluirBtn")

var caixasDrop = document.getElementById("caixasDrop");

if(listaMensagem != null){
    listarTodasMensagensCaixa()
}

if(enviarmensagem !=null){
    enviarmensagem.addEventListener('submit', function(e){
        e.preventDefault();
        var assunto = document.getElementById("assunto").value;
        var destinatario = document.getElementById("destinatario").options[0].value;
        var destinatario_cc = document.getElementById("CC").options[0].value;
        var destinatario_cco = document.getElementById("CCO").options[0].value;
        var corpo = document.getElementById("corpo").value;
        enviarMensagem(assunto, corpo, destinatario,destinatario_cc, destinatario_cco)
    })
}

if( excluirBtn != null){
    excluirBtn.addEventListener('click', function(e){
        e.preventDefault();
        excluirDiversas()
        
    
    })
}

if(caixasDrop != null){
    droparCaixas()
}