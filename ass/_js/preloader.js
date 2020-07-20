$(window).load(function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// Animated CSS preloader from http://tobiasahlin.com/spinkit/
// Excellent preloader example found here: http://ismet.me/index.html
<div id="preloader">
  <div id="status">
     <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</div>