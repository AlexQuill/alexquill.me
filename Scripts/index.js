$(document).ready(function() {

  $('#description-title').hover(function(){
    $("#description-title").animate({
      opacity: '0.5',
      fontSize: '3.5em'
    });
  });

  $('#nav').mouseleave(function(){
    $("#description-title").animate({
      opacity: '1.0',
      fontSize: '3em'
    });
  });
});
