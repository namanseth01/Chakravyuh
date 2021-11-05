$(document).ready(function () {});

const toggle = () => {
  $("#drop-id").click(function () {
    $(".drop").slideToggle();
  });
};

const start = () => {
  setTimeout(function () {
    $("#two").toggle();
    $("#two").toggleClass("anime");
  }, 400);
  setTimeout(function () {
    $("#three").toggle();
    $("#three").toggleClass("anime");
  }, 800);
  setTimeout(function () {
    $("#four").toggle();
    $("#four").toggleClass("anime");
  }, 1200);
};
