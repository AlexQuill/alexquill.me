$(document).ready(function() {

  $('.dropdown-container').click(function(event) {
    console.log(event)
    $(event.currentTarget).find('.dropdown-slide').slideToggle(800);
  })

  $('#Header-title').hover(function(){
    $("#Header-title").animate({
      opacity: '0.5',
      fontSize: '4em'
    });
  });

  $('#Header-title').mouseleave(function(){
    $("#Header-title").animate({
      opacity: '1.0',
      fontSize: '3em'
    });
  });

});
