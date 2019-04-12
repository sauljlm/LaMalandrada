const btnProyecto = document.querySelector('.proyectos');
const btnMiembros = document.querySelector('.miembros');
const contPost = document.querySelector('.container-posts');
const contAboutUs = document.querySelector('.cont-About-us');
const contProject = document.querySelector('.project');

let state = false;

btnMiembros.addEventListener('click', (e)=> {
  e.preventDefault();
  contAboutUs.classList.toggle('hide');
  contPost.classList.toggle('hide');
  if (!state) { 
    btnMiembros.innerHTML = 'blog';
    state = true;
  } else {
    console.log(state);
    btnMiembros.innerHTML = 'Miembros';
    state = false;
  }
});
btnProyecto.addEventListener('click', (e)=> {
  e.preventDefault();
  contPost.classList.toggle('hide');
  contProject.classList.toggle('hide');  
});