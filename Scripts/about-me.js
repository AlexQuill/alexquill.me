$(document).ready(function() {

  $('#container-1-box3').hide();

  $('.dropdown-container').click(function(event) {
    console.log(event)
    $(event.currentTarget).find('.dropdown-slide').slideToggle(800);
  })

  $('#container-1-box3-starter').click(function(){
    $('#container-1-box3').slideDown(800);
    $('#container-1-box3-starter').slideUp(10);
  })

  $('#container-1-box3').click(function() {
    $('#container-1-box3-starter').slideDown(800);
    $('#container-1-box3').slideUp(10);
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
