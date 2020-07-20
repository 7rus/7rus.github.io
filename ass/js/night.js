$(function() {
/*  let option = {
  responsive: true,
  // set font color
  scaleFontColor: "#fff",
  // font family
  defaultFontFamily: "'Roboto', sans-serif",
  // background grid lines color
  scaleGridLineColor: "rgba(255,255,255,.1)",
  // hide vertical lines
  scaleShowVerticalLines: false,
};
*/
$('#dark-mode').on('click', function(e) {

  e.preventDefault();

  $('h4, h2, button').not('.check').toggleClass('grey-text text-white');
  $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');
  $('.list-panel a').toggleClass('dark-grey-text');
  $('footer, .card').toggleClass('dark-card-admin');
  $('body, .navbar, .navbar-nav').toggleClass('white-skin navy-blue-skin');
  $(this).toggleClass('white text-dark btn-outline-black');
  $('body').toggleClass('dark-bg-admin');
  $('h6, .card, td, th, i, li a, input, label').not(
    '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
  $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
//  $('.gradient-card-header').toggleClass('white black lighten-4');
  $('.parallax4').toggleClass('white-skin navy-blue-skin');
});
});
