var hidden = $(".research-title, .research-page-title, .arrows, #research-description, #research-cta, .main-nav-bar, .main-nav-break");
hidden.hide();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("main-navigation");
//     if (x.className === "main-nav-bar") {
//         x.className += "responsive";
//     } else {
//         x.className = "main-nav-bar";
//     }
// }

$(document).ready(function(){
  $(".main-nav-bar").fadeIn(500);
  // Targeting links to slide in individually after hiding them individually.
  $(".main-nav-break, #landing-page-divide").hide().show("slide", { direction: "up" }, 1000);
  $("#main-nav-indago, #main-nav-about, #main-nav-research").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-contact, #main-nav-clients, #splash-copy").hide().show("slide", { direction: "left" }, 1000);
  $("#splash-title").hide().delay(300).show("slide", { direction: "left" }, 1000);
  $(".client-logo").hide().fadeIn(1500);


  $(".research-page-title").delay(1000).show("slide", { direction: "left" }, 1000);
  $(".research-title").show("slide", { direction: "left" }, 1000);
  $(".arrows, #research-description").fadeIn(1500);
  $("#research-cta, .client-img, .client-logo").fadeIn(2500);

  $(".arrow-link").click(function(){
    $(".research-nav-item, .homeButton").toggleClass("disappear");
    $(".research-copy-container, .arrows").fadeOut(1000);
    $(".research-title").hide("slide", { direction: "left" }, 1000);
    $(".main-nav-break").hide("slide", { direction: "down" }, 1000);
    $("#main-nav-indago").hide("slide", { direction: "right" }, 1000);
    $("#main-nav-contact").hide("slide", { direction: "left" }, 1000);
    $("#main-nav-about").hide("slide", { direction: "right" }, 1000);
    $("#main-nav-research").hide("slide", { direction: "right" }, 1000);
    $("#main-nav-clients").hide("slide", { direction: "left" }, 1000);
    var href = $(this).attr('href');
    setTimeout(function(){window.location = href},1000);
    return false;
  });

  $("#main-nav-responsive-icon-initial").click(function(){
    $("#main-nav, #main-nav-responsive-icon-overlay").fadeIn(1000);
  });

  $("#main-nav-responsive-icon-overlay").click(function(){
    $("#main-nav, #main-nav-responsive-icon-overlay").fadeOut(1000);
  });


});


// $(".arrows").click(function(){
//   $("#research-description, #research-cta").fadeOut(1000);
// });


// $(document).ready(function() {
//     $("#card").css("top","0px");
//     $(".clickit").click(function() {
//         $("#card").css("top","-500px");  // Added px to make it work,
//                                          //   or get rid of quotes -500
//         var href = $(this).attr('href');
//
//              // Delay setting the location for one second
//         setTimeout(function() {window.location = href}, 1000);
//         return false;
//     });
// });​
