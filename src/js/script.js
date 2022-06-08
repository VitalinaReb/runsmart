// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.jpg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/right.jpg"></button>',
      
//     });
//   });
      

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false
  });


document.querySelector('.carousel__prev').onclick = function () {
  slider.goTo('prev');
};

document.querySelector('.carousel__next').onclick = function () {
    slider.goTo('next');
  };

$(function() {

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
  
  $('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })

    
  });
  
  //modal

  $('[data-modal=consultation]').on('click',function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #close').fadeOut('slow')
  });
  $('.button__mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow')
  });
  $('.button__mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  // $('#consultation-form').validate();
  // $('#consultation form').validate({
  //   rules: {
  //     name: "required",
  //     phone: "required",
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "пожалуйста, введите свое имя",
  //     phone: "пожалуйста",
  //     email: {
  //       required: "пожалуйста, введите свою почту",
  //       email: "неправильно"
  //     }
  //   }
  // });
  // $('#order form').validate();

  function valideForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "пожалуйста, введите свое имя",
        phone: "пожалуйста",
        email: {
          required: "пожалуйста, введите свою почту",
          email: "неправильно"
        }
      }
    });

  };
  
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  
 //////its dont work !!!!! ////

  //   $('form').submit(function(e) {
  //     e.preventDefault();
      
  //   if (!$(this).valid()) {
  //     return; 
  //   }
  //     $.ajax({
  //         type: "POST",
  //         url: "mailer/smart.php",
  //         data: $(this).serialize()
  //     }).done(function() {
  //         $(this).find("input").val("");
  //         $('#consultation, #order').fadeOut();
  //         $('.overlay, #thanks').fadeIn('slow');

  //         $('form').trigger('reset');
  //     });
  //     return false;
  // });

   

            ///scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();  
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;

  });

  new WOW().init()

});