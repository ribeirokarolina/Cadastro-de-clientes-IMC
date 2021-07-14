var tabela = document.querySelector("table");
tabela.addEventListener("dbclick",function(event){
event.target.document.parentNode.classList.add("fadeOut");
});