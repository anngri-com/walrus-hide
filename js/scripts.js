$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn(1000);
  });
  $(".clickable").click(function() {
    $("#walrus-showing").fadeOut(3000);
  });

/* Button function starts here */

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    // $("p").css("color", "white");
    // $("h1").css("color", "white");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
