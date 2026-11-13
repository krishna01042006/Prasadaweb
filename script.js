// jQuery code for a small heading effect
$(document).ready(function () {
  $("h2").css("cursor", "pointer");

  $("h2").click(function () {
    $(this).next().slideToggle();
  });

  // JavaScript form validation
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      $("#result").text("Please fill in all fields.");
    } else {
      $("#result").text("Thank you, " + name + "! Your form has been submitted (demo).");
      $("#contactForm")[0].reset();
    }
  });
});
