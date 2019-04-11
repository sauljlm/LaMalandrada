const btnProyecto = document.querySelector('.proyectos');
const btnMiembros = document.querySelector('.miembros');
const contPost = document.querySelector('.cont-posts');
const contAboutUs = document.querySelector('.cont-About-us');

let hola = false;
btnMiembros.addEventListener('click', (e)=> {
  e.preventDefault();
  contAboutUs.classList.toggle('hide');
  contPost.classList.toggle('hide');
  if (!hola) {
    btnProyecto.innerHTML = 'blog';
    hola = true;
  } else {
    btnProyecto.innerHTML = 'PROYECTO';
    hola = false;
  }
});
btnProyecto.addEventListener('click', (e)=> {
  e.preventDefault();
  contAboutUs.classList.toggle('hide');
  contPost.classList.toggle('hide');
  if (!hola) {
    btnProyecto.innerHTML = 'blog';
    hola = true;
  } else {
    btnProyecto.innerHTML = 'PROYECTO';
    hola = false;
  }
});