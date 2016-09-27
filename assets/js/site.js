/*$flkty.on( 'scroll.flickity', function( event, progress ) {
  console.log('ok');
});
*/

//iniciando o wow.js
    new WOW().init();



// slecionando elemento no flickity
var $flkty = new Flickity('#servicos .carousel');
 $flkty.select(1);



function blink(){
    $('.DescServico').addClass('fadeIn');
    setTimeout(function(){
      $('.DescServico').removeClass('fadeIn');
    },1000);
}

  function blink1() {
    
    $('.DescServico').addClass('fadeIn');

    };
    
 function rmClass(){
  $('.DescServico').removeClass('fadeIn');
    
 }

function trocaTextoServico(nomeServico){

var titulo; 
var texto;

switch(nomeServico) {


    case "carousel-cameras":
        titulo = "Camêras online em HD 24 Hs";
        texto = "Nosso espaço possui cameras de alta qualidade. Disponível por acesso remoto via web."
        break;
    case "carousel-taxi":
        titulo = "Táxi dog";
        texto = "Nós oferecemos o serviço de leva e traz com ar-condicionado ou ar-quente. "+
                " Atendemos capital de São Paulo e interior.";
        break;
    case "carousel-supervisao":
        titulo = "Supervisão veterinária 24 horas";
        texto = "Para que você viaje tranquilamente sabendo que seu cãozinho estará em boas mãos "+
                "pois nossa equipe possui a supervisão veterinária 24 horas por dia no hotel";
        break;
    case "carousel-suites":
        titulo = "Suítes com serviço de quarto";
        texto = "Nosso cardápio formulado por chef's de cozinha veterinários está disponível para"+
                " todos os cães hospedados em nosso hotel. ";
        break;
    case "carousel-playground":
        titulo = "Playground o dia inteiro!";
        texto = "Os animais tem acesso a toda nossa área de lazer. Onde vai poder fazer novas "+
                 "amizades. Participar de várias brincadeira. Brincar com nossos brinquedos "+ 
                 "anti-stress e o principal GASTAR MUITA ENERGIA!";
        break;
    default:
         titulo = "Atividades e brinquedos anti-stress";
         texto = "Com os brinquedos anti-stress os animais passam mais tempo entretidos nas "+ 
                 " brincadeiras e portanto mais tempo se divertindo e gastando mais energia. "+
                 "Gerando um aumento do bem estar animal. ";
}

   $('.tituloDescServico').html(titulo);
   $('.textoDescServico').html(texto);
}


$(document).ready( function() {
  

  
  var $gallery = $('#servicos .carousel').flickity();
  
  // Flickity instance
  var flkty = $gallery.data('flickity');
  
  $gallery.on(  'select.flickity', function() {
    var name = $( flkty.selectedElement ).data('name');
    console.log( name );
    trocaTextoServico(name)
    blink();
  });

  $('.flickity-page-dots').css('display','none');
  $('.carousel-cell').css('cursor','pointer');

  
});


// Video player
function tocarVideo(){
$('#btnPlay').css('display','none')
var video = document.getElementById("video");
video.play();
}

if($( document ).width() > 767){
 tocarVideo()
}


  /**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}   

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

// expandir e comprimir navbar //

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



//iniciando o efeito parallax
(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

// modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// galeria

jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
              {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $Cols: 6,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 960);
                    refSize = Math.max(refSize, 300);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
