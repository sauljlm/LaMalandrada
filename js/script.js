const btnProyecto = document.querySelector('#btn-proyecto');
const btnBlog = document.querySelector('#btn-blog');
const contPost = document.querySelector('.container-posts');
const contProject = document.querySelector('.project');


btnBlog.addEventListener('click', (e)=> {
  e.preventDefault();
  contProject.classList.add('hide');
  btnBlog.classList.add('menuitem--active');
  btnProyecto.classList.remove('menuitem--active');
  contPost.classList.remove('hide');
});

btnProyecto.addEventListener('click', (e)=> {
  e.preventDefault();
    contPost.classList.add('hide');
    btnProyecto.classList.add('menuitem--active');
    btnBlog.classList.remove('menuitem--active');
    contProject.classList.remove('hide'); 
});
