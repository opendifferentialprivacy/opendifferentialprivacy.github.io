$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");
  
  $( ".header-card" ).hover(
    function() {
      $(this).addClass('purple-card').css('cursor', 'pointer'); 
      $(".card-text", this).addClass('white');
      $(".card-text", this).addClass('alpha');
      $(".icon-dark", this).addClass('hide-me');
      $(".icon-light", this).addClass('show-me');
      // $(this).find(".header-card .card-text").addClass('light'); 
    }, function() {
      $(this).removeClass('purple-card');
      $(".card-text", this).removeClass('white');
      $(".card-text", this).removeClass('alpha');
      $(".icon-dark", this).removeClass('hide-me');
      $(".icon-light", this).removeClass('show-me');
    }
  );

  $( ".dark-card" ).hover(
    function() {
      $(this).addClass('white-card').css('cursor', 'pointer'); 
      $(".card-text", this).addClass('dark');
      $(".icon-purple", this).addClass('show-me');
      $(".icon-white", this).addClass('hide-me');
      $(".card-bullet", this).addClass('medium');
      // $(this).find(".header-card .card-text").addClass('light'); 
    }, function() {
      $(this).removeClass('white-card');
      $(".card-text", this).removeClass('dark');
      $(".icon-purple", this).removeClass('show-me');
      $(".icon-white", this).removeClass('hide-me');
      $(".card-bullet", this).removeClass('medium');
    }
  );

     $(document).click(function (event) {
         var clickover = $(event.target);
         var _opened = $(".navbar-collapse").hasClass("show");
         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
             $(".navbar-toggler").click();
         }
     });
  
// document ready  
});

