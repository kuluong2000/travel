const sub_menu = document.querySelector('.sub-menu');
const menu = document.querySelector('.header__menu');
sub_menu.addEventListener('click', ()=>{
    sub_menu.classList.toggle('active');;
    menu.classList.toggle('active');
})
