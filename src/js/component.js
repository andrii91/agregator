$(document).ready(function() { 
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  
    $(".loan_input").ionRangeSlider({
        skin: "round",
        grid: false,
        min: 500,
        max: 60000,
        from: 21500,
        step: 500,
        max_postfix: "",
//        prefix: "₴",
         postfix: " ₴",
    });
  
    $(".loan_input").change(function () {
    var $from = $(this);
    var $val = Number($from.val()).toLocaleString();
      $(this).parents('.content').find('.loan_input-text .title').text($val+" ₴")


  })
  
  $('.reviews-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:2
        }
    }
})
  
  $('.how_it_works-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})
  
  $('.faq-item').click(function(){
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(300);
  });
  
  var H = new Date().getHours();
  var m = new Date().getMinutes();
  
//  var H = 15;
//  var m = 57;
    m = Number(m)+10;
    
    if(m > 60) {
      m = m - 60;
      H = Number(H) + 1; 
        if(m < 10){
          m = "0"+m;
        }
    }
  
  $('.time').text(H+":"+m);

  
  
  setInterval(function(){
       H = new Date().getHours();
       m = new Date().getMinutes();
    m = Number(m)+10;
    
    if(m > 60) {
      m = m - 60;
      H = Number(H) + 1; 
      if(m < 10){
        m = "0"+m;
      }
    }
    $('.time').text(H+":"+m);
  }, 10000);
  
});