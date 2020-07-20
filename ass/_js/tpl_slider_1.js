$(document).ready(function() {
   $('#slide_1-container').load('https://7rus.github.io/ass/tpl/slider_1.html');
   setTimeout(function(){ 
   	 $('a.navresume').addClass("active");
   	 $('a.navwork').addClass("active");
   }, 0);
});