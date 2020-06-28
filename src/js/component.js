$(document).ready(function () {
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
    $(this).parents('.content').find('.loan_input-text .title').text($val + " ₴")


  })

  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    }
  })

  $('.how_it_works-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  })

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(300);
  });

  var H = new Date().getHours();
  var m = new Date().getMinutes();

  //  var H = 15;
  //  var m = 57;
  m = Number(m) + 10;

  if (m > 60) {
    m = m - 60;
    H = Number(H) + 1;
    if (m < 10) {
      m = "0" + m;
    }
  }

  $('.time').text(H + ":" + m);



  setInterval(function () {
    H = new Date().getHours();
    m = new Date().getMinutes();
    m = Number(m) + 10;

    if (m > 60) {
      m = m - 60;
      H = Number(H) + 1;
      if (m < 10) {
        m = "0" + m;
      }
    }
    $('.time').text(H + ":" + m);
  }, 10000);


  $('#consent').on('change', function () {
    if ($('#consent').prop('checked')) {
      $('#submit').attr('disabled', false);
    } else {
      $('#submit').attr('disabled', true);
    }
  });
  $("input[name='phone']").mask("+38 (999) 99-99-999");
  $('.date').mask('99/99/9999');
  $('.cvv').mask('999');
  $('.card-input input').mask('9999');

  $('.edit').click(function (e) {
    e.preventDefault();
    $(this).parents('.form-loan').find('.summ_number').removeAttr('disabled').focus();
  })


  $('[name="passport_type"]').on('change', function () {
    if ($(this).is(':checked')) {
      $('.passport_type .title').removeClass('active');
      $('.passport_type-content').removeClass('active');
      $('.old').addClass('active');

      $('.passport_type-content input').each(function () {
        $(this).removeAttr('required')
      })

      $('.passport_type-content.old input').each(function () {
        $(this).attr('required', 'required')
      })
    } else {
      $('.passport_type .title').removeClass('active');
      $('.passport_type-content').removeClass('active');
      $('.new').addClass('active');

      $('.passport_type-content input').each(function () {
        $(this).removeAttr('required')
      })

      $('.passport_type-content.new input').each(function () {
        $(this).attr('required', 'required')
      })
    }
  })
  $('.passport_type .title.old').click(function () {
    $('[name="passport_type"]').attr('checked', 'checked');
  })
  $('.passport_type .title.new').click(function () {
    $('[name="passport_type"]').removeAttr('checked');
  })

  $('.passport_type .title').click(function () {
    $('.passport_type .title').removeClass('active');
    $('.passport_type-content').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).data('tab')).addClass('active');

    if ($('[name="passport_type"]').is(':checked') && $('[name="passport_type"]').attr('id') == 'old') {

      $('.passport_type-content input').each(function () {
        $(this).removeAttr('required')
      })

      $('.passport_type-content.old input').each(function () {
        $(this).attr('required', 'required')
      })
    } else {
      $('.passport_type-content input').each(function () {
        $(this).removeAttr('required')
      })

      $('.passport_type-content.new input').each(function () {
        $(this).attr('required', 'required')
      })
    }

  })

  $('.info').hover(function () {
      $(this).append('<div class="info_show">' + $(this).data('info') + '</div>')
    },
    function () {
      $('.info_show').remove();
    })

  $('.scroll').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });
  
  
    var observer = lozad();
  observer.observe();
  
});