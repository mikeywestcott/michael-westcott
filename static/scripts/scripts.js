document.documentElement.className = "js";

$( "#nav-toggle" ).click(function() {
  $( "body" ).toggleClass( "nav-open" );
});

if($('.fluid-video').length >0 ){
    $(".fluid-video").fitVids({
      customSelector: 'iframe[src*="facebook"]'
  });
}

if($('.quote-rotator').length >0 ){
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("quote");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 20000);
  }
}
