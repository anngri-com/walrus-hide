$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn(1000);
  });
  $(".clickable").click(function() {
    $("#walrus-showing").fadeOut(3000);
  });

// Second lesson starts here

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

  // Third lesson starts here

  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello there</li>");
    $("ul#web").prepend("<li>Why, Hello my friend!</li>");

    $("ul#user").children("li").first().click(function(){
      alert("Hello Friend!");
      $(this).remove();
    });

    $("ul#web").children("li").first().click(function(){
      alert("Hello! Hello!");
      $(this).remove();
    });
  });


  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye firend</li>");
    $("ul#web").prepend("<li>Bye bye dear friend!</li>");
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop! Just, stop!</li>");
    $("ul#web").prepend("<li>I stoped, promise! :)</li>");
  });

});
