$(document).ready(function() {
   $('#nav-container').load('https://7rus.github.io/ass/tpl/navbar.html');
   setTimeout(function(){ 
   	 $('a.navresume').addClass("active");
   	 $('a.navwork').addClass("active");
   }, 0);
});