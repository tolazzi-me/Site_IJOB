

function img1 (){
    document.getElementById("trocaImg").src="progam_futuras.PNG";
}

function img2 (){
    document.getElementById("trocaImg").src="program_futuras2.PNG";
}

    $( "#form_enviar" ).click(function() {
        var email = $("#form_email").val();
        var nome = $("#form_nome").val();
        var mensagem = $("#form_mensagem").val();
        var validar = validateEmail (email)
        if (nome && validar && mensagem){
            payload = {name:nome, email:email, message:mensagem}
            $.ajax({
                type: "POST",
                url: "localhost:3000/mail",
                data: JSON.stringify(payload),
                success: function(data) { alert('data: ' + data); },
                contentType: "application/json",
                dataType: 'json'
              });
        }
      });

      function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
