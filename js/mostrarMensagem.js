function mostrarMensagem(assunto, corpo){

    document.getElementById("exampleModalLong").innerHTML= '<div class="modal-dialog" role="document">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+
          '<h5 class="modal-title"> Assunto: '+assunto
          +'</h5>'+
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">'+
            '<span aria-hidden="true">&times;</span>'+
          '</button>'+
        '</div>'+
        '<div class="modal-body">'+
          '<p>Mensagem : '+corpo+'</p>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-secondary" aria-hidden="true" data-dismiss="modal">Close</button>'+
        '</div>'+
      '</div>'

}
