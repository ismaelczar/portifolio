
/*===== BARRA DE NAVEGACAO ATIVA  =====*/
const navAtiva = document.querySelectorAll('.nav_descricao--link'); //container com todas as classes dos links da nav

function ativa() {
  navAtiva.forEach(link => link.classList.remove('active'))
  this.classList.add('active')
};

navAtiva.forEach(elemento => {
  elemento.addEventListener('click', ativa)
})

