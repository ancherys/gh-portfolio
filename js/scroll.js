$(document).ready(function () {
  $("#navbar a, .button, .box a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 0,
        },
        1500
      );
    }
  });

  $("#goTopButton").hide();
  // Fade in goTopButton
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $("#goTopButton").fadeIn();
      } else {
        $("#goTopButton").fadeOut();
      }
    });

    // Scroll to top on click
    $("#goTopButton").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
});
