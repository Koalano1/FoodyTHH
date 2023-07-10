const headerTop = document.querySelector('.header__top');
const foodyVn = document.querySelector('.foody__vn');
window.addEventListener('scroll' , () => {
    foodyVn.classList.toggle('p-fixed', window.scrollY > 34);
    foodyVn.classList.toggle('top-0', window.scrollY > 34);
});