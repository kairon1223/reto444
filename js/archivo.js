const openModal = document.querySelector('.contenedor1');
const modal = document.querySelector('.modal');
const cerrarm = document.querySelector('.cerrarr');

openModal.addEventListener('click',(e)=>{
e.preventDefault();
modal.classList.add('modal--show')
});

cerrarm.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
    });