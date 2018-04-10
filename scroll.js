$(function() {//ready DOM
  //caching DOM queries...
  var scrollDown = $("a.scrollDown");
  var scrollUp = $("a.scrollUp");
  var showcase = $("div.showcase");
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      scrollUp.addClass("slideIn");
    } else {
      scrollUp.removeClass("slideIn");
    }
  });//end window on scroll function
  scrollUp.on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "1000");
  });//end smooth scroll to top function
  scrollDown.on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: showcase.offset().top}, "1000");
  })//end smooth scroll down function
});//end jQuery
