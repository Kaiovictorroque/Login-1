function validarFormulario() {
    // Pega os valores dos campos do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verifica se os campos foram preenchidos
    if (username == "" || password == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    // Se tudo estiver correto, retorna true
    return true;
  }
  