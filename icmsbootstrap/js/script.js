/* Custom scripts */

/* (dropdown-toggle) = Toggle*/
/* (button.noConflict) = Killed the conflict with jQuery UI "close-button"*/
$(function() {
      $('.dropdown-toggle').dropdown();
      $('.dropdown-menu').find('form').click(function(e) {
      e.stopPropagation();
      });
      
      if($.fn.button.noConflict) {
      $.fn.btn = $.fn.button.noConflict();
      }
});