$(function() {
  $(".js-additem").click(function(event) {
    $("ul").append(
      "<li>" + $("input").val() + "</li>"
    );
  });  
  $("shopping-item").click(function(event) {
   $(this).find(".shopping-item").toggleClass("shopping-item__checked");
  });
  $("shopping-item").click(function(event) {
   this.remove();
 });
});  
