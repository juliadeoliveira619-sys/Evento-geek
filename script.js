document.getElementById("formInscricao").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    alert("Parabéns, " + nome + "! Sua inscrição para o Evento Geek foi realizada com sucesso!");
    this.reset();
});
