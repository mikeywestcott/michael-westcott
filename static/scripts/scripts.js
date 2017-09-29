document.documentElement.className = "js";

$( "#nav-toggle" ).click(function() {
  $( "body" ).toggleClass( "nav-open" );
});

if($('.fluid-video').length >0 ){
    $(".fluid-video").fitVids({
      customSelector: 'iframe[src*="facebook"]'
  });
}
