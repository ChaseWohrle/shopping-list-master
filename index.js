$(function() {
  $("button").click(function(event) {
    $("ul").append(
      "<li>" + $("input").val() + "</li>"
    );
  });  
  $("li").click(function(event) {
    this.toggleClass();
  });
  $("").click(function(event) {
    this.remove();
  });
});  
