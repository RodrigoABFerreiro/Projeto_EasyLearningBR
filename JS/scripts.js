$('.carousel').carousel({
    interval: 5
})

function validar_dados() {
    var nome = form01.form_nome.value
    var email = form01.form_email.value
    var assunto = form01.form_assunto.value
    var mensagem = form01.form_mensagem.value

    if (form_nome == "") {
      alert("Preencha o campo Nome corretamente.")
      form01.nome.focus()
      return false
    }

    if (email == "") {
      alert("Preencha o campo E-Mail corretamente.")
      form01.email.focus()
      return false
    }

    if (assunto == "") {
      alert("Preencha o campo Assunto corretamente.")
      form01.senha.focus()
      return false
    }

    if (form_mensagem == "") {
      alert("Preencha o campo Mensagem corretamente.")
      form01.smensagem.focus()
      return false
    }
  }