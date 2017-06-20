
$(document).ready(function () {

var scrollT = $(window).scrollTop();
console.log(scrollT);


var navHeight = $('nav').position().top;

$(window).bind('scroll', function() {



  if ($(window).scrollTop() >= navHeight) {
    $('nav').addClass('fixed');
    $('div.projects').addClass('compensate');
  }
  else {
    $('nav').removeClass('fixed');
    $('div.projects').removeClass('compensate');
  }

  // var scrollT = $(window).scrollTop();
  // console.log(scrollT);
  // if(scrollT >= 100) {
  //   $("#nav").css({
  //     'padding-bottom': '10%',
  //     'background-color': 'red'
  //
  //   })
  // } else {
  //   $("#nav").css({
  //     'padding-bottom': '30%',
  //     'background-color': 'blue'
  //
  //   })
  // }

});







});
