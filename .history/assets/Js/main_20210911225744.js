const sub_menu = document.querySelector('.sub-menu');
const menu = document.querySelector('.header__menu');
sub_menu.addEventListener('click', ()=>{
    sub_menu.classList.toggle('active');;
    menu.classList.toggle('active');
})
// slick
$('.happy-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});
