document.getElementByid("formIncricao").addEventListener("submit",function(event) {
  event.preventDefault();//Evita que a pagina recarregue 
const nome = document.getElementByid("nome").value;
  alert ("Parabéns ,"+ nome +"!sua inscrição para o Evento Geek foi realizada com sucesso!");
  this.reset();
});
