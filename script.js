document.getElementByid("formincriçao").addEventListener("submit",function(event) {
  event.preventDefault();//Evita que a pagina recarregue 
const nome = document.getElementByid("nome").value;
  alert("Parabéns ,"+nome +"!sua inscrição parao evento geek foi realizada com sucesso!");
  this.reset();
});
