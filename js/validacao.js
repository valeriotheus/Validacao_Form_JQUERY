function validarFormulario() {
    // Validação do Nome
    var nome = document.getElementById("txtnome").value;
    if (nome.length < 5 || nome.length > 50) {
      alert("O nome deve ter entre 5 e 50 caracteres.");
      return false;
    }

    // Validação do E-mail
    var email = document.getElementById("txtemail").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }

    // Validação do Número de Filhos
    var numFilhos = document.getElementById("numidade").value;
    if (numFilhos < 0 || numFilhos > 10) {
      alert("O número de filhos deve ser entre 0 e 10.");
      return false;
    }

    // Validação do Salário
    var salario = document.getElementById("txtsalario").value;
    if (salario < 2000 || salario > 10000) {
      alert("O salário deve estar entre 2000 e 10000.");
      return false;
    }

    // Validação da Data de Admissão
    var dataAdmissao = document.getElementById("txtdataad").value;
    if (!dataAdmissao) {
      alert("A data de admissão é obrigatória.");
      return false;
    }

    // Validação da Rede Social 
    var redeSocial = document.getElementById("txtredesocial").value;
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/*\w\.-]*)*\/?$/;
    if (!urlRegex.test(redeSocial)) {
      alert("Por favor, insira uma URL válida para a rede social.");
      return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
  }