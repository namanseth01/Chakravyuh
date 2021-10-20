$(document).ready(function () {});

const start = () => {
  setTimeout(function () {
    $("#two").toggle();
    $("#two").toggleClass("content");
  }, 400);
  setTimeout(function () {
    $("#three").toggle();
    $("#three").toggleClass("content");
  }, 800);
  setTimeout(function () {
    $("#four").toggle();
    $("#four").toggleClass("content");
  }, 1200);
  setTimeout(function () {
    $("#five").toggle();
    $("#five").toggleClass("content");
  }, 1200);
};
