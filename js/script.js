const btnProyecto = document.querySelector('.proyectos');
const btnMiembros = document.querySelector('.miembros');
const contPost = document.querySelector('.container-posts');
const contAboutUs = document.querySelector('.cont-About-us');

let state = false;
btnMiembros.addEventListener('click', (e)=> {
  e.preventDefault();
  contAboutUs.classList.toggle('hide');
  contPost.classList.toggle('hide');
  if (!state) {
    btnProyecto.innerHTML = 'blog';
    state = true;
  } else {
    btnProyecto.innerHTML = 'PROYECTO';
    state = false;
  }
});
btnProyecto.addEventListener('click', (e)=> {
  e.preventDefault();
  contAboutUs.classList.toggle('hide');
  contPost.classList.toggle('hide');
  if (!state) {
    btnProyecto.innerHTML = 'blog';
    state = true;
  } else {
    btnProyecto.innerHTML = 'PROYECTO';
    state = false;
  }
});