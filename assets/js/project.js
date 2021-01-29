// Any project-specific code — listeners and triggers for plugins

$(document).ready(function() {

  // Animate some scrolling for smoother transitions 
  $(function() {
    $('.js-smoothscroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });


  var items = $('.js-scroll-item');
  
  $(window).on("scroll", () => {
    items.each(function() {
      // Variables that are constant
      //var bodyHeight = $('body').outerHeight();
      var viewportHeight = $(window).height();
      var item = $(this);
      var itemOffset = item.offset();
      var itemOffsetTop = itemOffset.top;
      // var debug = item.find('.statistics');
      
      // Variable data that changes per element
      var scrollPosition = $(window).scrollTop();
      
      // Gets us right to the bottom and top of viewport
      // Less than 0 opacity at bottom, 1 or more at top
      // var elemCalc = ((viewportHeight + scrollPosition) - itemOffsetTop) / viewportHeight;
      
      // Needs to happen quicker though
      // Multiply by 0.75 means it is 1.0 opacity at 75% of the viewport height
      var elemCalc = ((viewportHeight + scrollPosition) - itemOffsetTop) / (viewportHeight * 0.75);
      
      //debug.html(
      //  '<b>viewportHeight</b> = ' + viewportHeight + ' | ' + 
      //  '<b>scrollPosition</b> = ' + scrollPosition + ' | ' +
      //  '<b>itemOffsetTop</b> = ' + itemOffsetTop + ' | '
      //);
      
      item.css({ opacity: elemCalc });
    });
  });

});

document.addEventListener( 'DOMContentLoaded', function () {
  // Modified slightly to add the Footer Height to the Scroll Length
  // The effect is now that the background is 0 opacity when the footer
  // enters the viewport.
  // To remove the effect, set scroll_height to window.innerHeight
  // and remove the rest.
  
  var root = document.body.style;
  //console.log(root);
  //var sponsor_height = $("#sponsors").outerHeight(true);
  var footer_height = $("#mainfoot").outerHeight(true);
  var viewport_height = window.innerHeight;
  var scroll_height = viewport_height + footer_height;
  //console.log("footer_height = " + footer_height);
  //console.log("viewport_height = " + viewport_height);
  //console.log("scroll_height = " + scroll_height);
  //console.log("window.pageYOffset = " + window.pageYOffset);
  //console.log("document.body.offsetHeight = " + document.body.offsetHeight);

  // Initialize variables
  root.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - scroll_height));
  //console.log("--scroll = " + window.pageYOffset / (document.body.offsetHeight - scroll_height));
  //console.log(window.pageYOffset + " / " + document.body.offsetHeight + " - " + scroll_height);

  // Scroll events
  window.addEventListener('scroll',scroll,false);
  function scroll() {
    root.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - scroll_height));
    //console.log("--scroll = " + window.pageYOffset / (document.body.offsetHeight - scroll_height));
    //console.log(window.pageYOffset + " / " + document.body.offsetHeight + " - " + scroll_height);
  }
});
