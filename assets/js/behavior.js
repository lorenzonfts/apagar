
function scrollSection(sec){

    $('html, body').animate({
        scrollTop: $('#' + sec).offset().top,
        easing: 'easeInQuart'
    }, 1000);

}

$('body').on('click', '.menu', function(e){
    e.preventDefault();

    switch ($(this).prop('id')) {
        case '1':
            scrollSection('quem-e-a-aaron');
            break;
        case '2':
            scrollSection('o-que-fazemos');
            break;
        case '3':
            scrollSection('como-fazemos');
            break;
        case '5':
            scrollSection('bagagem');
            break;
        case '6':
            scrollSection('contato');
            break;


    }

});

$('a[href="#"]').click(function(){
    scrollSection('contato')
});

/*$('.form-contact').on('submit', function(e){
    e.preventDefault();

    $('.form-contact button').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
    $.post('includes/enviamail.php', $(this).serialize())
    .done(function(data){
        $('.form-contact button').html('Vamos tomar um café');

        var result = JSON.parse(data);
        if(result.status){

            $('#modal-retorno').modal('show');
            $('.container-body-modal').html(result.message);
            $('.form-contact').trigger('reset');

        }else{

            $('#modal-retorno').modal('show');
            $('.container-body-modal').html(result.message);

        }

    });
}); */

$('.btn-menu').click(function(){

    $('.menutopo').slideToggle();
    $('.menutopo').css();

});

$('.arrowup').click(function(){
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});

function showElement(elem){

    $('.' + elem).animate({

        opacity : 1
    }, 1000);

}

function animaMenu(item){

    $('.menutopo ul li')[item].style.opacity = 1;

}

setTimeout(function(){
    animaMenu(0);
}, 200);

setTimeout(function(){
    animaMenu(1);
}, 400);

setTimeout(function(){
    animaMenu(2);
}, 600);

setTimeout(function(){
    animaMenu(3);
}, 800);

setTimeout(function(){
    animaMenu(4);
}, 1000);

setTimeout(function(){
    animaMenu(5);
}, 1200);

setTimeout(function(){
    showElement('aaron-marketing img');
}, 1500);

setTimeout(function(){
    showElement('consultoria-marketing');
}, 2000);

setTimeout(function(){
    showElement('aaron-marketing a');
    $('.aaron-marketing a').addClass('jackInTheBox');
}, 2500);

$(function(){

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('img-header'),
      handler: function(direction) {
          $('.title-section')[0].style.opacity = 1;
          $('.title-section')[0].style.left = 0;
      }
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('parag1')[0],
      handler: function(direction) {
          $('.title-section')[1].style.opacity = 1;
          $('.title-section')[1].style.left = 0;
      }
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('parag1')[1],
      handler: function(direction) {
          $('.title-section')[2].style.opacity = 1;
          $('.title-section')[2].style.left = 0;
      }
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('metodologias'),
      handler: function(direction) {
          $('.title-section')[3].style.opacity = 1;
          $('.title-section')[3].style.left = 0;
      }
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('parag1')[3],
      handler: function(direction) {
          $('.container-form').addClass('jackInTheBox');
      }
    })


});

function nextSection(sec, direction){

    var $section = $('section');
    switch (sec) {
        case 2:
            if(direction == 'up'){
                $('html, body').animate({ scrollTop : $section[0].offsetTop }, 600);
            }else{
                $('html, body').animate({ scrollTop : $section[2].offsetTop }, 600);
            }
            break;
        case 3:
            if(direction == 'up'){
                $('html, body').animate({ scrollTop : $section[1].offsetTop }, 600);
            }else{
                $('html, body').animate({ scrollTop : $section[3].offsetTop }, 600);
            }
            break;
        case 4:
            if(direction == 'up'){
                $('html, body').animate({ scrollTop : $section[2].offsetTop }, 600);
            }else{
                $('html, body').animate({ scrollTop : $section[4].offsetTop }, 600);
            }
            break;
        case 5:
            if(direction == 'up'){
                $('html, body').animate({ scrollTop : $section[3].offsetTop }, 600);
            }else{
                $('html, body').animate({ scrollTop : $section[5].offsetTop }, 600);
            }
            break;
        case 6:
            if(direction == 'up'){
                $('html, body').animate({ scrollTop : $section[4].offsetTop }, 600);
            }else{
                $('html, body').animate({ scrollTop : $section[6].offsetTop }, 600);
            }
            break;
        default:

    }


}
