
/*===== BARRA DE NAVEGACAO ATIVA  =====*/
const navAtiva = document.querySelectorAll('.nav_descricao--link'); //container com todas as classes dos links da nav

function ativa() {
  navAtiva.forEach(link => link.classList.remove('active'))
  this.classList.add('active')
};

for (i = 0; i < navAtiva.length; i++) {
  navAtiva[i].addEventListener("click", ativa)
}

function refresh () {
  windos.location.reload()
}

// if (navAtiva[0] === ) {

// }



/*=====  ANIMAÇÃO SCROLL =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/*===== SCROLL HOME =====*/
sr.reveal('.home_titulo', {})
sr.reveal('.home_botao', {})
sr.reveal('home_marcas', {})
sr.reveal('.nav_marcas--items', {})
sr.reveal('.home_foto', {})

/*===== SCROLL ABOUR =====*/
sr.reveal('.about_titulo', {})
sr.reveal('.about_subtitulo', {})
sr.reveal('.about_texto', {})
sr.reveal('.about_botao', {})
sr.reveal('.about_foto', {})
sr.reveal('.ab', {})

/*===== SCROLL SKILLS =====*/
sr.reveal('.skills_titulo', {})
sr.reveal('.skills_subtitulo', {})
sr.reveal('.skills_stack', {})
sr.reveal('.skills_texto', {})
sr.reveal('.skill_image', {})

/*===== SCROLL PROJECTOS =====*/
sr.reveal('.pojetos_titulo', {})
sr.reveal('.projetos_imagens', {})

/*===== SCROLL CONTACT =====*/
sr.reveal('.contato_titulo', {})
sr.reveal('.contato_texto', {})
sr.reveal('.contato_container', {})
sr.reveal('.contato_botao-link', {})
sr.reveal('.skill_image', {})