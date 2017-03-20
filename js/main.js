var app = app || {};
console.log(_.VERSION);

// console.log('hello world');
$(document).ready(function () {

  var colour = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#7f00ff', '#ff00ff', '#ff007f'];

  var colour = ['#8f52a5', '#ab78d5', '#c793db', '#d0a4e3', '#e8d4f0'];

  var colour = ['#6BFFCE', '#77DAC3', '#83B5B8', '#8E90AC', '#9A6BA1', '#A64696'];

  var colours = ['#c9f0ff', '#eafffd', '#efeff0'];

var $circle = $('.title')
// .css('background-color', 'rgb(255,99,177)')
$circle.css('background-color', colours);

_.each(colours, function(c) {
  console.log(c);
});

var cycle =   _.each(colours, function(c) {
    console.log(c);
  });

  var random =

// $circle.on('mouseover', function () {
//   console.log('hi');
//   $(this).animate({
//     'background-color': (_.sample(colours))
//   }, 500);

// });

$circle.mouseover( function () {
  // console.log('hi');
  $(this).css('background-color', (_.sample(colours)));
  // console.log($(this).css('background-color'));
});

// $circle.hover(
//
//     function(){
//         $(this).animate({'backgroundColor': '#f5f5f5'},400);
//         console.log('hello');
//     },
//     function(){
//         $(this).animate({'backgroundColor': '#000'},400);
//         console.log('bye');
//     }
//
// );


var navHeight = $('nav').position().top;

$(window).bind('scroll', function() {


  // $('nav').position().top;
  // $( window ).height() - 70;
  console.log($('nav').position());

  console.log($(window).scrollTop() + ' ST');
  console.log($(window).height() + ' window');
  console.log(navHeight + ' NH');
  if ($(window).scrollTop() >= navHeight) {
    // $('nav').removeClass('bottom');
    $('nav').addClass('fixed');
    $('div.projects').addClass('compensate');
  }
  else if($(window).scrollTop() <= navHeight){
    $('nav').removeClass('fixed');
    $('div.projects').removeClass('compensate');

    // $('nav').addClass('bottom');
  } else {
    console.log('working?');
  }
});

// $(window).bind('scroll', function () {
//     var navBarY = $( window ).height() - 70;
//         if ($(window).scrollTop() >= navBarY) {
//             $("nav").addClass("fixed");
//         } else {
//             $("nav").removeClass("fixed");
//         }
// });





});
