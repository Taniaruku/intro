 var swiper = new Swiper(".reviews-slider", {
  loop:true,
  
  slidesPerView: "auto",
  
      grabCursor: true,
      spaceBetween: 30,
       pagination: {
        el: ".swiper-pagination",
      },

      breakpoints: {

        768: {
          slidesPerView: 1,
         
        },

        1200: {
          slidesPerView: 2,
          
        },
      },
    });


 let slides = document.querySelectorAll('.reviews .box-container .box');

 let index = 0;

 function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
 }


  function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
 }



  new WOW().init();


  $(document).ready( function(){

var mixer = mixitup('#projects', {
  animation: {
    duration: 300
  }
});

});